"use strict";
/* Declaring class */
var Department = /** @class */ (function () {
    //constructor method
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        /* Adding 'private' modifier */
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    /* adding method */
    /* using 'this' keyword */
    Department.prototype.describe = function () {
        console.log('Department: ' + this.id + ', ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Radek');
/*
using 'private' modifier will make this impossible so it's harder to mess w/ employees array
accounting.employees[2] = 'Anna';
*/
/* using public = which is default */
// accounting.name = 'new Name'
accounting.describe();
accounting.printEmployeeeInformation();
console.log(accounting);
// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();
