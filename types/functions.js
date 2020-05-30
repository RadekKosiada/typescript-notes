"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(2, 3));
/* Function type */
/* 1. declaring a Function type; */
var combineValues;
/* 2. combineValues should except any function
    that takes *two* parameters,
    where each parameter is a number */
var combineValues2;
combineValues = add;
console.log(combineValues(8, 8));
/* Function type w/callback */
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
/* Default value for function's parameter
    It has to be the LAST argument, because they are not skipped;
*/
var addNums = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
/* allows us to call this function with only one parameter */
var resultFromAddNums = addNums(2);
console.log('resultFromAddNums', resultFromAddNums);
/* Spread operator on array */
var hobbies = ['Sports', 'Cookies'];
var activeHobbies = __spreadArrays(['Hiking'], hobbies);
console.log('activeHobbies', activeHobbies); //  ["Hiking", "Sports", "Cookies"]0: "Hiking"1: "Sports"2: "Cookies"3: "Sports"4: "Cookies"length: 5__proto__: Array(0)
var testArray = activeHobbies.push.apply(activeHobbies, hobbies);
console.log('testArray', testArray); // 5
/* Spread operator on an object */
var person = {
    name: 'Max',
    age: 30
};
//perfect copy of person object
var copiedPerson = __assign({}, person);
// if we do const copiedPerson = person we would have a copy of the pointer to object;
console.log(copiedPerson);
/*
using spread operator in a function
if we don't know the number of the arguments
*/
var add2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
/* using spread operator & tuples (we know how many arguments) */
var add3 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    //
};
var addedNumbers = add2(5, 10, 2, 3.7);
console.log("addedNumbers", addedNumbers);
