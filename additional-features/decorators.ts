/** Creating a decorator
 * uppercase not a must, but a convention
 */
function Logger(logString: string) {
    //since it's returns a function, it's a decorator's factory
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };  
};

/** Creating a decorator's factory */
function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        console.log(hookId)
        const p = new constructor();
        if(hookEl) {
            console.log('hookEl', hookEl);
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person1 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person1();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product {
    @Log
    title: string;
    _price: number;

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }

    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}