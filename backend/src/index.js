import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';
import { port } from './config/dotenvConfig.js';
dotenv.config({
    path: './.env'
});


 
connectDB()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
})
 

