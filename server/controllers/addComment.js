import mongoose from "mongoose";
import { UserComments } from "../model/CommentsModel.js";

const addComment = async(req,res) =>{
    try {
        const {email,name,message} = req.body;
        if(!email){
            return res.status(400).send({message:"Email cannot be empty"})
        }
        if(!name){
            return res.status(400).send({message:"Name cannot be empty"})
        }
        if(!message){
            return res.status(400).send({message:"Message cannot be empty"})
        }

        // Add comment to the database
        const newComment = new UserComments({name,email,message});
        await newComment.save();
        res.status(201).send({message:"Comment created successfully"})
    } catch (error) {
        res.status(500).send({message:"Error creating comment "+ error})
    }
    
}

export default addComment;