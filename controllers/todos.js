const Todo = require('../model/todo');
const { getCompletedTodos, getRemainingTodos } = require('../utils/todos');
exports.getIndex = (req, res) => {
  getCompletedTodos(completeTodo => {
    getRemainingTodos(remainingTodo => {
      Todo.fetchAll((todos) => {
        res.render("index", {
          pageTitle: 'کارهای روزمره',
          todos,
          completeTodo,
          remainingTodo
        })
      })
    })
  })
}