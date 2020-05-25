function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        //if we add string and numbers within console.log it will print string
        console.log(phrase + result);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 3.4;
var printResult = true;
var resultPhase = 'Result is: ';
add(number1, number2, printResult, resultPhase);
