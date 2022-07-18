const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "enter a todo"],
  },
});
