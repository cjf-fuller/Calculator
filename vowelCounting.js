const readline = require('readline-sync');

exports.vowel = function performOneVowelCountingCalculation(){
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