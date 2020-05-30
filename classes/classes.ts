/* Declaring class */

class Department {
    // private id: string;
    // private name: string;
    /* Adding 'private' modifier */
    private employees: string[] = [];
    //constructor method
    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }
    /* adding method */
    /* using 'this' keyword */
    describe(this: Department) {
        console.log('Department: ' + this.id + ', ' + this.name)
    }

    addEmployee(employee: string) {
    this.employees.push(employee);
    }

    printEmployeeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1','Accounting');


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

