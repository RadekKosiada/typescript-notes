function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(2, 3));

/* Function type */

/* 1. declaring a Function type; */
let combineValues: Function;

/* 2. combineValues should except any function 
    that takes *two* parameters,
    where each parameter is a number */
let combineValues2: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8));

/* Function type w/callback */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20, (result) => {
    console.log(result)
})

/* Default value for function's parameter
    It has to be the LAST argument, because they are not skipped;
*/

const addNums = (a: number, b: number = 1) => a + b;

/* allows us to call this function with only one parameter */

const resultFromAddNums = addNums(2);
console.log('resultFromAddNums', resultFromAddNums);
