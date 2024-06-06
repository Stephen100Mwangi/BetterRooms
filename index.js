import express from 'express'
import cors from 'cors'
import { PORT } from './server/config.js'
import book_router from './server/routes/bookHotelRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Welcome to BetterRooms");
})

app.use("/book", book_router);


app.listen(PORT || 5549, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})