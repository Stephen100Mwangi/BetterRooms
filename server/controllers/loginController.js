import { User } from '../model/UserModel.js';
import bcrypt from 'bcrypt'

const loginController = async(req,res)=>{
    try {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        if (!email) {
            console.log("Email cannot be empty");
            return res.status(400).send({message:"Email cannot be empty"});
        }
        if (!password) {
            console.log("Password cannot be empty");
            return res.status(400).send({message:"Password cannot be empty"});
        }
        if (!username) {
            console.log("Password cannot be empty");
            return res.status(400).send({message:"Username cannot be empty"});
        }

        const user = await User.findOne({email})
        if(!user){
            console.log("Invalid data");
            res.status(400).send({message:"Invalid email"})
            return;
        }
        const usernameMatch = await User.findOne({username})
        if (!usernameMatch) {
            res.status(400).json({message:"Username is wrong"})
            return;
        }

        const pass_match = bcrypt.compareSync(password,user.password);
        
        if (!pass_match) {
            console.log("Wrong Email or Password");
            res.status(401).send({message:"Wrong Email or Password"});
            return;
        }else{
            res.status(200).send({ message: "Login successful", user });
            return;
            
        }

        
    } catch (error) {
        console.log("Error "+ error);
    }

}

export default loginController