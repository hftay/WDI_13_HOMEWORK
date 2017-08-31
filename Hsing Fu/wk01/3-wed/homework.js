console.log("week 1 day 3 homework");

// The Recipe Card
var igdArray = ['cinnamon', 'cumin', 'cocoa'];

var recipe = {
	title: "Mole",
	servings: 2,
	ingredients: igdArray
}

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
console.log(igdArray[0]);
console.log(igdArray[1]);
console.log(igdArray[2]);

console.log(igdArray.join('\n')); //joining each element with a new line

console.log(igdArray);


for (var index = 0; index < igdArray.length; index ++){
	//debugger
	console.log(index);
}



// The Reading List
var book1 ={
	title: "Moonwalking with Einstein",
	author: "Joshua Foer",
	alreadyRead: true
}

var book2 ={
	title: "Near Zero Marginal Cost",
	author: "Jeremy Rifkins",
	alreadyRead: true
}

var book3 ={
	title: "Life 3.0 Being Human in the Age of AI",
	author: "Max Tegmark",
	alreadyRead: false
}

var bookArray = [book1,book2,book3];

for (var i=0; i<bookArray.length; i++){
	if(bookArray[i].alreadyRead===true){
		console.log("You already read " + bookArray[i].title + " by " + bookArray[i].author);
	} else 
		console.log("You still need to read " + bookArray[i].title + " by " + bookArray[i].author);
}

// Alternative Book List

var books =[
{
	title: "Why's poignant guide to ruby",
	author: "Why",
	alreadyRead: true
},{
	title: "Javascript & JQuery",
	author: "some guy called John D",
	alreadyRead: false
}
]

for (var i = 0; i<books.length; i++){
	var descrip = books[i].title + " by " + books[i].author	
	if(books[i].alreadyRead === true){
		console.log("You already read " + descrip);
	} else {
		console.log("You still need to read " + descrip);
	}
}


// The Movie Database

starsArray1=[" Brad Pitt", " Christoph Waltz", " Melanie Laurent"];
starsArray2=[" Ashton Kutcher"];

var movie1 ={
	title: "Inglorious Basterds",
	duration: 153,
	stars: starsArray1
}

var movie2 ={
	title: "Jobs",
	duration: 128,
	stars: starsArray2
}

//var x = movieInfo(movie){
//}

function movieInfo(movie){
	console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars:" + movie.stars + ".");
}

movieInfo(movie1)
movieInfo(movie2)

//console.log(movieInfo(movie1));