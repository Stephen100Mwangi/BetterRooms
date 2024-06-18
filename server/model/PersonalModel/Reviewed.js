import mongoose from 'mongoose'

const ReviewedSchema = mongoose.Schema({
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

export const ReviewedListings = mongoose.model('ReviewedListings',ReviewedSchema);