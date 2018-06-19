const readline = require('readline-sync');
console.log('Welcome to Caspar\'s Calculator!');

console.log('Please enter first number:');
const responsex = readline.prompt();
var x = parseFloat(responsex)

console.log('Please enter second number:');
const responsey = readline.prompt();
var y = parseFloat(responsey)

var product = x*y
console.log('The product of ' + x + ' and ' + y + ' is ' + product)