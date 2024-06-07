import express from 'express'
import loginController from '../controllers/loginController.js';

const loginRouter = express.Router();

loginRouter.get("/fetchUser",loginController)

export default loginRouter