//export{}; //https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable-typescript
var typesTS;
typesTS = ["string", "number", "boolean", "array", "void", "any", "null", "tuple", "Enum", "Generics"];
var myString;
var myNumber;
var myBoolean;
var myVar; //anything
//array type;
//array of strings
var strArr2;
var numArr2;
var boolArr2;
// array type (different syntax);
var strArr;
var numArr;
var boolArr;
//Tuple - array with fixed number of elements;
var strNumTuple;
//other syntax to define type & initialize variable;
// void - no type returned;
var myVoid = undefined;
var myOtherVoid = null;
var myNull = null;
var myUndefined = undefined;
myString = "Hello".slice(0, 3); //gets 'Hel' so also a string;
myNumber = 0x7fb8;
myBoolean = true;
myVar = "Hello";
strArr = ["hello", "world"];
numArr = [1, 2, 3];
boolArr = [true, false, true];
strNumTuple = ["Hello", 4, 5, 85];
console.log(myUndefined);
