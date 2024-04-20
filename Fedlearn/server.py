import socket
import pickle
import numpy as np
import tensorflow as tf

# Define server address and port
SERVER_ADDRESS = 'localhost'
PORT = 12345

# Load the existing global model from the file
global_model = tf.keras.models.load_model('global_model.h5')



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

def create_model():
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
    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])
    return model

def federated_averaging(global_model, client_models):
    new_weights = []
    for weights_list in zip(*[model.get_weights() for model in [global_model] + client_models]):
        new_weights.append(np.array(weights_list).mean(axis=0))
    global_model.set_weights(new_weights)

# Load global model
global_model = create_model()
global_model.load_weights('global_model.h5')

# Load and preprocess client data
train_images_client1, train_labels_client1 = load_images_from_folder('./client1/train')
train_images_client2, train_labels_client2 = load_images_from_folder('./client2/train')

# Train client models
client_model1 = create_model()
client_model1.fit(train_images_client1, train_labels_client1, epochs=10, verbose=0)

client_model2 = create_model()
client_model2.fit(train_images_client2, train_labels_client2, epochs=10, verbose=0)

# Perform federated averaging
federated_averaging(global_model, [client_model1, client_model2])

# Save updated global model
global_model.save('global_model_updated.h5')

# Function to aggregate model updates from clients
def aggregate_model_updates(client_updates):
    global global_model
    if global_model is None:
        global_model.set_weights(client_updates)
    else:
        # Implement element-wise weighted averaging
        global_model_weights = global_model.get_weights()
        client_weights = client_updates
        updated_weights = [global_weight * 0.5 + client_weight * 0.5 for global_weight, client_weight in zip(global_model_weights, client_weights)]
        global_model.set_weights(updated_weights)
    return global_model

# Function to handle client requests
def handle_client(client_socket):
    global global_model
    # Receive model update from client
    data = b''
    while True:
        chunk = client_socket.recv(1024 * 1024)
        if not chunk:
            break
        data += chunk
    client_updates = pickle.loads(data)

    # Print statement to show that the server received the weights
    print("Server received client weights successfully.")

    # Aggregate model updates
    updated_model_weights = aggregate_model_updates(client_updates)

    # Send confirmation back to client (optional)
    client_socket.sendall(b'Weights updated successfully.')
    client_socket.close()

# Main function
def main():
    global global_model
    # Create socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Bind server to address and port
    server_socket.bind((SERVER_ADDRESS, PORT))
    # Listen for incoming connections
    server_socket.listen()
    print(f"Server listening on {SERVER_ADDRESS}:{PORT}")

    # Accept incoming connections from clients
    while True:
        client_socket, client_address = server_socket.accept()
        print(f"Connected to client: {client_address}")
        # Handle client request in a separate thread or process
        handle_client(client_socket)

if __name__ == "__main__":
    main()
