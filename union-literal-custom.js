/* union */
function combine(input1, 
// the same as above but more economical;
input2, 
// union and literal combined
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNum = combine(2, 3, 'as-number');
console.log(combinedNum);
var combinedStrings = combine('Hello', 'World', 'as-text');
console.log(combinedStrings);
