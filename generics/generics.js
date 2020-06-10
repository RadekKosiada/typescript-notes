"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** 3 ways of defining a string */
var arr = ['string1', 'string2'];
var arr1 = [];
/** a way to define an **generic** array type */
var arr2 = [];
/** Promise as generic type
 *
 * gives information about what to expect from promise
*/
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
/** Building a custom generic type */
/** By adding abstract letters T, U we say TS the outcome of the function will be intersection of T & U
 *  in the same time we say T and U will be often be of a different type
 *  T & S are set dynamically
 * 'extends' add **Constraints'**
*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Radek' }, { job: 'Software Engineer' });
/** we can specify our T & U */
var mergedObj2 = merge({ name: 'Dominik', hobbies: ['Building Furnittures'] }, { location: 'Berlin' });
console.log(mergedObj.job);
function countAndDescribe(element) {
    var description = 'Got no value. ';
    if (element.length === 0) {
        description = 'Got 1 element';
    }
    else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}
console.log((countAndDescribe('Hi there!')));
function extractAndConvert(obj, key) {
    console.log('Value: ' + obj[key]);
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Radek' }, 'name');
/** Creating a generic class
 * allows to store string and numbers
 */
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
/** storing string */
var textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Radek');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
/** storing numbers */
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(34);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
