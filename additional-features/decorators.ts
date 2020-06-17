/** Creating a decorator
 * uppercase not a must, but a convention
 */
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person1 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person1();

console.log(pers);

