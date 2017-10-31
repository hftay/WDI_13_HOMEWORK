var request = require('request');

var APIKEY = process.env['OPEN_WEATHER_API_KEY'];

var location = 'melbourne,au';
var units = 'metric';

var url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${APIKEY}&units=${units}`;

request(url, function (error, response, body) {
  var temp = JSON.parse(body).list[0].main.temp;
  console.log('location:', location, 'weather:', temp + ' celsius')
});