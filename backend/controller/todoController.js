const asyncHandler = require("express-async-handler");
const { findByIdAndUpdate } = require("../models/todoModel");
const statuses = [
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
];
const Todo = require("../models/todoModel");
// get todos   GET /api/todos/   private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: 1 });
  // Article.find({}).sort("-date");
  res.render("./todos/allTodos", { todos, title: "alltodos" });
});

//get form for new todo       GET /api/todos/newtodo
const getNew = asyncHandler((req, res) => {
  res.render("./todos/newTodo", { title: "new todo", statuses });
});

// post todos   POST /api/todos/   private
const postTodos = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { task, due, status } = req.body;
  if (!task) {
    res.status(400);
    throw new Error("please enter your task");
  } else {
    const dueDate = due.split(" ");
    const newTodo = await Todo.create({
      task: task,
      // due: (dueDate[0], dueDate[1]),
      due: due,
      status: status,
    });
    res.redirect("/api/todos");
    // res.status(200).json({ message: newTodo });
  }
});

//?PUT TODO

//get update  GET /api/todos/updatetodo
const getUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const editTodo = await Todo.findById(id);
  if (editTodo) {
    res.render("./todos/editTodo", { title: "edit todo", editTodo, statuses });
  } else {
    res.status(400).json({ message: "no such id" });
  }
});

// put todos   PUT /api/todos/:id   private
const updateTodos = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newComment = await Todo.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("/api/todos/");
});

// DELETE TODO

// delete todos   DELETE /api/todos/   private
const deleteTodos = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteTodo = await Todo.findByIdAndDelete(id);
  res.redirect("/api/todos/");
});
module.exports = {
  getTodos,
  getNew,
  postTodos,
  getUpdate,
  updateTodos,
  deleteTodos,
};
