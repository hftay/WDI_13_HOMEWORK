// Using node's standard libraries http and fs and built-in JSON support, read in a comma-separated file of key-value pairs, and create an HTTP server which returns the file's contents as JSON.
// For converting objects to json lookup: JSON.stringify()

var fs = require('fs'); 
var http = require('http');

var app = function(request, response){

	fs.readFile('postcode.csv', 'utf-8', function(err, data){

		// data is in string format
		// convert to object using array
		// convert object to json using stringify
		
		// console.log(data);
		data = data.replace(/["]/g,'')
		arr = data.split('\n');
		var jsonObj = [];
		var headers = arr[0].split(',');

		// console.log(arr);
		// console.log(headers);

		for(var i = 1; i < arr.length; i++) {
		  var data = arr[i].split(',');
		  // console.log(data);
		  var obj = {};
		  
		  for(var j = 0; j < data.length; j++) {
		     obj[headers[j].trim()] = data[j].trim();
		  }
		  jsonObj.push(obj);
		}
		console.log(jsonObj);

		var output = JSON.stringify(jsonObj);
		// console.log(output);

		response.write(output); 
		response.end();
	})	

}

var server = http.createServer( app );
server.listen(5555);



