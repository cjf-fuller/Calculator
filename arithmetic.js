const readline = require('readline-sync');
const input = require('./userinput');

function inputNumbers(numTot){
    var numArr = [];
    for(i=0; i<numTot; i++){
        x = 0;
        do {
            console.log('Please enter number ' + (i+1) +':')
            var num = readline.prompt();
            number = parseFloat(num);
            if (isNaN(number)){
                console.log("Please enter a valid input")
                continue;
            }
            else{
                numArr.push(number);
                x = 1;
            }
        }while(x===0)
    }
    return numArr;
}

exports.onearithcalc = function performOneArithmeticCalculation()
{
console.log('Please enter operation symbol (+-*/):');
const operator = readline.prompt();
console.log('Please enter the number of numbers you want to '+operator+':');
var numTot = input.intin();
var numArr = inputNumbers(numTot);

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
}