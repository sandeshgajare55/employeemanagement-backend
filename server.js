import express from 'express'
import dbconn from './utils/db.js';
import dotenv from 'dotenv';
import routers from './routes/route.js';
import cors from 'cors';
dotenv.config();
const app=express();
// mongodb
dbconn();
app.use(cors());
app.use(express.json());
app.use('/api',routers);
app.listen(process.env.PORT,()=>{
    console.log(`Server is ON.....${process.env.PORT}`);
})

// console.log('Environment Variables:', process.env);
// console.log('MongoDB URI:', process.env.DB_URL);