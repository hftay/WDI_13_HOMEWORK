// ref: http://emergencycompliment.com/

const express = require('express');
const app = express();
const PORT = 5555;

var _ = require('underscore');
// var cheerio = require('cheerio'),
//     $ = cheerio.load('./views/index.ejs');

var personalizeName = require('./personalize_name');

var sixWordStories = [
	"For sale: baby shoes, never worn",
	"Now everything is back to normal.",
	"Sharp new yellow pencil. Limitless potential.",
	"Lost my wallet, found my desires.",
	"“Joining the President is his husband…”",
	"Born a twin; graduated only child.",
	"“Wrong number,” says a familiar voice.",
	"Torched the haystack. Found the needle.",
	"Wind blows. Sails fill. Journey begins.",
	"Blind man can see past disability.",
	"Talent drowning in files still dreams."
	]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

// setting up views and public folders
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

				//wildcard, match any url request
app.get(/./, function(req, res){
	debugger // IS THERE A WAY TO GET INTO THIS?
	
	var story = _.sample(sixWordStories);
	var randColor = _.sample(colors);
	var name = personalizeName( req.url );
	
	var data = {name: name, story: story, randColor: randColor}	
	res.render('index', data);
})

app.listen(PORT, function(){
	console.log('app listening on port:', PORT)
});