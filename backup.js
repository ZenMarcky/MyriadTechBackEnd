import express from "express";
import mongoose from  "mongoose";
import dotEnv from "dotenv"
import bodyParser from "body-parser";
import route from './Routes/productRoutes.js'
import cors from 'cors';
import {MongoClient, ServerApiVersion} from 'mongoose'

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
dotEnv.config();
app.use(cors({
    origin: 'http://localhost:3000'
  }));

const PORT = process.env.Port || 7000; 
const MONGOURL = process.env.MONGO_URL;


mongoose.connect(MONGOURL).then(()=>{
    console.log("DB Connect Successfuly")
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch(err => console.log(err))


app.use("/api", route)


