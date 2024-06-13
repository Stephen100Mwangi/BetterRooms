import express from 'express'
import resetpassword from '../controllers/resetPassword.js';

const resetRouter = express.Router();
resetRouter.use("/reset_password",resetpassword)

export default resetRouter