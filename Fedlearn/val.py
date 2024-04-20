import os
import numpy as np
import cv2
import tensorflow as tf

# Load the pre-trained lung X-ray classification model
print("Loading model...")
lung_xray_model = tf.keras.models.load_model("./global_model.h5")

def validate_images_in_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            img_path = os.path.join(root, filename)
            is_valid, error_msg = validate_image(img_path)
            if is_valid:
                print(f"Image '{filename}' is valid")
            else:
                print(f"Image '{filename}' is not valid")

def validate_image(img_path):
    try:
        print(f"Validating image: {img_path}")
        # Load and preprocess the image
        img = cv2.imread(img_path)
        if img is None:
            return False, "Could not read the image file"
        img = cv2.resize(img, (224, 224))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)  # Add batch dimension

        # Predict the class of the image using the lung X-ray model
        prediction = lung_xray_model.predict(img)
        print(f"Prediction: {prediction}")
        class_index = np.argmax(prediction)
        print(f"Predicted class index: {class_index}")

        # Check the predicted class
        if class_index == 0:
            print("Image is a lung X-ray")
            return True, None
        elif class_index == 1:
            print("Image is a  lung X-ray")
        
        else:
            print("Image is not a valid lung X-ray")
            return False, "Image is not a valid lung X-ray"
    except Exception as e:
        return False, str(e)

# Example usage:
train_folder_path = "./train"
test_folder_path = "./test"

print("\nValidating images in train folder:")
validate_images_in_folder(train_folder_path)
print("\nValidating images in test folder:")
validate_images_in_folder(test_folder_path)