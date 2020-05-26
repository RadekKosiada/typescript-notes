/* 
    + object type can be defined like this
    + but not a good practice
*/
const person: {
    name: string,
    age: number
} = {
    name: 'Maximilian',
    age: 30
}

/* it's ok to go like this */

const animal = {
    name: 'Cermit',
    origin: 'Muppets',
    friends: ['Piggy', 'Elmo'],
    skills: ['singing', 3]
}

/* two ways to declare array */
// 1 (as in JS)
let veggies = ['tomato', 'broccoli'];

// 2 (new in TS)
let fruits: string[];
fruits = ['apple', 'banana'];

let furnitures: any[];

/* iterating through an array */

for (const friend of animal.friends) {
    /* we can attach string methods as TS knows it will be string
    because we declare it that way above */
    console.log(friend.toLowerCase());
}

/* tuple - array with fixed length */ 
let languages: [number, string] = [1, 'English'];
// ATTENTION TS allows; kinda mistake of TS
languages.push('German');
// but this would give error as 45 is not a string! languages[1] = 45;

console.log(languages)