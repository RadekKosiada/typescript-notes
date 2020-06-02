/* Declaring class */

abstract class Department {
	// private id: string;
	// private name: string;
	/* Adding 'private' modifier */
	protected employees: string[] = [];
	//constructor method
	constructor(protected readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;

		//accessing the static property
		console.log(Department.fiscalYear);
	}

	static fiscalYear = 2020;
	static createEmployee(name: string) {
		return {name: name };
	}

	/* adding method */
	/* using 'this' keyword */
	abstract describe(this: Department) : void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const employee1 = Department.createEmployee('Radek');
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
	describe() {
		console.log('IT Department - ID: ' + this.id);
	}
}


const teamTech = new ITDepartment('t01', [ 'Max' ]);
console.log('teamTechnik', teamTech);

// 2. Example
class IADepartment extends Department {

	private lastReport: string;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value.');
		}
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'IA');
		this.lastReport = reports[0];
	}

	describe() {
		console.log('IADepartment - ID: ' + this.id);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	getReports() {
		console.log(this.reports);
	}

	/* overwriting properties (methods) from base class */
	addEmployee(name: string) {
		if (name === 'Max' || name === 'Radek') {
			return;
		}
		this.employees.push(name);
	}
}
// creating a new IADepartment
const iATeam = new IADepartment('ia01', []);

iATeam.mostRecentReport = 'Powell'
console.log("mostRecentReport ", iATeam.mostRecentReport);

iATeam.describe();

// adding reports
iATeam.addReport('SharePoint');

iATeam.addEmployee('Pia');
iATeam.printEmployeeeInformation();

console.log('iATeam', iATeam);

/* Getters & Setters */

let user = {
	/* data properties */
	name: 'John',
	surname: 'Smith',

	/* accessor properties */
	get fullName() {
		return `${this.name} ${this.surname}`;
	},

	set fullName(value) {
		[ this.name, this.surname ] = value.split(' ');
	}
};

// set fullName is executed with the given value.
user.fullName = 'Alice Cooper';
