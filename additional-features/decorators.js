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
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
;
function WithTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = name;
        }
    };
}
// @Logger('LOGGING - PERSON')
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
    Person1 = __decorate([
        WithTemplate('<h1>My Person Object</h1>', 'app')
    ], Person1);
    return Person1;
}());
var pers = new Person1();
console.log(pers);
