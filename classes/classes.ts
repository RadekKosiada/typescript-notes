/* Declaring class */

class Department {
    name: string;
    //constructor method
    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');
console.log(accounting)