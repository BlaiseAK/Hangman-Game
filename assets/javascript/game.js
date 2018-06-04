// create words array

var wordsBankArr = ["tardis", "games", "", "dnd"]



// find length of selected word

var wordArr = []



// establish wins, losses, guesses left, and incorrect letter array

var wins = 0;
var losses = 0;
var guessesLeft = 12;
var incorrectArr = [];
var answerArr = [];



function newGame() {
    guessesLeft = 12;
    incorrectArr = [];
    answerArr = [];
    compChoice = wordsBankArr[Math.floor(Math.random()*wordsBankArr.length)];

}

    // select word at random from words array

var compChoice = wordsBankArr[Math.floor(Math.random()*wordsBankArr.length)];

// turn selected word into an array of letters

for (var i = 0; i < compChoice.length; i++); {
    wordArr.push(compChoice[i]);
}

// establish array of correct letter guessed

for (var j = 0; j < compChoice.length; j++); {
    answerArr.push("_");
}

document.onkeyup = function (event) {


    var userGuess = event.key.toLowerCase();

    var indexWordArr = wordArr.indexOf(userGuess)

    var indexIncorrectArr = incorrectArr.indexOf(userGuess)


    // loop game with condition that selected word array === guessed correct array

    while (wordArr !== answerArr) {


        // if guessed letter is in selected word array then in the guessed correct array replace "_" with letter guessed

        

        if (indexWordArr !== -1) {
            answerArr[indexWordArr] = userGuess; 
        }

        // if guessed letter is not in the selected word array then push guessed letter to incorrect letter array and -1 from guesses left

        

         else if ((indexWordArr === -1) && (indexIncorrectArr === -1)) {
            incorrectArr.push(userGuess);
            guessesLeft --;
        }

        // if guesses left = 0 then restart game and add 1 to the losses variable   

         else if (guessesLeft === 0) {
            newGame();
            losses ++;

        }

        // if word array === guessed correct array then add 1 to the wins variable and restart game

         else if (wordArr === answerArr) {
            newGame();
            wins ++;

        }
    }
    
    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>The word: " + wordArr + "</p>" +
    "<p>The incorrect letters you've guessed</p>" +
    "<p>" + incorrectArr + "</p>";

    document.querySelector("#game").innerHTML = html;

}