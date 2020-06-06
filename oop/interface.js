"use strict";
var user1;
user1 = {
    name: 'Radek',
    age: 36,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Witaj');
