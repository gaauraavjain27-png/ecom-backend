const {connect} = require("mongoose");
const app = require("./app");
const connectDB = require("../src/config/db");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  const server = app.listen(process.env.PORT);
};