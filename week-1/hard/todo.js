class Todo {
    constructor() {
      this.todos = [];
    }
  
    // Add todo to the list of todos
    add(todo) {
      this.todos.push(todo);
    }
  
    // Remove todo at a given index
    remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
        this.todos.splice(indexOfTodo, 1);
      }
    }
  
    // Update todo at a given index
    update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
        this.todos[index] = updatedTodo;
      }
    }
  
    // Get all todos
    getAll() {
      return this.todos;
    }
  
    // Get todo at a given index
    get(indexOfTodo) {
      return this.todos[indexOfTodo];
    }
  
    // Delete all todos
    clear() {
      this.todos = [];
    }
}
  
const myTodoList = new Todo();

myTodoList.add('Buy groceries');
myTodoList.add('Read a book');
console.log(myTodoList.getAll()); // Output: ['Buy groceries', 'Read a book']

myTodoList.update(0, 'Buy new groceries');
console.log(myTodoList.get(0)); // Output: 'Buy new groceries'

myTodoList.remove(1);
console.log(myTodoList.getAll()); // Output: ['Buy new groceries']

myTodoList.clear();
console.log(myTodoList.getAll()); // Output: []