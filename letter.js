
//require the guessword constructor
var GuessWord = require("./word.js");
//creates a new "guessword" object
var call = new GuessWord();

//Adds songs to the "word bank"
call.addSong("faint");
call.addSong("lit");
call.addSong("stricken");

//specifies a random position in the word bank array
var randomValue = Math.floor(Math.random() * 3);
var randomSong = call.word[randomValue];

//empty letter array
var letterArr = [];
//adds a random word from the wordbank into the letter array and splits the word into letters with their own unique index
var addLetter = function(randomSong){
    for (i=0;i < randomSong.length;i++){
        letterArr.push(randomSong.charAt(i));
    }
}; 
//calls the addletter function and passing randomSong into it
addLetter(randomSong);

//exporting the appropriate elements
module.exports =  {
    let: letterArr,
    rda: randomSong
}
