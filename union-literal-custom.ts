/* custom type */
type Combinable = number | string;

/* union */
function combine(
    input1: number | string, 
    // the same as above but more economical;
    input2: Combinable,   
    // union and literal combined
    resultConversion: 'as-number' | 'as-text'
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedNum = combine(2, 3, 'as-number');
console.log(combinedNum);

const combinedStrings = combine('Hello', 'World', 'as-text');
console.log(combinedStrings);

