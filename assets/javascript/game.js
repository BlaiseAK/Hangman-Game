// create words array
document.addEventListener("DOMContentLoaded", function (event) {

    const wordsBankArr = ["rebellion", "endor", "empire", "xwing", "ywing", "bwing", "awing", "millenium falcon"];

    // find length of selected word

    let wordArr = [];



    // establish wins, losses, guesses left, and incorrect letter array

    // guesses left to win the game
    let guessesLeft = 12;
    // all letters guess will go in this array
    let lettersGuessedArry = [];
    // all letters that will show '-' until updated with correct letters
    let lettersCorrectArry = [];
    // array of letters for the lettersCorrectArry to match to win game!
    let compChoiceArry = [];



    let wins = 0;
    let losses = 0;
    let guessesLeft = 12;
    let incorrectArr = [];
    let answerArr = [];
    let lettersInWord = [];
    let compChoice = "";
    let numberOfBlanks = 0;

    console.log(`Wins: ${wins}`);
    console.log(`Losses: ${losses}`);
    console.log(`Guesses left: ${guessesLeft}`);
    console.log(`The incorrect result${incorrectArr}`);
    console.log(`${answerArr}`);
    console.log(`${compChoice}`);

    function newGame() {
        guessesLeft = 12;
        incorrectArr = [];
        answerArr = [];
        compChoice = wordsBankArr[Math.floor(Math.random() * wordsBankArr.length)];
        console.log(`${compChoice}`)
        lettersInWord = compChoice.split("");
        console.log(lettersInWord);
        numberOfBlanks = lettersInWord.length;
        console.log(numberOfBlanks);
        for (let i = 0; i < numberOfBlanks; i++) {
            answerArr.push("_");
        }
        console.log(answerArr);
    }
    newGame();

    document.onkeyup = function (event) {
        event.preventDefault();

        var userGuess = event.key.toLowerCase();
        console.log(userGuess);

        var indexWordArr = wordArr.indexOf(userGuess);

        console.log(indexIncorrectArr);

        var indexIncorrectArr = incorrectArr.indexOf(userGuess);

        console.log(indexIncorrectArr);

        // if word array === guessed correct array then add 1 to the wins variable and restart game
        if (wordArr === answerArr) {
            newGame();
            wins++;
        }

        // if guessed letter is in selected word array then in the guessed correct array replace "_" with letter guessed
        else if (indexWordArr !== -1) {
            answerArr[indexWordArr] = userGuess;
        }

        // if guessed letter is not in the selected word array then push guessed letter to incorrect letter array and -1 from guesses left
        else if ((indexWordArr === -1) && (indexIncorrectArr === -1)) {
            incorrectArr.push(userGuess);
            guessesLeft--;
        }

        // if guesses left = 0 then restart game and add 1 to the losses variable   
        else if (guessesLeft === 0) {
            newGame();
            losses++;
        }




        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>The word: " + wordArr + "</p>" +
            "<p>The incorrect letters you've guessed</p>" +
            "<p>" + incorrectArr + "</p>";

        document.querySelector("#game").innerHTML = html;

    };
});