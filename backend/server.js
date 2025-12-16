import express from 'express';
import dotenv from 'dotenv'
import connectDb from './configue/connecDb.js';
import cors from 'cors'
import router from './routes/skillRoutes.js';
import emailRouter from './routes/emailRoute.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors({
    origin:process.env.VITE_FRONTEND_URL,
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true
}));
app.use(express.json());

connectDb();

app.use('/api', router);
app.use('/', emailRouter)


app.get('/', (req, res)=>{
    res.send("api working");
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`); 
})