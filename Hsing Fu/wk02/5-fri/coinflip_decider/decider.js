console.log ("let a coin decide your life");

// Create a file called decider.js
// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

var coinFlip = function (){
	var randomise = Math.round(Math.random()); //returns 0.001 to 0.9999
	if(randomise ===1){
		var result = 1;
		console.log ("HEADS");
	} else {
		var result = 0;
		console.log ("TAILS");
	}
	return result;
}

var coinCounter = function(){
	var sumOfHeads = 0;		
	var sumOfTails = 0;
	var winningPoint = 5; 
	while (sumOfHeads < winningPoint && sumOfTails < winningPoint){
		var result = coinFlip();
		if (result === 1){
			sumOfHeads++;
		} else {
			sumOfTails++;
		}
	}
	console.log("sumOfHeads = ", sumOfHeads);
	console.log("sumOfTails = ", sumOfTails);	
	console.log("WINNER! WOOHOO!");
}
