export class App {
  constructor() {
    this.header = 'Todos';
    this.todos = [];
    this.todoDesc = '';
  }
  addTodo() {
    this.todos.push({
      description: this.todoDesc,
      done: false

    });
  }

  delTodo(todo) {
    let index = this.todo.indexOf(todos);
    todos.pop(index);
  }
}

