const asyncHandler = require("express-async-handler");

// get todos   GET /api/todos/   private
const getTodos = asyncHandler((req, res) => {
  const result = res.status(200).json({ message: "all todo" });
});

// post todos   POST /api/todos/   private
const postTodos = asyncHandler((req, res) => {
  const result = res.status(200).json({ message: "new todo" });
});

// get todos   GET /api/todos/   private
const updateTodos = asyncHandler((req, res) => {
  const result = res.status(200).json({ message: "updated todo" });
});

// get todos   GET /api/todos/   private
const deleteTodos = asyncHandler((req, res) => {
  const result = res.status(200).json({ message: "deleted todo" });
});
module.exports = { getTodos, postTodos, updateTodos, deleteTodos };
