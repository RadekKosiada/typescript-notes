function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('3', 5)); //returns 8;
//why the optional argument is beneficial?
function getName(firstName, lastName) {
    if (!lastName) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('John'));
function myFunctionVoid() {
    return;
}
myFunctionVoid();
