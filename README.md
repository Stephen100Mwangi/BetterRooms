# Basic Overview #

This is a recommender system that employs ReactJS, MERN - Mongoose Express React NodeJS, Text to Speech conversion, Voice to text conversion, Face detection.

# Technologies Used #
This project is a web based software solution that incorporates technologies such as
1. ReactJS
2. Tailwind CSS
3. HTML,CSS, JavaScript
4. Python
5. KNN
6. CBF
7. Kaggle
8. Postman
9. APIs
10. FaceNet

# Testing and Debugging #
To get this project running we will incorporate a number of steps

### FrontEnd
1. Navigate to the root folder or this directory
2. Change the directory to client. Use the command `cd client`
3. Run the command `npm run dev`
4. This will launch the client.
5. When prompted to register, go forward and register as a new user. For our testing practices, we shall use 
   {
      "email":"mwangi70@gmail.com",
      "password":"12qweas@qwQ"
    }
6. Navigate to `Book Accomodations` .Make use of your navbar
7. Input all the details in the form provided and then press the submit button. Incase your entry data did not match any attributes of an airbnb as per Kaggle databases, you 
   will have to use Content Based Filtering algorithm. This is to supplement K-Nearest Neighbour algorithm, which is launched first.
8. Woohoo! There is your next airbnb. You can then navigate to desired airbnb and place a booking.
    {
      "email":"mwangi70@gmail.com",
      "password":"12qweas@qwQ"
    }


   ### Backend
   1. Assuming you are on the root directory of this project - If not create a new terminal to launch new root directory
   2. Navigate to the server. Use the command `cd server`
   3. Launch the backend. Use the command `npm run dev`- This will lauch the mongoDB where the user data is stored
   4. This backed segement will as well launch the routes.
  
   ### Flask
   1. Assumming you are on the root directory of this project - If not create a new terminal to launch new root directory
   2. Navigate to flask-server Use the command `cd flask-server`
   3. Lauch the python backend. Use the command `python app.py`- This will lauch the Kaggle datasets, models as well as the routes responsible for fetching listings
  
   Follwong these steps will lauch your app successfully.


   # A deep dive on technologies used
   ## Front end
   1. HTML
   2. CSS
   3. JavaSCript
   4. Tailwind CSS
   5. React-hot-toast
   6. reat-router-dom
   7. Protected routes
   8. ReactJS
   9. React-Redux
   10. Email.js
  
   ## Backend
   1. Python
   2. Flask
   3. FaceNet
   4. K-nearest Neighbor(KNN)
   5. Content Based Filtering(CBF)
   6. Kaggle datasets
   7. Routes
   8. Postman


   


