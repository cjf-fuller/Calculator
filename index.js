const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcome();
while(true){
    const calculationMode = getCalculationMode();
    if (calculationMode === 1) {
        performOneArithmeticCalculation();
    }
    else if (calculationMode === 2){
        performOneVowelCountingCalculation();
    }
}


function performOneArithmeticCalculation()
{
console.log('Please enter operation symbol (+-*/):');
const operator = readline.prompt();
console.log('Please enter the number of numbers you want to '+operator+':');
var numTot = inputInt();
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
function printWelcome(){
    console.log('Welcome to Caspar\'s Calculator!');
    console.log('-------------------');
}

function inputInt(){
    var x = 0;
    do {
        const numTo = readline.prompt();
        var numTot = parseInt(numTo);
        if (isNaN(numTot)){
             console.log("Please enter a valid input.")
             continue;
        }
        else{
            x = 1;
        }
    
    }while (x===0);
    return numTot
}
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
function getCalculationMode(){
    console.log("Which calculation mode do you want to use?\n Please press 1 for arithmetic\n Please press 2 for vowel...");
    var AOrV = inputInt();
    if (AOrV === 1){
        return 1;
    }
    else if (AOrV === 2){
        return 2;
    }
    else {return Error}
}
function performOneVowelCountingCalculation(){
    console.log("Please enter a string to be evaluated:");
    var stringTC = readline.prompt();
    stringTC = stringTC.toLowerCase();
    
    var vowelCount = {
        'Acount': a=0,
        'Ecount': e=0,
        'Icount': i=0,
        'Ocount': o=0,
        'Ucount': u=0 
    };
    for (x=0; x< stringTC.length; x++ ){
        if(stringTC[x]==='a'){
            vowelCount.Acount++
        }
        else if(stringTC[x]==='e'){
            vowelCount.Ecount++
        }
        else if(stringTC[x]==='i'){
            vowelCount.Icount++
        }
        else if(stringTC[x]==='o'){
            vowelCount.Ocount++
        }
        else if(stringTC[x]==='u'){
            vowelCount.Ucount++
        }
        else{
            continue;
        }
    }
    console.log(vowelCount);
}