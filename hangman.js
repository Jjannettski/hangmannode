
//Requireing the appropriate files/npm packages
var inquirer = require("inquirer");
var letterObj = require("./letter.js");
var underscoreArr = require("./letter.js");
//how many attemps the user has
var livesCounter = 12;

//sets up the underscore array for the for loop below.
var underscoreArr = [];
var underscore = "_";


//Creates an array of underscores equal to the length of the randomly generated word (song name)
for(i=0; i < letterObj.let.length;i++){
    underscoreArr.push(underscore);
}

console.log(underscoreArr);

//PlayGame initializes the hangman game
var PlayGame = function (){
    console.log("Welcome to Hangman! The Node Version!");
    //Shows how many lives the user has left
    console.log("Lives Remaining:" + livesCounter);
    //Initializes the prompt
        inquirer.prompt([
        {
        name: "name",
        message: "Guess A Letter!",
        }
    ]).then(function(answers){
        //shows the answer the user chose
        console.log("You Chose:" +" "+ answers.name);
        //if statement that checks the correct word array if the user input exists
        if(letterObj.let.includes(answers.name)){
            console.log("You Guessed Correctly!");
            //if the user input exists in the word array, this takes that input and places it in the correct position to replace the underscore
            var answerIndex = letterObj.let.indexOf(answers.name);
            underscoreArr.splice(answerIndex, 1, answers.name);
            //console logs the array with the updated letter then initializes the game again
            console.log(underscoreArr);
            PlayGame();
            CheckWord();
            CheckCount();
        }
        else{
            console.log(underscoreArr);
            console.log("Try Again!");
            //lives counter decreases if the user guesses wrong
            livesCounter--;
            PlayGame();
            CheckWord();
            CheckCount();
        }
    });
};
PlayGame();

//Checks to see if there are any underscores left in the array (indirectly, checks if the user guessed all the right letters)
function CheckWord(){
    var numOfTrue = 0;
    //loops through the underscore array to count all occurrances of underscores or "blank" spaces
    for(var i=0;i <underscoreArr.length;i++){
        if(underscoreArr[i] === "_"){
           numOfTrue++;
    }
}
//if there are no underscores, the user wins
if(numOfTrue <= 0){
    console.log("You Win!");
    console.log("If you would like to play again Press the following Keys in exact order:");
    console.log("CTR+C UP ARROW ENTER");
}
}
CheckWord();
//checks if the lives counter is zero, if so, they lose
function CheckCount(){
    if(livesCounter <= 0){
        console.log("\nYou Lose!");
        console.log("If you would like to play again Press the following Keys in exact order:");
        console.log("CTR+C UP ARROW ENTER");
    }
}