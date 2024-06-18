import express from 'express'
import bookBNB from '../controllers/bookController.js';

const bookRouter = express.Router();
bookRouter.get("/bookBNB",bookBNB);


export default  bookRouter;