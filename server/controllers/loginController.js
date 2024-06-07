import { User } from '../model/UserModel.js';
import bcrypt from 'bcrypt'

const loginController = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email) {
            console.log("Email cannot be empty");
            return res.status(400).send({message:"Email cannot be empty"});
        }
        if (!password) {
            console.log("Password cannot be empty");
            return res.status(400).send({message:"Password cannot be empty"});
        }

        const user = await User.findOne({email})
        if(!user){
            console.log("Invalid data");
            return res.status(400).send({message:"Invalid data"})
        }

        const pass_match = bcrypt.compareSync(password,user.password);
        
        if (!pass_match) {
            console.log("Wrong Email or Password");
            return res.status(401).send({message:"Wrong Email or Password"});
        }else{
            return res.status(200).send({ message: "Login successful", user });
        }

        
    } catch (error) {
        console.log("Error "+ error);
    }

}

export default loginController