/** 3 ways of defining a string */
const arr = ['string1', 'string2'];

const arr1: string[] = [];

/** a way to define an **generic** array type */
const arr2: Array<string> = [];

/** Promise as generic type 
 * 
 * gives information about what to expect from promise
*/

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

