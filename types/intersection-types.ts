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