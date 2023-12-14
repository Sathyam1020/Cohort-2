const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

const port = 4000; 

// Utility function to find the index of an item with a specific id in an array
function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

// Utility function to remove an item at a specific index from an array
function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

// Endpoint to get all todos
app.get('/todos', (req, res) => {
  // Read todos from a JSON file and send as a response
  fs.readFile("todos.json", "utf8", function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Endpoint to get a specific todo by id
app.get('/todos/:id', (req, res) => {
  // Read todos from a JSON file, find the todo by id, and send as a response
  fs.readFile("todos.json", "utf8", function(err, data) {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, return 404
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

// Endpoint to create a new todo
app.post('/todos', function(req, res) {
  // Create a new todo, add it to the existing todos, and save to the JSON file
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo); // Return the created todo
    });
  });
});

// Endpoint to update a todo by id
app.put('/todos/:id', function(req, res) {
  // Read todos from a JSON file, find the todo by id, update it, and save to the JSON file
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, return 404
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(updatedTodo); // Return the updated todo
      });
    }
  });
});

// Endpoint to delete a todo by id
app.delete('/todos/:id', function(req, res) {
  // Read todos from a JSON file, find the todo by id, remove it, and save to the JSON file
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, return 404
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send(); // Return success
      });
    }
  });
});

// For all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(port, () => {
    console.log("Port running on", port); 
})
