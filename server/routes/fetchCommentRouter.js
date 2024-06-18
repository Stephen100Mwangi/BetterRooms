import express from "express";
import fetchComment from "../controllers/fetchComment.js";

const FetchCommentsRoute = express.Router();

FetchCommentsRoute.get("/fetchComments",fetchComment);

export default FetchCommentsRoute