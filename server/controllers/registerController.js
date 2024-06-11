import bcrypt from 'bcrypt'
import { User } from '../model/UserModel.js';
const registerController = async(req,res)=>{
   
    try {
        // const { name, email, password, confirmPassword } = req.body;
        const password = req.body.password;
        const username = req.body.username;
        const email = req.body.email;
        const confirmPassword = req.body.confirm_password;
        const faceScan = req.body.faceScan;
        const confirmRegister = req.body.confirmRegister;

        if (!username) {
            console.log("Username cannot be empty");
            return res.status(400).send({message:"Username cannot be empty"})
        }
        if (!email) {
            console.log("Email cannot be empty");
            return res.status(400).send({message:"Email cannot be empty"})
        }
        if (!password) {
            console.log("Password cannot be empty");
            return res.status(400).send({message:"Password cannot be empty"})
        }

        if (!confirmPassword) {
            console.log("Password confirmation cannot be empty");
            return res.status(400).send({message:"Password confirmation cannot be empty"})
        }
        if(confirmPassword !== password){
            console.log("Password must match with confirmation password");
            return res.status(400).send({message:"Password must match with confirmation password"})
        }
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{10,}$/;
        if (!passwordRegex.test(password)) {
            console.log("Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character.");
            return res.status(400).send({
                message: "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character."
            });
        }

        if (password.length < 10) {
            console.log("Password is too short");
            return res.status(400).send({message:"Password is too short"})
        }

        if (!faceScan) {
            console.log("Face scan not successful");
            return res.status(400).send({message:"Face scan not successful"})
        }

        if (!confirmRegister) {
            console.log("You must agree to our terms");
            return res.status(400).send({message:"You must agree to our terms"})
        }

        // Bcrypt password
        const hashed_password = await bcrypt.hash(password,10)


        // Create new user instance
        const newUser = new User({
            username,
            email,
            password: hashed_password
        });

        await newUser.save();

        res.status(201).send({ message: "User registered successfully" });
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }

    
}


export default registerController
