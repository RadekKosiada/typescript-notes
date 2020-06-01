"use strict";
/* Declaring class */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* Inheritance */
// 1. Example
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    /* constructor will help us constructing parts
    of a new class unique to it, not inherited from the bas class */
    function ITDepartment(id, admins) {
        var _this = 
        /* we pass id from constructor from argument passed to class
            the second argument 'IT' is already declared in the Department
        */
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var teamTech = new ITDepartment('t01', ['Max']);
console.log("teamTechnik", teamTech);
// 2. Example
var IADepartment = /** @class */ (function (_super) {
    __extends(IADepartment, _super);
    function IADepartment(id, reports) {
        var _this = _super.call(this, id, 'IA') || this;
        _this.reports = reports;
        return _this;
    }
    IADepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    IADepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    /* overwriting properties (methods) from base class */
    IADepartment.prototype.addEmployee = function (name) {
        if (name === 'Max' || name === 'Radek') {
            return;
        }
        this.employees.push(name);
    };
    return IADepartment;
}(Department));
// creating a new IADepartment
var iATeam = new IADepartment('ia01', ['Coyo21']);
// adding reports 
iATeam.addReport('SharePoint');
iATeam.addEmployee('Pia');
iATeam.printEmployeeeInformation();
console.log('iATeam', iATeam);
