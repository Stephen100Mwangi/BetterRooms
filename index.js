// Import express
import express from "express";
import nodemon from "nodemon";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import registerRouter from "./server/routes/registerRoute.js";
import loginRouter from "./server/routes/loginRoute.js";
import forgotRouter from "./server/routes/forgotPasswordRoute.js";
import resetRouter from "./server/routes/resetPasswordRoute.js";
import commentRouter from "./server/routes/CommentRouter.js";
import FetchCommentsRoute from "./server/routes/fetchCommentRouter.js";

// Initialize app and middleware
const app = express();

app.use(cors());
app.use(express.json());


// Configure dotenv
dotenv.config();
const PORT = process.env.PORT
const CONNECTION_URL = process.env.MONGO_URL

// Connect to mongodb
mongoose
    .connect(CONNECTION_URL)
    .then(()=>{
        console.log("Connection to MongoDB was successful ");

        
        // Listen to PORT For communication
        app.listen(PORT || 5650,()=>{
            console.log(`Server running on port ${PORT}`);
})
    }).catch(error =>{
        console.log("An error ocurred while connecting to MongoDB"+ error);
    })

// Routers
app.get('/',(req,res)=>{
    console.log("Welcome to better rooms");
})


app.use(registerRouter);
app.use(loginRouter);
app.use(forgotRouter);
app.use(resetRouter);
app.use(commentRouter);
app.use(FetchCommentsRoute);

