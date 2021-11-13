const Todo = require('../model/todo');

exports.getIndex = (req, res) => {
Todo.count({ where: { completed: true } })
  .then(completedTodo => {
    Todo.findAll()
      .then(todos => {
        res.render("index", {
          pageTitle: 'کارهای روزمره',
          todos,
          completedTodo,
          remainingTodo: todos.length - completedTodo
        })
      })
  })
}