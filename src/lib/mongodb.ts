import mongoose from "mongoose";

const MONGODB_URL= process.env.MONGO

if (!MONGODB_URL){
    throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

async function connectToDatabase(){
 if(mongoose.connection.readyState === 1){
        return mongoose;
 }  
 const opts = {
    bufferCommands: false,
 } 
 await mongoose.connect(MONGODB_URL as string, opts);
    return mongoose;
}

export default connectToDatabase;