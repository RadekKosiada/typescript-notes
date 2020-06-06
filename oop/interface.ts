/* creating an interface */

interface Named {
    readonly name?: string;
    /** add optional property and optional method */
    outputName?: string;
    myMethod?(): void;
}
interface Greetable extends Named {
/* not an actual method but a structure */
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age: number;
    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        }
    }
}

let user1: Greetable;

user1 = new Person()

user1.greet('Witaj');

/** Interface to define function */

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;