const express = require('express');
const app = express();
const PORT = 5555

var _ = require('underscore');

var compliments = [
	"If I don't move it, I will lose it",
	"Need help moving to Pluto",
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var randCompliment = _.sample(compliments);

process.argv
debugger
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
var randColor = _.sample(colors);


app.get('/', function(req, res){
	res.send(randCompliment);	
})

app.listen(PORT, function(){
	console.log('app listening on port:', PORT)
});