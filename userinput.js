const readline = require('readline-sync');

exports.intin = function inputInt(){
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

