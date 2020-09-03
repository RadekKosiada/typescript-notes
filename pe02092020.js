/* Computed keys */
var loginCounts = {
    Amir: 5,
    Betty: 7
};
loginCounts.Betty;
/*
Write a generic function applyFunction that takes two arguments:

f, a function that takes an argument with a generic type T and returns a value of type T.
x, a value of the same generic type T
applyFunction should return the result of f(x). */
function applyFunction(f, arg2) {
    return f(arg2);
}
/* generic functions */
function first(elements) {
    return elements[0];
}
var firstString = first;
/*
Write a function that turns a string | undefined into a number.

If the argument was undefined, the function should return undefined.
If the argument was a string containing a valid number, it should return that number.
If the argument was a string without a number, it should return undefined.
(You'll want to use the built-in functions parseInt(s: string) and isNaN(n: number).)
*/
function maybeParseString(arg) {
    var result;
    if (typeof arg === 'string' && !isNaN(parseInt(arg))) {
        result = parseInt(arg);
    }
    else if (typeof arg === 'string' && isNaN(parseInt(arg))) {
        result = undefined;
    }
    else if (arg === undefined) {
        result = undefined;
    }
    return result;
}
console.log(maybeParseString(undefined));
