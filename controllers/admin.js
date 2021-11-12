const Todo = require('../model/todo');
const { generateRandomID } = require('../utils/todos'); 

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const todo = new Todo(generateRandomID(), req.body.todo);
  todo.save((err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  })
}

exports.deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  })
}

exports.completetodo = (req, res) => {
  Todo.setTodoToComplate(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  })
}