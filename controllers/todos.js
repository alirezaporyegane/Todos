const Todo = require('../model/todo');

exports.getIndex = async (req, res) => {
try {
  const completedTodo = await Todo.count({ where: { completed: true } });
  const todos = await Todo.findAll();
  
  res.render("index", {
    pageTitle: 'کارهای روزمره',
    todos,
    completedTodo,
    remainingTodo: todos.length - completedTodo
  })
} catch (err) {
  console.log(err);
}
}