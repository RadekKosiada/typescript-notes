"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Creating a decorator
 * uppercase not a must, but a convention
 */
function Logger(logString) {
    //since it's returns a function, it's a decorator's factory
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
;
/** Creating a decorator's factory */
function WithTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        console.log(hookId);
        var p = new constructor();
        if (hookEl) {
            console.log('hookEl', hookEl);
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
    Person1 = __decorate([
        Logger('LOGGING - PERSON'),
        WithTemplate('<h1>My Person Object</h1>', 'app')
    ], Person1);
    return Person1;
}());
var pers = new Person1();
console.log(pers);
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
}());
