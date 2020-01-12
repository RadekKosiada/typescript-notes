//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript

let typesTS: Array<string>;
typesTS = ["string", "number", "boolean", "array", "void", "any", "null", "tuple", "Enum", "Generics"];

let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVar: any; //anything

//array type;
//array of strings

let strArr2: string[];
let numArr2: number[];
let boolArr2: boolean[]; 

// array type (different syntax);
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>; 

//Tuple - array with fixed number of elements;
let strNumTuple: [string, number, number, number];

//other syntax to define type & initialize variable;
// void - no type returned;
let myVoid: void = undefined;
let myOtherVoid: void = null;

let myNull: null = null;
let myUndefined: undefined = undefined;

myString = "Hello".slice(0, 3); //gets 'Hel' so also a string;
myNumber = 0x7fb8;
myBoolean = true;

myVar = "Hello";

strArr = ["hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["Hello", 4, 5, 85];

console.log(myUndefined);