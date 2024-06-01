const mongoose = require("mongoose");

// connection
mongoose.connect("mongodb+srv://tyrex:pass1829@cluster0.znn3qjq.mongodb.net/");

// schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// model
const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
