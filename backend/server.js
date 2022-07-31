const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const db = require("./config/db");
const path = require("path");
const ejs = require("ejs");
const methodOverride = require("method-override");

db();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // methodOverride

app.set("view engine", "ejs");
// app.set("views", "views");
console.log(`${__dirname}`.yellow.bold);

app.use("/api/todos", require("./routes/todoRoutes"));

// app.use("api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`connected on port ${port}`.blue.bold);
});
