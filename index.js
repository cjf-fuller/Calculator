const input = require('./userinput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

printWelcome();

while(true){
    const calculationMode = getCalculationMode();
    if (calculationMode === 1) {
        arithmetic.onearithcalc();
    }
    else if (calculationMode === 2){
       vowelCounting.vowel();
    }
}

function printWelcome(){
    console.log('Welcome to Caspar\'s Calculator!');
    console.log('-------------------');
}

function getCalculationMode(){
    console.log("Which calculation mode do you want to use?\n Please press 1 for arithmetic\n Please press 2 for vowel...");
    var AOrV = input.intin();
    if (AOrV === 1){
        return 1;
    }
    else if (AOrV === 2){
        return 2;
    }
    else {return Error}
}
