let attempt, totalPrize=0, possiblePrize,randomNumber;
let maxPrize=10;
let minRangeNumber=0;
let maxRangeNumber=5;
let userNumber;

function startGame(){
    let question = confirm ('Do you want to play a game?')
    if(question){
        logic();
    }else{
        alert('You did not become a millionaire, but can.')
    }
}
startGame();    


function logic(){
    for(attempt=3; attempt>0; attempt--){
        possiblePrize=Math.floor(maxPrize / Math.pow(2, 3 - attempt));
        randomNumber = Math.floor(Math.random() * maxRangeNumber);
        userNumber = parseInt(prompt ('Enter your number from ' + minRangeNumber + ' to '+maxRangeNumber
    +'\n attempts left: '+attempt+'\n Total prize: '+ totalPrize+'\n Possible prize in current attempt: '+possiblePrize
    ));
        
        console.log(randomNumber);
        console.log(userNumber);
        checkNumber();
        }
        endGame();
}
function checkNumber(){
    if(userNumber===randomNumber){
        totalPrize=possiblePrize+totalPrize;
        alert('Congratulation!Your prize is: ' + totalPrize)
        let newQuestion = confirm('Do you want to continue?');
        if(newQuestion){
            maxRangeNumber=maxRangeNumber*2;
            maxPrize=maxPrize*3;
            logic();
        } else {
            attempt = 0;
        }
    }
}
function endGame(){
    alert('Thank you for a game. Your prize is: '+ totalPrize);
}




