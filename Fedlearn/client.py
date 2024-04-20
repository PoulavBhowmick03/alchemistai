import socket
import pickle
import numpy as np
import cv2
import os
import tensorflow as tf
import logging

logging.basicConfig(level=logging.INFO)

def load_images_from_folder(folder):
    images = []
    labels = []
    for label, class_name in enumerate(os.listdir(folder)):
        class_folder = os.path.join(folder, class_name)
        for filename in os.listdir(class_folder):
            img = cv2.imread(os.path.join(class_folder, filename))
            if img is not None:
                img = cv2.resize(img, (224, 224))  # Resize image to desired dimensions
                img = img / 255.0  # Normalize pixel values to [0, 1]
                images.append(img)
                labels.append(label)
    return np.array(images), np.array(labels)

train_images, train_labels = load_images_from_folder('./train')
test_images, test_labels = load_images_from_folder('./test')

def train_local_model(train_images, train_labels):
    # Define your model architecture
    model = tf.keras.Sequential([
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(512, activation='relu'),
        tf.keras.layers.Dense(1, activation='sigmoid')
    ])
    # Compile the model
    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])
    # Train the model
    model.fit(train_images, train_labels, epochs=10)
    return model

def main():
    # Load the global model
    global_model = tf.keras.models.load_model('global_model.h5')
    logging.info("Loaded global model.")

    # Create socket
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Define server address and port
    SERVER_ADDRESS = 'localhost'
    PORT = 12345
    # Set socket timeout
    client_socket.settimeout(30)  # 30 seconds timeout (adjust as needed)
    
    # Counter for sending weights to the server
    send_counter = 0
    # Counter for receiving updated weights from the server
    receive_counter = 0
    
    try:
        # Connect to server
        client_socket.connect((SERVER_ADDRESS, PORT))
        logging.info(f"Connected to server at {SERVER_ADDRESS}:{PORT}")
        # Train local model
        local_model = train_local_model(train_images, train_labels)
        # Get model weights
        local_model_weights = local_model.get_weights()
        
        # Increment the send counter
        send_counter += 1
        
        # Send model weights to server
        client_socket.sendall(pickle.dumps(local_model_weights))
        logging.info("Sent model weights to server.")
        
        # Receive updated model weights from server
        updated_model_weights = client_socket.recv(1024 * 1024)
        updated_model_weights = pickle.loads(updated_model_weights)
        
        # Increment the receive counter
        receive_counter += 1
        
        # Update local model with new weights
        local_model.set_weights(updated_model_weights)
        logging.info("Updated local model with new weights.")
    except socket.timeout:
        logging.error("Socket timed out waiting for server response.")
    except socket.error as e:
        logging.error(f"Socket error: {e}")
    except Exception as ex:
        logging.error(f"An error occurred: {ex}")
    finally:
        client_socket.close()
        logging.info("Socket closed.")
        
        # Print the send and receive counters
        logging.info(f"Sent weights to server {send_counter} time(s).")
        logging.info(f"Received updated weights from server {receive_counter} time(s).")

if __name__ == "__main__":
    main()
