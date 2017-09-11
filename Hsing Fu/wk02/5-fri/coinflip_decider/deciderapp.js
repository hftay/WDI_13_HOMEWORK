console.log ("let a coin decide your life");

// Create a file called decider.js
// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
// Create a COIN APP
// Create a file called decider.html
// Find any coin image online
// Link the .js file, while you're there you may also decide to add a .css file for some styling
// Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.

var coinImg = document.querySelector("#coin-img");
var coinFlipResultDiv = document.querySelector(".coin-flip-result");
var resultList = document.querySelector("ol");
var headsTallyDiv = document.querySelector(".heads-tally");
var tailsTallyDiv = document.querySelector(".tails-tally");
var displayWinnerDiv = document.querySelector(".display-winner");

var sumOfHeads = 0;
var sumOfTails = 0;
var targetScore = 5;

// incorporate toggle to restart game

coinImg.addEventListener("click", function(){
	console.log("working...");
	var result = coinFlip();
	coinFlipResultDiv.textContent = result;

	var newListItem = document.createElement("li");
	resultList.append(newListItem);
	newListItem.textContent = result;

	if(result === "heads"){
		sumOfHeads++;
		headsTallyDiv.textContent = "heads: " + sumOfHeads;
	} else {
		sumOfTails++;
		tailsTallyDiv.textContent = "tails: " + sumOfTails;
	}

	if(sumOfHeads === targetScore){
		displayWinnerDiv.textContent = "heads win!";
	}

	if(sumOfTails === targetScore){
		displayWinnerDiv.textContent = "tails win!";
	}


});

var coinFlip = function (){
	var randomise = Math.round(Math.random()); //returns 0 or 1;
	if(randomise === 1){
		var result = "heads";
	} else {
		var result = "tails";
	}
	return result;
}
