/* Given two integers a and b, which can be positive or negative, 
find the sum of all the numbers between including them too and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered! */

export function getSum(a: number, b: number): number {
    var numArray: number[] = [];
    var num: number;
    if(b === 0) {
        numArray.push(a);
        console.log(numArray)
    } else if (b > 0) {
        for(var i = a; i <= b; i++) {
            numArray.push(i);
            console.log(numArray)
        }
    } else if (b < 0) {
        for (var i = b; i <=a; i++) {
            numArray.push(i);
            console.log(numArray)
        }
    }
   
   num = numArray.reduce((c,d) => c + d, 0);

    return num;
}

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

export class Kata {
    static dnaStrand(dna: string) {
        var dnaArray: string[] = dna.split('');
        var newArray: string[] = [];
        
        for(let i = 0; i < dnaArray.length; i++) {
            var letter: string = dnaArray[i];
            if (letter === "A") {
                letter = "T";
            } else if (letter === "T"){
                letter = "A";
            } else if (letter === "C") {
                letter = "G";
            } else if (letter === "G") {
                letter = "C";
            }
            newArray.push(letter);

        }
        dna = newArray.join('');
        return dna;
    }
  }

var solution2: string = Kata.dnaStrand('ATTGC');
//console.log('solution2', solution2);



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


var solution1: string = reverseWords("This is an example!");
