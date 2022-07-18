const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const db = require("./config/db");

db();
app.use(express.json());

app.use("/api/todos", require("./routes/todoRoutes"));

// app.use("api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`connected on port ${port}`.blue.bold);
});
