import express from 'express'
import { book_controller } from '../controllers/bookController.js';

const book_router = express.Router();
book_router.get("/",book_controller);


export default  book_router;