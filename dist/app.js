"use strict";
var button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked! ', +message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello'));
}
