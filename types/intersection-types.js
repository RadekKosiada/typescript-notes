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
// 3. Example with class using JS keyword 'instaceof'
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
