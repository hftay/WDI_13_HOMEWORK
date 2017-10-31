// 2nd attempt using the reduce method

// import fs from 'fs';
var fs = require('fs'); 

// var output = fs.readFileSync('postcode_mini.csv', 'utf8')
var output = fs.readFileSync('postcode.csv', 'utf8')
	.trim()
	.replace(/["]/g,'')
	.split('\n')
	.map(line => line.split(','))
	.reduce( (addresses,line) => {
		addresses.push({
			postcode: line[0],
			suburb: line[1],
			state: line[2],
			dc: line[3],
			type: line[4].trim(),
			lat: line[5],
			lon: line[6]
		})
		return addresses
	}, [] )

	output.splice(0,1); // remove first elem which is the table header

console.log('output', JSON.stringify(output, null, 2))
																			// 2 => 2 spaces for indentation