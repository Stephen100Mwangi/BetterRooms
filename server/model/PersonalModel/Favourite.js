import  mongoose from 'mongoose'

const FavoriteModel = mongoose.Schema(
    {
    listing_name:{
        type: String,
        required: true
    },
    listing_environment:{
        type: String,

    }

}) 