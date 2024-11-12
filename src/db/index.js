import mongoose from "mongoose";
import { DBNAME } from "../constant.js";

const ConnectDB=async()=>{
  try {
    const ConnectionInstance=await mongoose.connect(`mongodb+srv://admin:admin123@backend.5c8yc.mongodb.net/${DBNAME}`)
    console.log(`MongoDB Connected..!! DBHOST :${ConnectionInstance.connection.host}`);
    
  } catch (error) {
    console.log(`MongoDB connection Failed`,error);
    process.exit(1);
  }
}

export default ConnectDB;

