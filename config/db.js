// const mongoose = require("mongoose");
// const connection = async () => {
//     await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
//     console.log("connection establish  on SRJ")
// }
// module.exports = connection
// mongodb://localhost:27017/blogDB
const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_URL)
    // await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with a failure
  }
};

module.exports = connectDB;
