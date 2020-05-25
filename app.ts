function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        //if we add string and numbers within console.log it will print string
        console.log(phrase + result);
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 3.4;
const printResult = true;
const resultPhase = 'Result is: '

add(number1, number2, printResult, resultPhase);
