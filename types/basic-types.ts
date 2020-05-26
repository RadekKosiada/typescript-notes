function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        //if we add string and numbers within console.log it will print string
        console.log(phrase + result);
    }
    return n1 + n2;
}

/* 
    + we don't need to define type below; bad practice!;
    + it's already a const and it's defined not only as a number, but as 5;
*/
const number1 = 5;

/* 
    + that would be ok if we don't assign any value just initiate variable;
*/
let numberX: number; 
numberX = 4;

/* 
    + but with assigning value to let, it's as good as assigning a type of this value;
    + if we want to assing a different type to it later, it will throw an error;
*/
let numberY = 23;

const number2 = 3.4;
const printResult = true;
const resultPhase = 'Result is: '

add(number1, number2, printResult, resultPhase);
