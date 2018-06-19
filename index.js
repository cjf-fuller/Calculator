const readline = require('readline-sync');
console.log('Welcome to Caspar\'s Calculator!');
console.log('-------------------');

console.log('Please enter operation symbol (+-*/):');
const operator = readline.prompt();

console.log('Please enter the number of numbers you want to '+operator+':');
const numTot = readline.prompt();

var numArr = [];
for(i=0; i<numTot; i++){
    console.log('Please enter number ' + (i+1) +':')
    var number = readline.prompt();
    numArr.push(parseFloat(number));
}

console.log(numArr)
switch(operator) {
    case "+":
        var ans = numArr[0];
        for (i=1; i<numTot; i++){
          ans = ans + numArr[i]    
        }
        break;
    case "-":
        var ans = numArr[0];
        for (i=1; i<numTot; i++){
           ans = ans - numArr[i]    
        }
        break;
    case "*":
        var ans = numArr[0];
        for (i=1; i<numTot; i++){
           ans = ans * numArr[i]    
        }
        break;
    case "/":
        var ans = numArr[0];
        for (i=1; i<numTot; i++){
           ans = ans / numArr[i]    
        }
        break;
    default:
        console.log("Error - Please enter a valid operator")
}
console.log("Answer = " + ans);

