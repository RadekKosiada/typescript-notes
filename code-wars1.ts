/* Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained. */

export function reverseWords(str: string): string {

    var array: string[] = str.split(' ');
    var arrayOfReversedStrings: string[] = [];

    for (let i = 0; i < array.length; i++) {
    //    var reversedString: string = createAndReverseSubArray(array[i]).join('');
        var reversedString: string = array[i].split('').reverse().join('');
        arrayOfReversedStrings.push(reversedString);
    }
    var result = arrayOfReversedStrings.join(' ');
    return result;
}


var solution: string = reverseWords("This is an example!");
console.log(solution);