"use strict";
/* Given two integers a and b, which can be positive or negative,
find the sum of all the numbers between including them too and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered! */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = exports.Kata = exports.getSum = void 0;
function getSum(a, b) {
    var numArray = [];
    var num;
    if (b === 0) {
        numArray.push(a);
        console.log(numArray);
    }
    else if (b > 0) {
        for (var i = a; i <= b; i++) {
            numArray.push(i);
            console.log(numArray);
        }
    }
    else if (b < 0) {
        for (var i = b; i <= a; i++) {
            numArray.push(i);
            console.log(numArray);
        }
    }
    num = numArray.reduce(function (c, d) { return c + d; }, 0);
    return num;
}
exports.getSum = getSum;
console.log(getSum(1, 5)); //1 + 2 + 3 + 4 + 5 = 15;
// console.log(getSum(-2, 2)); // -2 + -1 + 0 + 1 + 2 = 0;
// console.log(getSum(1, 1));
// console.log(getSum(0, 127759));
// console.log(getSum(1, 0))   // 1 + 0 = 1
// console.log(getSum(1, 2))   // 1 + 2 = 3
// console.log(getSum(0, -2))  // 0 + 1 = 1
// console.log(getSum(1, 1))   // 1 Since both are same
// console.log(getSum(-1, 0))  // -1 + 0 = -1
// console.log(getSum(-1, 2))
/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.dnaStrand = function (dna) {
        var dnaArray = dna.split('');
        var newArray = [];
        for (var i = 0; i < dnaArray.length; i++) {
            var letter = dnaArray[i];
            if (letter === "A") {
                letter = "T";
            }
            else if (letter === "T") {
                letter = "A";
            }
            else if (letter === "C") {
                letter = "G";
            }
            else if (letter === "G") {
                letter = "C";
            }
            newArray.push(letter);
        }
        dna = newArray.join('');
        return dna;
    };
    return Kata;
}());
exports.Kata = Kata;
var solution2 = Kata.dnaStrand('ATTGC');
//console.log('solution2', solution2);
/* Complete the function that accepts a string parameter,
and reverses each word in the string.
All spaces in the string should be retained. */
function reverseWords(str) {
    var array = str.split(' ');
    var arrayOfReversedStrings = [];
    for (var i = 0; i < array.length; i++) {
        //    var reversedString: string = createAndReverseSubArray(array[i]).join('');
        var reversedString = array[i].split('').reverse().join('');
        arrayOfReversedStrings.push(reversedString);
    }
    var result = arrayOfReversedStrings.join(' ');
    return result;
}
exports.reverseWords = reverseWords;
var solution1 = reverseWords("This is an example!");
