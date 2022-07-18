const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const colors = require("colors");
const mongo_uri = process.env.MONGO_URI;

const db = async () => {
  try {
    const conn = await mongoose.connect(mongo_uri);
    console.log(
      `Connection success:  ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
