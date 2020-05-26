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
