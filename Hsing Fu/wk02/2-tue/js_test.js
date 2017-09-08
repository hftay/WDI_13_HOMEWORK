// Javascript Test

var captain = "Jack";
var str = "";
var phrase = str.concat("Oh ", captain, ", my ", captain, "!");

// JS Conditionals

var souls = 3;
var lifeRafts = 2;

if (souls>lifeRafts){
	console.log("SOS!");
}

// Data Structures - JS Arrays

var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday");
var day = weekend[1];
weekend.shift();

// Data Structures - JS Objects

var brain ={
	energyLevel: 10
};

var energy = brain.energyLevel
brain.dream = "electric sheep";

// JS Functions

var areaRectangle = function(length,width){
	area = length * width;
	return area;
}

var areaOfInterest = areaRectangle(3,4);
//

var fruits = ['banana', 'apple', 'kiwi'];

var addFruit = function(arr) {
  arr.push('mango');
}

addFruit(fruits);
console.log(fruits);
// the global variable is passed through a function;
// an array is not a primitive data type and can be modified in a function.





// var fruits = 'banana';

// var addFruit = function(arr) {
//   arr.concat('mango');
// }

// var result = addFruit(fruits);
// console.log(result);

// //
// var fruits = 'banana';
// var result = fruits.concat('mango');
// console.log(result);

//


