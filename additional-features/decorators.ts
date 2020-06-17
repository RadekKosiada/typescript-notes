/** Creating a decorator
 * uppercase not a must, but a convention
 */
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };  
};

@Logger('LOGGING - PERSON')
class Person1 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person1();

console.log(pers);


