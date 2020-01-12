//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript
var typesTS;
typesTS = ["string", "number", "boolean", "array", "void", "any", "null", "tuple", "Enum", "Generics"];
var myString;
var myNumber;
var myBoolean;
var myVar; //anything
//array type;
//array of strings
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[]; */
// array type (different syntax);
var strArr;
var numArr;
var boolArr;
var strNumTuple;
//other syntax to define type & initialize variable;
// void - no type returned;
var myVoid = undefined;
var myOtherVoid = null;
var myNull = null;
var myUndefined = undefined;
myString = "Hello".slice(0, 3); //gets 'Hel'
myNumber = 0x7fb8;
myBoolean = true;
myVar = "Hello";
strArr = ["hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, false, true];
//Tuple - array with fixed number of elements;
strNumTuple = ["Hello", 4, 5, 85];
console.log(myUndefined);
