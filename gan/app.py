import os
import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from torchvision.datasets import ImageFolder
import torchvision.transforms as T
from torchvision.utils import make_grid, save_image
from tqdm import tqdm
import cv2

# Download and prepare the dataset
dataset_url = 'https://www.kaggle.com/datasets/bhaveshmittal/melanoma-cancer-dataset'
if not os.path.exists('./melanoma-cancer-dataset'):
    os.system(f'kaggle datasets download -d bhaveshmittal/melanoma-cancer-dataset -p {os.getcwd()}')
    os.system(f'unzip melanoma-cancer-dataset.zip -d {os.path.dirname(os.getcwd())}')

# Define constants
DATA_DIR = './melanoma-cancer-dataset/train'
image_size = 64
batch_size = 128
latent_size = 128
lr = 0.0002
epochs = 25
stats = (0.5, 0.5, 0.5), (0.5, 0.5, 0.5)
sample_dir = 'generated'
os.makedirs(sample_dir, exist_ok=True)

if __name__ == '__main__':
    # Define transformations for the dataset
    transform = T.Compose([
        T.Resize(image_size),
        T.CenterCrop(image_size),
        T.ToTensor(),
        T.Normalize(*stats)
    ])

    # Load the dataset
    train_ds = ImageFolder(DATA_DIR, transform=transform)
    train_dl = DataLoader(train_ds, batch_size, shuffle=True, num_workers=3, pin_memory=True)

    # Define the discriminator network
    class Discriminator(nn.Module):
        def __init__(self):
            super().__init__()
            self.model = nn.Sequential(
                nn.Conv2d(3, 64, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(64),
                nn.LeakyReLU(0.2, inplace=True),
                nn.Conv2d(64, 128, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(128),
                nn.LeakyReLU(0.2, inplace=True),
                nn.Conv2d(128, 256, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(256),
                nn.LeakyReLU(0.2, inplace=True),
                nn.Conv2d(256, 512, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(512),
                nn.LeakyReLU(0.2, inplace=True),
                nn.Conv2d(512, 1, kernel_size=4, stride=1, padding=0),
                nn.Flatten(),
                nn.Sigmoid()
            )

        def forward(self, x):
            return self.model(x)

    # Define the generator network
    class Generator(nn.Module):
        def __init__(self):
            super().__init__()
            self.model = nn.Sequential(
                nn.ConvTranspose2d(latent_size, 512, kernel_size=4, stride=1, padding=0),
                nn.BatchNorm2d(512),
                nn.ReLU(True),
                nn.ConvTranspose2d(512, 256, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(256),
                nn.ReLU(True),
                nn.ConvTranspose2d(256, 128, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(128),
                nn.ReLU(True),
                nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1),
                nn.BatchNorm2d(64),
                nn.ReLU(True),
                nn.ConvTranspose2d(64, 3, kernel_size=4, stride=2, padding=1),
                nn.Tanh()
            )

        def forward(self, x):
            return self.model(x)

    # Instantiate the networks
    discriminator = Discriminator()
    generator = Generator()

    # Load models onto the device
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    discriminator.to(device)
    generator.to(device)

    # Define optimizers for both networks
    opt_d = torch.optim.Adam(discriminator.parameters(), lr=lr, betas=(0.5, 0.999))
    opt_g = torch.optim.Adam(generator.parameters(), lr=lr, betas=(0.5, 0.999))

    # Define the loss function
    criterion = nn.BCELoss()

    # Training loop
    for epoch in range(epochs):
        for real_images, _ in tqdm(train_dl):
            real_images = real_images.to(device)

            # Train discriminator
            opt_d.zero_grad()
            # Calculate loss for real images
            real_preds = discriminator(real_images)
            real_targets = torch.ones(real_images.size(0), 1, device=device)
            real_loss = criterion(real_preds, real_targets)
            # Calculate loss for fake images
            latent = torch.randn(batch_size, latent_size, 1, 1, device=device)
            fake_images = generator(latent)
            fake_targets = torch.zeros(batch_size, 1, device=device)
            fake_preds = discriminator(fake_images.detach())
            fake_loss = criterion(fake_preds, fake_targets)
            # Total discriminator loss
            loss_d = real_loss + fake_loss
            loss_d.backward()
            opt_d.step()

            # Train generator
            opt_g.zero_grad()
            latent = torch.randn(batch_size, latent_size, 1, 1, device=device)
            fake_images = generator(latent)
            preds = discriminator(fake_images)
            targets = torch.ones(batch_size, 1, device=device)
            loss_g = criterion(preds, targets)
            loss_g.backward()
            opt_g.step()

        # Print and save generated images
        if (epoch+1) % 5 == 0:
            print(f'Epoch [{epoch+1}/{epochs}], Loss D: {loss_d.item():.4f}, Loss G: {loss_g.item():.4f}')
            with torch.no_grad():
                fixed_latent = torch.randn(64, latent_size, 1, 1, device=device)
                fake_images = generator(fixed_latent)
                save_image(fake_images, os.path.join(sample_dir, f'epoch-{epoch+1}.png'), nrow=8)

    # Generate video from generated images
    files = [os.path.join(sample_dir, f) for f in os.listdir(sample_dir) if f.endswith('.png')]
    files.sort()
    out = cv2.VideoWriter('gans_training.avi', cv2.VideoWriter_fourcc(*'MP4V'), 1, (530, 530))
    [out.write(cv2.imread(fname)) for fname in files]
    out.release()
