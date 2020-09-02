/* 
Write a generic function applyFunction that takes two arguments:

f, a function that takes an argument with a generic type T and returns a value of type T.
x, a value of the same generic type T
applyFunction should return the result of f(x). */

function applyFunction<T>(f:(arg1: T) => T, arg2: T) {
    return f(arg2)
}

/* generic functions */

function first<T>(elements: Array<T>): T {
    return elements[0]
  }

// first<number>([true, false, true]) // will give type error

/* narrowing function */
type First<T> = (elements: Array<T>) => T
const firstString: First<string> = first


/* Discrimated unions */

type StartedCourse = {

    /* 'started' flag is a discriminator */
    started: true;
    lastInteractionTime: Date,
}

type UnstartedCourse = {
    started: false,
}

type Course = StartedCourse | UnstartedCourse;


/* 
Write a function that turns a string | undefined into a number.

If the argument was undefined, the function should return undefined.
If the argument was a string containing a valid number, it should return that number.
If the argument was a string without a number, it should return undefined.
(You'll want to use the built-in functions parseInt(s: string) and isNaN(n: number).)
*/

function maybeParseString(arg: string | undefined): number | undefined {
    let result;
    if (typeof arg === 'string' && !isNaN(parseInt(arg))) {
        result = parseInt(arg)
    } else if (typeof arg === 'string' && isNaN(parseInt(arg))) {
        result = undefined;
    } else if (arg === undefined) {
        result = undefined;
    }
    return result;
}

console.log(maybeParseString(undefined))