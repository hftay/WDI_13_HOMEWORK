// NOT WORKING DUE TO ASYNC NATURE OF JS... SEE INDEX2.JS

var express = require('express'); 
var app = express(); //express is basically a serverMaker
// var app = require('express')(); 


const PORT = 8888; // will throw an error if you try to change const

app.set('views', './views');
app.set('view engine', 'ejs');

												//by position
app.get('/', function(request, response){

	response.render('index');
	// response.send('hello world');
	// response.write('hello world');
	// response.end();
});

app.get('/details', function(request, response){
	
	var apiRequest = require('request');
	var APIKEY = process.env.OMDB_API_KEY;
	var title = request.query.title;

	var url = `http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}`

	apiRequest(url, function (error, response, body) {
		var title = JSON.parse(body).Title;
		var year = JSON.parse(body).Year;
		var imdbRating = JSON.parse(body).imdbRating;
		var poster_url = JSON.parse(body).Poster;
		
		var output = {title: title, poster_url: poster_url};
		console.log("im inside", output);
		// return output;
		response.send(body)
	});

	// debugger
	// console.log ("hello", body);
	// response.render('details' )

	response.render('details', {title: request.query.title} )
});

app.listen(PORT);

