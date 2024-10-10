const mongoose = require("mongoose");
const { DB_Name } = require("../constants.js");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log(
      `Successfully connected with MongoDB!! Host :-${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error Occured in Connecting MongoDB :-", error);
    process.exit(1);
  }
};
module.exports = connectDB;
