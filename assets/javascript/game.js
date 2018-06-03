// create words array

var wordsArr = ["bad", "night", "laugh", "sun"]

// select word at random from words array

var compChoice = words[Math.floor(Math.random()*words.length)];

// find length of selected word

var wordArr = []

// turn selected word into an array of letters

for (var i = 0; i < compChoice.length; i++); {
    wordArr.push(compChoice[i]);
}

// establish array of correct letter guessed

for (var j = 0; j < compChoice.length; j++); {
    answerArr.push("_");
}

// establish wins, losses, guesses left, and incorrect letter array

var wins = 0;
var losses = 0;
var guessesLeft = 12;
var incorrectArr = [];
var answerArr = [];
var userGuess = event.key.toLowerCase();


function newGame() {
    guessesLeft = 12;
    incorrectArr = [];
    answerArr = [];

}
// loop game with condition that selected word array === guessed correct array

for (wordArr === answerArr); {
}

// if guessed letter is in selected word array then in the guessed correct array replace "_" with letter guessed

var index = wordArr.indexOf(userGuess)

if (index !== -1) {
    answerArr[index] = userGuess; 
}

// if guessed letter is not in the selected word array then push guessed letter to incorrect letter array and -1 from guesses left

var indexIncorrect = incorrectArr.indexOf(userGuess)

if ((index === -1) && (indexIncorrect === -1)) {
    incorrectArr.push(userGuess);
    guessesLeft --;
}

// if guesses left = 0 then restart game and add 1 to the losses variable

if (guessesLeft === 0) {
    newGame();
    losses ++;

}

// if word array === guessed correct array then add 1 to the wins variable and restart game

if (wordArr === answerArr) {
    newGame();
    wins ++;

}
