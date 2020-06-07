/** Type casting */
// 1. Example
const userInput = <HTMLInputElement>document.getElementById('user-description')!;


// 2. Example (better when using React.js so the syntax from above doenst interrupt with JSX)
const userInput2 = document.getElementById('user-description')! as HTMLInputElement;



userInput.value = 'Hi there!';

