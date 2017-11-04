
//Word Bank Constructor
function GuessWord(song){
    this.word=[];
};

//Word bank prototype
GuessWord.prototype.addSong = function(song){
    this.word.push(song);
}

module.exports = GuessWord;