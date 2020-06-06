/* creating an interface */
interface Greetable {
    name: string;
/* not an actual method but a structure */
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Radek')

user1.greet('Witaj');