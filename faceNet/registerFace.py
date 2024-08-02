import cv2
import numpy as np
from deepface import DeepFace
from mtcnn import MTCNN
import os
import threading
from concurrent.futures import ThreadPoolExecutor

os.environ['TF_ENABLE_ONEDNN'] = '0'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

def enhanceImage(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    equalized = cv2.equalizeHist(blurred)
    enhancedImage = cv2.cvtColor(equalized, cv2.COLOR_GRAY2BGR)
    
    return enhancedImage

def registerUser(username):
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
    cv2.startWindowThread()
    cv2.destroyAllWindows()

username = input("please input your username\n")
registerUser(username)
