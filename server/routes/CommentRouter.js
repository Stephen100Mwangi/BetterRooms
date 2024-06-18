import express from "express";
import addComment from "../controllers/addComment.js";

const commentRouter = express.Router();

commentRouter.post('/addComment',addComment);

export default commentRouter