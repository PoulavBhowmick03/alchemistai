from flask import Flask, request, jsonify, send_file
import torch
import torchvision.transforms as T
from torchvision.utils import save_image
import torch.nn as nn
import matplotlib.pyplot as plt

app = Flask(__name__)

# Define the generator architecture
latent_size = 128
generator = nn.Sequential(
    # Define generator architecture similar to training
    nn.ConvTranspose2d(latent_size, 512, kernel_size=4, stride=1, padding=0, bias=False),
    nn.BatchNorm2d(512),
    nn.ReLU(True),
    # out: 512 x 4 x 4
    nn.ConvTranspose2d(512, 256, kernel_size=4, stride=2, padding=1, bias=False),
    nn.BatchNorm2d(256),
    nn.ReLU(True),
    # out: 256 x 8 x 8
    nn.ConvTranspose2d(256, 128, kernel_size=4, stride=2, padding=1, bias=False),
    nn.BatchNorm2d(128),
    nn.ReLU(True),
    # out: 128 x 16 x 16
    nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1, bias=False),
    nn.BatchNorm2d(64),
    nn.ReLU(True),
    # out: 64 x 32 x 32
    nn.ConvTranspose2d(64, 3, kernel_size=4, stride=2, padding=1, bias=False),
    nn.Tanh()
    # out: 3 x 64 x 64
)

# Load saved generator checkpoint
generator.load_state_dict(torch.load('G.pth'))

# Denormalize function
def denorm(img_tensors):
    return img_tensors * 0.5 + 0.5  # Assuming the stats used for normalization during training were (0.5, 0.5, 0.5), (0.5, 0.5, 0.5)

# Function to generate images of malignant tumors from text input
def generate_malignant_images(text):
    num_images = 1  # Generate one image at a time
    fixed_latent = torch.randn(num_images, latent_size, 1, 1)
    fake_images = generator(fixed_latent)
    denormed_images = denorm(fake_images)
    save_image(denormed_images, 'generated_image.png')  # Save the generated image
    return 'generated_image.png'  # Return the path of the generated image

# Flask route for generating images of malignant tumors from text
@app.route('/generate_malignant_image', methods=['POST'])
def generate_malignant_image():
    data = request.get_json()
    text = data['text']
    image_path = generate_malignant_images(text)
    return send_file(image_path, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
