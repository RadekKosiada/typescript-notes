//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript

let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVar: any;

myString = "Hello".slice(0, 3); //gets 'Hel'
myNumber = 0x7fb8;
myBoolean = true;
myVar = "Hello";
console.log(myString);