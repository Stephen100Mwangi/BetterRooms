// import bcrypt from 'bcrypt'
// import { User } from '../model/UserModel.js';
// const registerController = async(req,res)=>{
   
//     try {
//         const { username, email, password, confirm_password, faceScanSuccess, confirmRegister } = req.body;


//         if (!username) {
//             console.log("Username cannot be empty");
//             return res.status(400).send({message:"Username cannot be empty"})
//         }
//         if (!email) {
//             console.log("Email cannot be empty");
//             return res.status(400).send({message:"Email cannot be empty"})
//         }
//         if (!password) {
//             console.log("Password cannot be empty");
//             return res.status(400).send({message:"Password cannot be empty"})
//         }

//         if (!confirm_password) {
//             console.log("Password confirmation cannot be empty");
//             return res.status(400).send({message:"Password confirmation cannot be empty"})
//         }
//         if(confirm_password !== password){
//             console.log("Password must match with confirmation password");
//             return res.status(400).send({message:"Password must match with confirmation password"})
//         }
//         const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{10,}$/;
//         if (!passwordRegex.test(password)) {
//             console.log("Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character.");
//             return res.status(400).send({
//                 message: "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character."
//             });
//         }

//         if (password.length < 10) {
//             console.log("Password is too short");
//             return res.status(400).send({message:"Password is too short"})
//         }

//         if (!faceScanSuccess) {
//             console.log("Face scan not successful");
//             return res.status(400).send({message:"Face scan not successful"})
//         }

//         if (!confirmRegister) {
//             console.log("You must agree to our terms");
//             return res.status(400).send({message:"You must agree to our terms"})
//         }

//         // Bcrypt password
//         const hashed_password = await bcrypt.hash(password,10)


//         // Create new user instance
//         const newUser = new User({
//             username,
//             email,
//             password: hashed_password
//         });

//         await newUser.save();

//         res.status(201).send({ message: "User registered successfully" });
        
//     } catch (error) {
//         return res.status(500).send({message: error.message});
//     }

    
// }


// export default registerController

import bcrypt from 'bcrypt';
import { User } from '../model/UserModel.js';

const registerController = async (req, res) => {
  try {
    const { username, email, password, confirm_password, faceScanSuccess, confirmRegister } = req.body;

    if (!username) return res.status(400).send({ message: "Username cannot be empty" });
    if (!email) return res.status(400).send({ message: "Email cannot be empty" });
    if (!password) return res.status(400).send({ message: "Password cannot be empty" });
    if (!confirm_password) return res.status(400).send({ message: "Password confirmation cannot be empty" });
    if (password !== confirm_password) return res.status(400).send({ message: "Password must match confirmation password" });
    if (!faceScanSuccess) return res.status(400).send({ message: "Face scan not successful" });
    if (!confirmRegister) return res.status(400).send({ message: "You must agree to our terms" });

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{10,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).send({
        message: "Password must be at least 10 characters long, with at least one digit, one uppercase letter, one lowercase letter, and one special character."
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashed_password });

    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });

  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export default registerController;

