"use strict";
/* Complete the function that accepts a string parameter,
and reverses each word in the string.
All spaces in the string should be retained. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
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
var solution = reverseWords("This is an example!");
console.log(solution);
