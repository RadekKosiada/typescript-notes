"use strict";
/** 3 ways of defining a string */
var arr = ['string1', 'string2'];
var arr1 = [];
/** a way to define an **generic** array type */
var arr2 = [];
/** Promise as generic type
 *
 * gives information about what to expect from promise
*/
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
/** Building a custom generic type */
/** By adding abstract letters T, U we say TS the outcome of the function will be intersection of T & U
 *  in the same time we say T and U will be often be of a different type
 *  T & S are set dynamically
*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Radek' }, { job: 'Software Engineer' });
/** we can specify our T & U */
var mergedObj2 = merge({ name: 'Dominik', hobbies: ['Building Furnittures'] }, { location: 'Berlin' });
console.log(mergedObj.job);
