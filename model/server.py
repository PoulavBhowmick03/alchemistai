import flwr as fl
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import models, transforms
from torch.utils.data import DataLoader
from sklearn.metrics import confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Define the server
class FlowerServer:
    def __init__(self):
        self.model = self.load_model()
        self.optimizer = optim.Adam(self.model.parameters(), lr=0.001)
        self.criterion = nn.BCEWithLogitsLoss()
        self.train_loader, self.val_loader = self.load_data()
        self.train_losses = []
        self.val_losses = []
        self.val_accs = []

    def load_model(self):
        model = models.efficientnet_v2_l(weights='default')
        model.classifier[1] = nn.Linear(model.classifier[1].in_features, 1)
        model = nn.DataParallel(model).to(torch.device('cuda' if torch.cuda.is_available() else 'cpu'))
        return model

    def load_data(self):
        img_size = 112
        transform_train = transforms.Compose([
            transforms.RandomRotation(degrees=20),
            transforms.RandomHorizontalFlip(p=0.3),
            transforms.RandomVerticalFlip(p=0.3),
            transforms.Resize(size=(img_size, img_size), antialias=True),
            transforms.CenterCrop(size=(img_size, img_size)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])

        transform_val = transforms.Compose([
            transforms.Resize(size=(img_size, img_size), antialias=True),
            transforms.CenterCrop(size=(img_size, img_size)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])

        train_data = datasets.ImageFolder(root='/path/to/train', transform=transform_train)
        val_data = datasets.ImageFolder(root='/path/to/test', transform=transform_val)

        batch_size = 256
        train_loader = DataLoader(train_data, batch_size=batch_size, shuffle=True, num_workers=4)
        val_loader = DataLoader(val_data, batch_size=batch_size, shuffle=False, num_workers=4)

        return train_loader, val_loader

    def train(self, parameters):
        self.model.train()
        self.model.set_parameters(parameters)

        running_loss = 0.0
        for inputs, labels in self.train_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            labels = labels.unsqueeze(1).float()

            self.optimizer.zero_grad()
            outputs = self.model(inputs)
            loss = self.criterion(outputs, labels)
            loss.backward()
            self.optimizer.step()

            running_loss += loss.item()

        train_loss = running_loss / len(self.train_loader)
        self.train_losses.append(train_loss)

        return self.model.get_parameters(), len(self.train_loader), {}

    def evaluate(self, parameters):
        self.model.eval()
        self.model.set_parameters(parameters)

        val_loss = 0.0
        correct = total = 0
        all_labels = []
        all_preds = []

        with torch.no_grad():
            for inputs, labels in self.val_loader:
                inputs, labels = inputs.to(device), labels.to(device)
                labels = labels.unsqueeze(1).float()

                outputs = self.model(inputs)
                loss = self.criterion(outputs, labels)
                val_loss += loss.item()

                predicted = (torch.sigmoid(outputs) > 0.5).float()
                total += labels.size(0)
                correct += (predicted == labels).sum().item()

                all_labels.extend(labels.cpu().numpy())
                all_preds.extend(predicted.cpu().numpy())

        avg_val_loss = val_loss / len(self.val_loader)
        accuracy = correct / total * 100
        self.val_losses.append(avg_val_loss)
        self.val_accs.append(accuracy)

        all_labels = np.array(all_labels)
        all_preds = np.array(all_preds)
        matrix = confusion_matrix(all_labels, all_preds)

        return self.model.get_parameters(), avg_val_loss, accuracy, matrix

# Create a Flower server
server = FlowerServer()
fl.server.start_server("localhost:8080", server)
