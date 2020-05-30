/* Declaring class */

class Department {
    name: string;
    /* Adding 'private' modifier */
    private employees: string[] = [];
    //constructor method
    constructor(n: string) {
        this.name = n;
    }
    /* adding method */
    /* using 'this' keyword */
    describe(this: Department) {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
    this.employees.push(employee);
    }

    printEmployeeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');


accounting.addEmployee('Max');
accounting.addEmployee('Radek');

/* 
using 'private' modifier will make this impossible so it's harder to mess w/ employees array
accounting.employees[2] = 'Anna';
*/

accounting.describe();

accounting.printEmployeeeInformation();

console.log(accounting);

// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();

