const express = require("express");
const router = express();
const {
  getTodos,
  postTodos,
  updateTodos,
  deleteTodos,
} = require("../controller/todoController");

router.route("/").get(getTodos).post(postTodos);
router.route("/:id").put(updateTodos).delete(deleteTodos);

module.exports = router;
