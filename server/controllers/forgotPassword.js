import { User } from '../model/UserModel.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
// import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    if(!email){
        return res.status(400).json({message:"Email cannot be empty"})

    }
    const user = await User.findOne({ email });

    if (!user) {
        console.log("User unavailable");
        return res.status(400).send({ message: "User unavailable" });
    }

    try {
        // Create an OTP
        // const secret = process.env.JWT_SECRET + user.password;
        const payload = {
            email: user.email,
            id: user._id
        };

        // const token = jwt.sign(payload, secret, { expiresIn: '15m' });

         // Generate a unique JWT token for the user that contains the user's id
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "10m",});

        const link = `http://localhost:6650/forgot_password/${user._id}/${token}`;

        // Send to user email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // Your email
                pass: process.env.EMAIL_PASSWORD // Your email password
            },
            logger: true,
            debug: true
        });


        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Password Reset for Better Rooms',
            text: `Please use the following link to reset your password: ${link}`
        };

        // Send the email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
            return res.status(500).send({ message: err.message });
            }
            return res.status(200).send({ message: "Email sent",link: link,info });
        });
        } catch (err) {
        res.status(500).send({ message: err.message });
        }

        

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error('Error sending email:', error);
        //         return res.status(500).send({ message: 'Error sending email', error });
        //     } else {
        //         console.log('Email sent:', info.response);
        //         // Remove the following line
        //         // res.status(200).send({ message: 'Password reset link sent to your email' });
        //     }
        // });
        

        // Move this line inside the transporter.sendMail callback
    //     res.status(200).send({ message: "Password reset link sent to your email" });

    // } catch (error) {
    //     console.error('Error in forgotPassword:', error);
    //     return res.status(500).send({ message: 'Internal server error', error });
    // }
};

export default forgotPassword;

