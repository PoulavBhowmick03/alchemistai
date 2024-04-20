import socket
import pickle
import numpy as np
import tensorflow as tf

# Define server address and port
SERVER_ADDRESS = 'localhost'
PORT = 12345

# Load the existing global model from the file
global_model = tf.keras.models.load_model('global_model.h5')

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