from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model
import json

app = Flask(__name__)

# Load the trained model
model = load_model('./global_model.h5')

def preprocess_image(image):
    # Resize and normalize the image
    image = cv2.resize(image, (224, 224))
    image = image / 255.0
    return image

@app.route('/predict', methods=['POST'])
def predict():
    # Check if request contains an image
    if 'image' not in request.files:
        return jsonify({'error': 'No image found in request'}), 400

    file = request.files['image']
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Preprocess the image
    processed_image = preprocess_image(image)

    # Make prediction
    prediction = model.predict(np.expand_dims(processed_image, axis=0))[0][0]
    class_label = 'Class A' if prediction < 0.5 else 'Class B'

    # Convert prediction to JSON serializable format
    prediction_result = {
        'prediction': class_label,
        'confidence': float(prediction)  # Convert prediction to float explicitly
    }

    return json.dumps(prediction_result)

if __name__ == '__main__':
    app.run(debug=True)
