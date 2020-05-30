"use strict";
/* Declaring class */
var Department = /** @class */ (function () {
    //constructor method
    function Department(n) {
        this.name = n;
    }
    /* adding method */
    /* using 'this' keyword */
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
var accountingCopy = { name: 's', describe: accounting.describe };
accountingCopy.describe();
