import mongoose from "mongoose";

const LikedSchema = mongoose.Schema({
    listing_name:{
        type: String,
        required: true,
        unique: true,
    },
    listing_environment:{
        type: String,
        required: true,
    },   
    listingPrice:{
        type:String,
    }
})

export const LikedListings = mongoose.model("LikedListings",LikedSchema);