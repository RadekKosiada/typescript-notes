/*
function showTodo(todo: {title: string, text: string}) {
  console.log(todo.title+': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);
*/

interface Todo {
  title: string;
  text: string;
}

// instead of declare function like the one below with complex arguments
// we can pass neat interface

function showTodo(todo: Todo) {
  console.log(todo.title+': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);