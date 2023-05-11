import express from "express";
// const express=require("express");
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"; //call here db

import authRoutes from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";

import cors from "cors";

//configure env//first install pck then do config
dotenv.config();
//if .env file in other folder then we can give its path
//dotenv.config({path:"./foldername"})

//databse config
connectDB(); //this is call from db file

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json()); //this method help for body parser
app.use(morgan("dev")); //help indebug tell which req method is call like get/post and status

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
//DEV_MODE=tell which mode going like development or production
