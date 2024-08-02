import { Timestamp } from 'mongodb';
import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        name:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },
        password: {
            type: String,
            required: true
        },

        // Reset Token
        resetToken: {
            type: String
        }
    },
    {
        Timestamp: true
    }
)

export const User = mongoose.model('user',userSchema);