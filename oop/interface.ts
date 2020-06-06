/* creating an interface */
interface Person {
    name: string;
    age: number;
/* not an actual method but a structure */
    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Radek',
    age: 36,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('Witaj');