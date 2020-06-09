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
