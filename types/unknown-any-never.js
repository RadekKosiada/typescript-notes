/* unknown & any */
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
userInput = userName;
/* never */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
