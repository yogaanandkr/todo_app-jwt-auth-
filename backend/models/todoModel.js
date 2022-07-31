const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "enter a todo"],
    },
    due: {
      type: String,
      // required: [true, "enter due date"],
    },
    status: {
      type: String,
      // required: false,
      enum: [
        "0%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
