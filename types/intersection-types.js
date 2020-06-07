"use strict";
/** Creating an intersection type */
// 1. Example 
var e1 = {
    name: 'Radek',
    privileges: ['super admin'],
    startDate: new Date(),
};
/** Type Guards */
// 1. Example
function addStuff(a, b) {
    // this if condition is type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // type guard using JS 'in' keyword
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
}
var emp2 = {
    name: 'Radek',
    privileges: ['coyo admin']
};
printEmployeeInformation(emp2);
