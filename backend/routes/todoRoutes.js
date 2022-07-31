const express = require("express");
const router = express();
const {
  getTodos,
  postTodos,
  getNew,
  updateTodos,
  getUpdate,
  deleteTodos,
} = require("../controller/todoController");

router.route("/").get(getTodos).post(postTodos);
router.get("/newtodo/", getNew);
router.get("/update/:id", getUpdate);
router.route("/:id").patch(updateTodos).delete(deleteTodos);

module.exports = router;
