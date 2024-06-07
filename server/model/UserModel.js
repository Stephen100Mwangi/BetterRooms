import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email: {
            type: Email,
            required: true,
            unique: true
        },
        password: {
            type: 
        }
    }
)

export const User = mongoose.model('user',userSchema);