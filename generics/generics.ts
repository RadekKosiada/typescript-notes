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

/** Building a custom generic type */

/** By adding abstract letters T, U we say TS the outcome of the function will be intersection of T & U 
 *  in the same time we say T and U will be often be of a different type
 *  T & S are set dynamically
 * 'extends' add **Constraints'**
*/
function merge<T extends object, U extends object, >(objA: T, objB: U) {
    return Object.assign(objA, objB); 
}

const mergedObj = merge({name: 'Radek'}, {job: 'Software Engineer'});
/** we can specify our T & U */
const mergedObj2 = merge<{name: string, hobbies: string[]}, {location: string}>({name: 'Dominik', hobbies: ['Building Furnittures']}, {location: 'Berlin'});

console.log(mergedObj.job);

/** Building a generic function type w Interface as a Constraint */

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy >(element: T) : [T, string] {
    let description = 'Got no value. ';
    if (element.length === 0) {
        description = 'Got 1 element';
    } else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description]
}

console.log((countAndDescribe('Hi there!')))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    console.log('Value: ' + obj[key]);
    return 'Value: ' + obj[key];

}

extractAndConvert({name: 'Radek'}, 'name');