import mongoose from "mongoose";

const CommentsSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }

})

export const UserComments = mongoose.model('UserComments',CommentsSchema);