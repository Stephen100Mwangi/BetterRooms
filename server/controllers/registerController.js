import bcrypt from 'bcrypt';
import { User } from '../model/UserModel.js';

const registerController = async (req, res) => {
  try {
    const { username, name, email, password, confirm_password, faceScanSuccess, confirmRegister } = req.body;

    if (!username) return res.status(400).send({ message: "Username cannot be empty" });
    if (!name) return res.status(400).send({ message: "Your name cannot be empty" });
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

    const userExists = await User.findOne({email} || {username});
    if (userExists) {
      return res.status(400).send({message:"User already exists"})
    }

    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = new User({ username, name, email, password: hashed_password });

    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });

  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export default registerController;

