/*
    + object type can be defined like this
    + but not a good practice
*/
var person = {
    name: 'Maximilian',
    age: 30
};
/* it's ok to go like this */
var animal = {
    name: 'Cermit',
    origin: 'Muppets',
    friends: ['Piggy', 'Elmo'],
    skills: ['singing', 3]
};
/* two ways to declare array */
// 1 (as in JS)
var veggies = ['tomato', 'broccoli'];
// 2 (new in TS)
var fruits;
fruits = ['apple', 'banana'];
var furnitures;
/* iterating through an array */
for (var _i = 0, _a = animal.friends; _i < _a.length; _i++) {
    var friend = _a[_i];
    /* we can attach string methods as TS knows it will be string
    because we declare it that way above */
    console.log(friend.toLowerCase());
}
/* tuple - array with fixed length */
var languages = [1, 'English'];
// ATTENTION TS allows; kinda mistake of TS
languages.push('German');
// but this would give error as 45 is not a string! languages[1] = 45;
console.log(languages);
