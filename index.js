import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from './Routes/productRoutes.js';
import cors from 'cors';

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 7000; 
const MONGO_URL = process.env.MONGO_URL;  // Make sure you have this in your .env

// Database connection using mongoose
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

// Use your routes
app.use("/api", route);

