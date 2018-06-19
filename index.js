const readline = require('readline-sync');
console.log('Welcome to Caspar\'s Calculator!');
console.log('-------------------');

console.log('Please enter operation symbol (+-*/):');
const operator = readline.prompt();

console.log('Please enter first number:');
const responsex = readline.prompt();
var x = parseFloat(responsex);

console.log('Please enter second number:');
const responsey = readline.prompt();
var y = parseFloat(responsey);

switch(operator) {
    case "+":
        var ans = x+y;
        console.log(x + ' + ' + y + ' = ' + ans);
        break;
    case "-":
        var ans = x-y;
        console.log(x + ' - ' + y + ' = ' + ans);
        break;
    case "*":
        var ans = x*y;
        console.log(x + ' * ' + y + ' = ' + ans);
        break;
    case "/":
        var ans = x/y;
        console.log(x + ' / ' + y + ' = ' + ans);
        break;
    default:
        console.log("Error - Please enter a valid operator")
}

