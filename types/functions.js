"use strict";
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
