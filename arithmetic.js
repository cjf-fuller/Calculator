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
y = 0
do{
const operator = readline.prompt();
var operator1 = operator
if (operator == '+') {
        console.log("You have selected addition");
        y = 1;
    }
else if (operator == '-'){
        console.log("You have selected subtraction");
        y = 1;
    }
else if (operator == '*'){
        console.log("You have selected multiplication");
        y=1;
    }
else if (operator == '/'){
        console.log("You have selected division");
        y = 1;
    }
else {console.log("Not a valid input! Input must be one of: + - * / \n Please try again...")};
}while (y === 0)

console.log('Please enter the number of numbers you want to ' + operator1 +':');
var numTot = input.intin();
var numArr = inputNumbers(numTot);

switch(operator1) {
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