from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import cv2
import numpy as np
from deepface import DeepFace
from mtcnn import MTCNN
import os
import threading
from concurrent.futures import ThreadPoolExecutor
import pickle

app = Flask(__name__)

CORS(app)  # Apply CORS to the app

os.environ['TF_ENABLE_ONEDNN'] = '0'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

def enhanceImage(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    equalized = cv2.equalizeHist(blurred)
    enhancedImage = cv2.cvtColor(equalized, cv2.COLOR_GRAY2BGR)
    return enhancedImage

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    name = data['name']
    email = data['email']
    password = data['password']

    videoCapture = cv2.VideoCapture(0)
    print("Look at the camera to register...")

    while True:
        ret, frame = videoCapture.read()
        if not ret:
            break    
        enhancedFrame = enhanceImage(frame)
        rgbFrame = cv2.cvtColor(enhancedFrame, cv2.COLOR_BGR2RGB)

        try:
            faceEncoding = DeepFace.represent(rgbFrame, model_name='Facenet')[0]["embedding"]

            with open(f"{username}_encoding.pkl", "wb") as f:
                pickle.dump(faceEncoding, f)

            print(f"User {username} registered successfully.")
            break
        except Exception as e:
            print(f"Error: {e}")

        cv2.imshow('Video', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    videoCapture.release()
    cv2.destroyAllWindows()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']

    videoCapture = cv2.VideoCapture(0)
    detector = MTCNN()
    
    try:
        with open(f"{username}_encoding.pkl", "rb") as f:
            knownEncoding = pickle.load(f)
    except FileNotFoundError:
        return jsonify({'message': 'No registration found for this username'}), 404

    print("Look at the camera to login...")

    while True:
        ret, frame = videoCapture.read()
        if not ret:
            break
        
        enhancedFrame = enhanceImage(frame)
        rgbFrame = cv2.cvtColor(enhancedFrame, cv2.COLOR_BGR2RGB)
        detections = detector.detect_faces(rgbFrame)

        for detection in detections:
            x, y, w, h = detection['box']
            x1, y1 = x, y
            x2, y2 = x + w, y + h
            cv2.rectangle(enhancedFrame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            faceRegion = rgbFrame[y1:y2, x1:x2]

            try:
                currentEncoding = DeepFace.represent(faceRegion, model_name='Facenet')[0]["embedding"]
                distance = np.linalg.norm(np.array(knownEncoding) - np.array(currentEncoding))
                threshold = 10  

                if distance < threshold:
                    videoCapture.release()
                    cv2.destroyAllWindows()
                    return jsonify({'message': f'User {username} logged in successfully'}), 200
                else:
                    print("Face not recognized. Try again.")
                    return jsonify({'message': 'Face not recognized'}), 401

            except Exception as e:
                print(f"Error: {e}")
                return jsonify({'message': f'Error: {e}'}), 500

        cv2.imshow('Video', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    videoCapture.release()
    cv2.destroyAllWindows()
    return jsonify({'message': 'Login failed'}), 401

if __name__ == '__main__':
    app.run(debug=True,port=5005)
