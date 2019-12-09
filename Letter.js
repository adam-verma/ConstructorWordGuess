const Letter = function(strValue) {
    this.letter = strValue; 
    this.guessedLetter = false; 

    this.letterCheck = function() {
        if(this.guessedLetter === true) {
            return this.letter
        } else if (this.guessedLetter === false) {
            return "_";
        }
        }
    this.guessCheck = function(char) {
        if (char === this.letter) {
            this.guessedLetter = true; 
        }
    }
    }
module.exports = Letter; 