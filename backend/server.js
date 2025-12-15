import express from 'express';
import dotenv from 'dotenv'
import connectDb from './configue/connecDb.js';
import cors from 'cors'
import router from './routes/skillRoutes.js';

dotenv.config();

const port = process.env.PORT;

const app = express();
connectDb();

app.use(cors({
    origin:process.env.VITE_FRONTEND_URL,
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true
}));
app.use(express.json());

app.use('/api', router)


app.get('/', (req, res)=>{
    res.send("api working");
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`); 
})