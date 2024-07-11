import mongoose from "mongoose";

const ResetSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    token:{
        type: String,
        unique: true,
        required:true
    }
})