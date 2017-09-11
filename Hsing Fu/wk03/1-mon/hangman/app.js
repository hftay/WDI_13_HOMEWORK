console.log("guess the word");

// start with an array of letters, each with an "_"
// lets just hard code the letters as a start, and call it "answer array"

// when a user selects a letter,
// 		compare that letter to the answer array
// 			if the letter matches a letter on the answer array
// 					reveal that letter
// 					change the letter object: selected to true
// 			else, store that letter to a "incorrect guess array" 
// 		turn ++

// 		if letter.selected for all letters === true
// 				youve won
// 		else
// 				keep guessing
// 		if turn === max turn 
// 				youve run out of turns

var wordArr = ["Javascript", "Python", "Ruby", "PHP", "Matlab", "Swift", "Haskell", "Java"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomIndex =  getRandomInt(0, wordArr.length-1);
var randomWordStr = wordArr[randomIndex].toUpperCase();
var randomWordArr = randomWordStr.split("");
var randomWordObj = [];

randomWordArr.forEach(function(value){
	value = {
		letter: value,
		guessed: false
	};
	randomWordObj.push(value);
})

var guessesArray = [];
var victoryCheck = false;
var maxTurn = 10;
var turn = 0;
var	board = ("_".repeat(randomWordObj.length)).split(""); 

var displayBoard = function(){
	randomWordObj.forEach(function(value, index){
		if(value.guessed === true){
			board[index] = value.letter;
		} 
	});
	return board;
}

var matchGuess = function(playerGuess){
	playerGuess = playerGuess.toUpperCase();
	guessesArray.push(playerGuess);
	randomWordObj.forEach(function(value){
		if (playerGuess === value.letter){
			value.guessed = true;
		}
	})
	turn ++;
	return randomWordObj;
}

var turnsLeft = function(){
	var turnsRemaining = maxTurn-turn;
	return turnsRemaining;
}

var victoryCheck = function(){
	var empty = 0;
	board.forEach(function(value){
		if(value === "_"){
			empty++;
		}
	});
	if (empty===0){
		return true;
	} else {
		return false;
	}
}

// -------- the presentation stuff linking to DOM tree ---------------

var playerGuessInput = document.querySelector(".player-guess");
var guessBtn = document.querySelector(".guess-btn");
var boardDiv = document.querySelector(".board");
var turnsLeftDiv = document.querySelector(".turns-left");
var gameWonDiv = document.querySelector(".game-won");
var guessesDiv = document.querySelector(".guesses");

boardDiv.textContent = displayBoard().join(" ");
turnsLeftDiv.textContent = "Remaining Turns: " + turnsLeft();
guessesDiv.textContent = "Letters Guessed: " + guessesArray;

guessBtn.addEventListener("click", function(){
	matchGuess(playerGuessInput.value);
	boardDiv.textContent = displayBoard().join(" ");
	turnsLeftDiv.textContent = "Remaining turns: " + turnsLeft();
	guessesDiv.textContent = "Letters Guessed: " + guessesArray.join(" ");
	if(victoryCheck()===true){
		gameWonDiv.textContent = "You Won!"
	} else if(turnsLeft()===0){
		gameWonDiv.textContent = "Game Over!"
		playerGuessInput
	}
	playerGuessInput.value = "";
})

// try using event.target

// set input as invalid once remaining turns = 0
// create "game reset button"
