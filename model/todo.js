const { getTodos, saveTodos } = require('../utils/todos');
class Todo {
  constructor (id, text, complated = false) {
    this.id = id;
    this.text = text;
    this.complated = complated;
  }

  save (callback) {
    getTodos(todo => {
      todo.push(this);
      saveTodos(todo, (err) => {
        callback(err)
      })
    })
  }

  static fetchAll (callback) {
    getTodos(todos => {
      callback(todos)
    })
  }

  static deleteTodo (id, callback) {
    getTodos(todos => {
      saveTodos(todos.filter(t => t.id != id), (err) => {
        callback(err)
      })
    })
  }

  static setTodoToComplate (id, callback) {
    getTodos(todos => {
      const todoIndex = todos.findIndex(t => t.id == id);
      const todo = todos[todoIndex];
      todo.complated = true;
      todos[todoIndex] = todo;
      saveTodos(todos, (err) => {
        callback(err)
      })
    })
  }
}

module.exports = Todo;