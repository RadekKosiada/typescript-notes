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
        // this.id = id;
        // this.name = n;
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        /* Adding 'private' modifier */
        this.employees = [];
        //accessing the static property
        console.log(Department.fiscalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var employee1 = Department.createEmployee('Radek');
console.log('employee1', employee1, Department.fiscalYear);
// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Radek');
/*
using 'private' modifier will make this impossible so it's harder to mess w/ employees array
accounting.employees[2] = 'Anna';
*/
/* using public = which is default */
// accounting.name = 'new Name'
// accounting.describe();
// accounting.printEmployeeeInformation();
// console.log(accounting);
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
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var teamTech = new ITDepartment('t01', ['Max']);
console.log('teamTechnik', teamTech);
// 2. Example
var IADepartment = /** @class */ (function (_super) {
    __extends(IADepartment, _super);
    function IADepartment(id, reports) {
        var _this = _super.call(this, id, 'IA') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(IADepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value.');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    IADepartment.getInstance = function () {
        if (IADepartment.instance) {
            return this.instance;
        }
        this.instance = new IADepartment('ia01', []);
        return this.instance;
    };
    IADepartment.prototype.describe = function () {
        console.log('IADepartment - ID: ' + this.id);
    };
    IADepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
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
// const iATeam = new IADepartment('ia01', []);
var iATeam = IADepartment.getInstance();
// it will always be the same department;
var iATeam2 = IADepartment.getInstance();
console.log("iATeam", iATeam === iATeam2);
iATeam.mostRecentReport = 'Powell';
console.log("mostRecentReport ", iATeam.mostRecentReport);
iATeam.describe();
// adding reports
iATeam.addReport('SharePoint');
iATeam.addEmployee('Pia');
iATeam.printEmployeeeInformation();
console.log('iATeam', iATeam);
/* Getters & Setters */
var user = {
    /* data properties */
    name: 'John',
    surname: 'Smith',
    /* accessor properties */
    get fullName() {
        return this.name + " " + this.surname;
    },
    set fullName(value) {
        var _a;
        _a = value.split(' '), this.name = _a[0], this.surname = _a[1];
    }
};
// set fullName is executed with the given value.
user.fullName = 'Alice Cooper';
