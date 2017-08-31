console.log("FUNCTIONS");

//23 celsius
//var c =23
//var f = (c * (9/5) ) + 32; 

var magicNumber =32;
var magic2 = magicNumber+2;

									// parameter
var celsiusToFahrenheit = function (celsius){ //this function can see all the global vars, but NOT the doSomething vars ie secret
	var fahrenheit =  celsius * (9/5) +magicNumber;

	// celsius = 12;
	// celsius.push[10];
	// console.log(fahrenheit); //only displays result to console, does not display to web app or phone app

	var doSomething = function (){ //this function can see all the global vars as well as the celsiustofah vars
		var secret;   
	}

	return fahrenheit ;
}


				// argument
//console.log (celsiusToFahrenheit(23));

var todaysTemp = 23;
var tempArr = [23, 34,12];

var f = celsiusToFahrenheit (todaysTemp);
//console.log (celsiusToFahrenheit(todaysTemp));



console.log ("==============The Age Calculator==============") ;

var birthYear = [1989, 1600, 0];
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var calculateAge = function(birthYear, currentYear){
	var ageArray = [];

	var currentAge1 = currentYear-1- birthYear; // change var name to age before birthday
	var currentAge2 = currentYear - birthYear; // change var name to age after birthday

	ageArray.push(currentAge1);
	ageArray.push(currentAge2);

	return ageArray; //to return two values, use an array instead
}

for (i=0; i<3;i++){
	var possibleAges = calculateAge(birthYear[i], currentYear);
	console.log ("You are either " + possibleAges[0] + " or " + possibleAges[1]);
}

console.log ("==============The Lifetime Supply Calculator==============") ;

var currentAge = [28, 50, 150];
var maxAge = 200; 
var amountPerDay = [3, 4.3, 5.8];

var calculateSupply = function (currentAge, amountPerDay){
	
	var yearsLeft = maxAge - currentAge;
	var supplyRequired= Math.round(yearsLeft/(amountPerDay));

	return supplyRequired;
}

for (i=0; i<3;i++){
	var  calc = calculateSupply(currentAge[i],amountPerDay[i])
	console.log("You will need " + calc + " supply to last you until the ripe old age of " + maxAge);
}


console.log ("==============The Geometrizer==============") ;

var radius = 5;

var calcCircumference = function (radius){
	var circumference = Math.PI * (2*radius);
	console.log("The circumference is ", circumference);
	return circumference;
}

var calcArea = function (radius){
	var area= Math.PI * Math.pow(radius,2);
	console.log("The area is ", area);
	return area;
}

calcCircumference(radius)
calcArea(radius)


//EXERCISE 2
// 1. Write a function "lengths" that accepts a single parameter as an argument, namely 
// an array of strings. The function should return an array of numbers where each 
// number is the length of the corresponding string.

console.log ("==============Lengthsssss==============") ;

var lengths = function(stringArr){
	var lengthOfElems = [];
	// for(i=0; i<StringArr.length;i++){
	// 	lengthOfElems.push(StringArr[i].length);
	// } 

	// // method 1
	var fn = function(elem){
		lengthOfElems.push( elem.length);
	}
	stringArr.forEach(fn);

	// // method 2
	// stringArr.forEach (function(elem){
	// lengthOfElems.push(elem.length);
	// })

	return lengthOfElems;
}

console.log ( lengths(['how','are','we'])  ); // [3,3,2]


// writing your own forEach loop
// myForEach([], fn)
var numbers = [2,5,11];

var doubleAndLog = function(num){
	console.log(num * 2); 
}
var myForEach = function(arr,fn){
	//console.log(fn);
	for (i=0;i<arr.length;i++){
	fn(arr[i]);
	}
}

myForEach(numbers,doubleAndLog); //note: lack of parentheses, NOT calling function, where you would have the syntax doubleAndLog()

// 2. Write a Javascript function called transmogrifier 
// This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result 
// // The transmogrified result of three numbers is the product of the first two numbers, 
// raised to the power of the third number.

console.log ("==============Transmogrifier==============") ;

var num1 = 2;
var num2 = 4;
var num3 = 2;

var transmogrifier=function(num1, num2, num3){
	var output = Math.pow(num1*num2,num3);
	return output;
}

console.log (transmogrifier(num1,num2,num3) );


// 3. Write a function wordReverse that accepts a single argument, a string. The 
// method should return a string with the order of the words reversed. Don't worry 
// about punctuation.
// 'you are awesome' ===> 'awesome are you'

console.log ("==============wordReverse==============") ;

var string = "yes no maybe definitely" ;

var wordReverse = function(str){
	var strArr = [];
	var strSplit = str.split(" ");

	var reversedStrArr =  strSplit.reverse();
	var reversedStr =reversedStrArr.toString();
	return reversedStr
} 
console.log (wordReverse(string) );

