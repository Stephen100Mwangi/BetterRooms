import  mongoose from 'mongoose'

const FavoriteSchema = mongoose.Schema(
    {
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


export const FavoriteListings = mongoose.model('FavoriteListings',FavoriteSchema)