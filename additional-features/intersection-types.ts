/** Creating an intersection type */
// 1. Example 

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Radek',
    privileges: ['super admin'],
    startDate: new Date(),
}

// 2. Example
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/** Type Guards */

// 1. Example

/** Introducing function overloads */
function addStuff(a: number, b: number): number;
function addStuff(a: string, b:string): string;
function addStuff(a: string, b: number): string;
function addStuff(a: number, b: string): string;

function addStuff(a: Combinable, b: Combinable) {
    // this if condition is type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } 
    return a + b;
}

// 2. Example

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    // type guard using JS 'in' keyword
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
}

const emp2: UnknownEmployee = {
    name: 'Radek',
    privileges: ['coyo admin']
}

printEmployeeInformation(emp2);

// 3. Example with class using JS keyword 'instaceof'

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');   
    }
    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    
}


