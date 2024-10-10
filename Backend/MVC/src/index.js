require('dotenv').config();
// require("dotenv").config({path:'./env'})
// const connectDB = require("./DataBase/index.js")
const connectDB = require('./DataBase/index')

connectDB()





// Method Simple
/*
import express from "express";
const app = express();


(async () => {
  try {
    await mongose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("Error:-", error);
      throw error;
    });

    app.listen(process.env.PORT,()=>{
        console.log("Server Started...")
    })

  } catch (error) {
    console.log("Error Occured in Connecting :- ", error);
    throw error;
  }
})();
*/
