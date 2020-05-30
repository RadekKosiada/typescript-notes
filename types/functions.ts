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

/* Spread operator on array */
const hobbies = ['Sports', 'Cookies'];
const activeHobbies = ['Hiking', ...hobbies];

console.log('activeHobbies', activeHobbies); //  ["Hiking", "Sports", "Cookies"]0: "Hiking"1: "Sports"2: "Cookies"3: "Sports"4: "Cookies"length: 5__proto__: Array(0)


const testArray = activeHobbies.push(...hobbies);
console.log('testArray', testArray) // 5

/* Spread operator on an object */

const person = {
    name: 'Max',
    age: 30
}

//perfect copy of person object
const copiedPerson = {... person};

// if we do const copiedPerson = person we would have a copy of the pointer to object;
console.log(copiedPerson)


/* 
using spread operator in a function
if we don't know the number of the arguments 
*/
const add2 = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue
    }, 0) 
}

/* using spread operator & tuples (we know how many arguments) */
const add3 = (...numbers: [number, number, number]) => {
    //
}

const addedNumbers = add2(5, 10, 2, 3.7);
console.log("addedNumbers", addedNumbers);


/* Destructuring array 
( it's not changing the original array )
*/

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1); // 'Sports';
console.log(remainingHobbies); // []; empty array as no more hobbies

/* Destructuring object */

const student = {
    firstName: 'Joanna',
    subject: 'History of Art'
};

/* the names of variables within the curly brackets
 have to be the same as the object properties */

const { firstName, subject} = student;
console.log(firstName) // 'Joanna';
 
/* if we want to overwrite the properties from the object */
const {firstName: studentName, subject: field } = student;
console.log(studentName) // 'Joanna';