import cv2
import numpy as np
from deepface import DeepFace
from mtcnn import MTCNN
import os
import threading
import sys
import pickle
from concurrent.futures import ThreadPoolExecutor

os.environ['TF_ENABLE_ONEDNN'] = '0'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

def enhanceImage(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    equalized = cv2.equalizeHist(blurred)
    enhancedImage = cv2.cvtColor(equalized, cv2.COLOR_GRAY2BGR)
    
    return enhancedImage

def loginUser(username):
    videoCapture = cv2.VideoCapture(0)
    detector = MTCNN()
    
    try:
        with open(f"{username}_encoding.pkl", "rb") as f:
            knownEncoding = pickle.load(f)
    except FileNotFoundError:
        print(f"No registration found for {username}.")
        return False

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
                    print(f"User {username} logged in successfully.")
                    videoCapture.release()
                    cv2.destroyAllWindows()
                    return True
                else:
                    print("Face not recognized. Try again.")
                    sys.exit(0)

            except Exception as e:
                print(f"Error: {e}")

        cv2.imshow('Video', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    videoCapture.release()
    cv2.destroyAllWindows()
    print("Login failed.")
    return False

username = input("Input username\n")
loginUser(username)
