// grabbing user's name in the browser
var username = prompt ("Input name");
console.log ("Your name is " + username); 

// the vegan test
var menuchoice = prompt ("On the menu tonight: steak, fruit salad, tofurkey, pork chops. What would you like?");
if (menuchoice === "fruit salad" || menuchoice === "tofurkey"){
	console.log("This cuisine is vegan friendly.");
} else if (menuchoice === "steak" || menuchoice === "pork chops") {
	console.log("Vegans beware!");
} else {
	console.log("Your selection is not on the menu. Note that selection is case sensitive.");
}

// the odd/even reporter
for (var i=0; i<=20; i++){
	if(i%2===0){
		console.log(i + " is even");
	} else {
		console.log (i);
	}
}

// the multiplication table
for (var m=1; m<=10; m++){
	for (var i=0; i<=10; i++){
	var j = i * m
	console.log(i + " * " + m + " = " + j);
	}
}

// your top choices
var language = ["javascript", "ruby", "spanish"];
for (var counter=1; counter <= language.length; counter++){
console.log("My #"+ counter + " language is " + language[counter-1]);
}

// money tree
var numRows = 5; // cannot be greater than 10, console out of space
var length = Math.pow(numRows,2);

for (var row=0; row<numRows; row++){
	var numDollars = row*2 + 1;
	var numBlanks = (length - numDollars)/2;
	console.log( " ".repeat(numBlanks) + "$".repeat(numDollars) + " ".repeat(numBlanks));
}

