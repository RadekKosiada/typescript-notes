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

/* Inheritance */
// 1. Example
class ITDepartment extends Department {
    admins: string[];
    /* constructor will help us constructing parts 
    of a new class unique to it, not inherited from the bas class */
    constructor(id: string, admins: string[]) {
        /* we pass id from constructor from argument passed to class 
            the second argument 'IT' is already declared in the Department
        */
        super(id, 'IT');
        this.admins = admins;
    }
}

const teamTech = new ITDepartment('t01', ['Max']);
console.log("teamTechnik", teamTech);

// 2. Example
class IADepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'IA');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }

}
// creating a new IADepartment
const iATeam = new IADepartment('ia01', ['Coyo21']);
// adding reports 
iATeam.addReport('SharePoint');

console.log('iATeam', iATeam);

