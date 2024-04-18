import flwr as fl
import torch

# ... (import libraries, define transforms, etc.)

# Load data specific to this client (partition trainData and valData)
# ...

DEVICE = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")


def train(net, trainloader, epochs):
    criterion = nn.BCEWithLogitsLoss()
    optimizer = optim.Adam(net.parameters(), lr=0.001)
    for _ in range(epochs):
        for images, labels in trainloader:
            images, labels = images.to(DEVICE), labels.to(DEVICE)
            labels = labels.unsqueeze(1).float()
            optimizer.zero_grad()
            outputs = net(images)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()


def test(net, testloader):
    criterion = nn.BCEWithLogitsLoss()
    correct, total, loss = 0, 0, 0.0
    with torch.no_grad():
        for images, labels in testloader:
            images, labels = images.to(DEVICE), labels.to(DEVICE)
            labels = labels.unsqueeze(1).float()
            outputs = net(images)
            loss += criterion(outputs, labels).item()
            predicted = (torch.sigmoid(outputs) > 0.5).float()
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
    accuracy = correct / total
    return loss, accuracy


# Define Flower client
class FlowerClient(fl.client.NumPyClient):
    def get_parameters(self):
        return [val.cpu().numpy() for val in model.parameters()]

    def fit(self, parameters, config):
        # Update model parameters
        model.set_weights(parameters)

        # Train the model
        train(model, trainLoader, epochs=1)

        return self.get_parameters(), len(trainData), {}

    def evaluate(self, parameters, config):
        # Update model parameters
        model.set_weights(parameters)

        # Evaluate the model
        loss, accuracy = test(model, valLoader)
        return float(loss), len(valData), {"accuracy": float(accuracy)}


# Start Flower client
fl.client.start_numpy_client("[::]:8080", client=FlowerClient())

# import flwr as fl

# # Define the Flower client
# class FlowerClient(fl.client.NumPyClient):
#     def __init__(self):
#         self.model = None

#     def get_parameters(self):
#         return self.model.get_parameters() if self.model else []

#     def set_parameters(self, parameters):
#         if self.model:
#             self.model.set_parameters(parameters)

#     def fit(self, parameters, config):
#         return self.model.train(parameters)

#     def evaluate(self, parameters, config):
#         return self.model.evaluate(parameters)

# # Create a Flower client
# client = FlowerClient()
# fl.client.start_numpy_client("localhost:8080", client)
