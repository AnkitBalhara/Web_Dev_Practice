require("dotenv").config();
const connectDB = require("./DataBase/index");
const app = require('./app')

connectDB()
  .then(() => {
    app.on("error",(error)=>{
      console.log("Error :- ",error)
      throw error
    });
    app.listen(process.env.PORT || 8000,()=>{
      console.log("Connection Successfully Made...");
    })
  })
  .catch((err) => {
    console.log("Coonection Failed with MongoDB :-", err);
  });

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
