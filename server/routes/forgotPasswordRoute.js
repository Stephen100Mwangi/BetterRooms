import express from 'express'
import forgotPassword from '../controllers/forgotPassword.js';

const forgotRouter = express.Router();

forgotRouter.post("/forgot_password",forgotPassword);

export default forgotRouter;