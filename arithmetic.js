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
        var ans = numArr.reduce(function(first,second){return first + second;}, 0);
        break;
    case "-":
        var ans = numArr.reduce(function(first,second){return (first - second);});
        break;
    case "*":
        var ans = numArr.reduce(function(first,second){return first * second;});
        break;
    case "/":
        DnumArr = numArr.filter(function (item){return item != 0;});
        var ans = DnumArr.reduce(function(first,second){return first / second;});
        break;
    default:
        console.log("Error - Please enter a valid operator")
}
console.log("Answer = " + ans);
}