import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

async function connectDb(){
   try{
     await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("db connected...");
    
   }catch(err){
    console.log("err in  db connection: ", err);
    
   }
}

export default connectDb;