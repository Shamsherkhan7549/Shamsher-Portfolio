import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

async function connectDb(){
    await mongoose.connect(`${process.env.MONGO_URI}/porfileDb`);
    console.log("db connected...");
    
}

export default connectDb;