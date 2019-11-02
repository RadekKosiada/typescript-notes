/*
function showTodo(todo: {title: string, text: string}) {
  console.log(todo.title+': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash'}

showTodo(myTodo);
*/
// instead of declare function like the one below with complex arguments
// we can pass neat interface
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: 'Trash', text: 'Take out trash' };
showTodo(myTodo);
