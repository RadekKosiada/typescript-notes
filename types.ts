//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript

let myString: string;
let myNumber: number;
let myBoolean: boolean;

myString = "Hello".slice(0, 3); //gets 'Hel'
myNumber = 0x7fb8;
myBoolean = true;

console.log(myString);