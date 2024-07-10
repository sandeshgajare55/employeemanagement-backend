// DB connection is done here
import mongoose from "mongoose";
import dotenv from 'dotenv';

const dbconn=async()=>{
    try {
        const a=process.env.DB_URL;
        await mongoose.connect(a,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Mongo DB Activated')
    } 
    catch (error) {
        console.log(error) 
    }
}

export default dbconn 