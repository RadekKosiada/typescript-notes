//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript

let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVar: any;

//array type;
//array of strings
/* 
let strArr: string[];
let numArr: number[];
let boolArr: boolean[]; */

// array type (different syntax);
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>; 


myString = "Hello".slice(0, 3); //gets 'Hel'
myNumber = 0x7fb8;
myBoolean = true;
myVar = "Hello";
strArr = ["hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

console.log(numArr);