"use strict";
/* Declaring class */
var Department = (function () {
    //constructor method
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);
