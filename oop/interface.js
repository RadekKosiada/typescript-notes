"use strict";
/* creating an interface */
var Person = /** @class */ (function () {
    function Person(n) {
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet('Witaj');
var add;
