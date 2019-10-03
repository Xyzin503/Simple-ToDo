import {TodoItem} from './todo-item';

export class TodoList {
  constructor() {
    this.todos = [];
    this.newTodo = '';
    this.lastId = 0;
  }

  addTodo() {
    this.lastId++;
    this.todos.push(new TodoItem(this.lastId, this.newTodo));
    this.newTodo = '';

    console.log(this.todos.length);
  }

  removeTodo(item) {
    item.done = true;
  }
}
