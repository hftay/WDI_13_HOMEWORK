console.log("PT PLANNER");

var origin = "Melbourne Central";
var destination = "Richmond";
console.log("Origin:", origin ,"Destination:", destination);

// loop through object to return key value pair then... get array
var trainNetwork={
	"Alamein": ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
 	"GlenWaverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	"Sandringham": ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
};
// var Alamein= ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
// var GlenWaverly= ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
// var Sandringham= ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

console.log ("1-start");
console.log(trainNetwork.Alamein);
console.log(trainNetwork.GlenWaverly);
console.log(trainNetwork.Sandringham);
console.log ("1-end");

console.log ("2-start");
console.log ( Object.keys(trainNetwork) );
console.log ("2-end");

// to loops through the Object trainNetwork{}
var trainRoute = Object.keys(trainNetwork); // returns ["Alamein", "GlenWaverly", "Sandringham"]
for (i=0; i<trainRoute.length; i++){
	console.log("Looping current train route "+ i + " which is " + trainRoute[i]);
}


// 1. check train line of origin
for (var j=0; j<trainNetwork.GlenWaverly.length; j++){
	if("Melbourne Central" === trainNetwork.GlenWaverly[j]){
	console.log("OK");
	console.log("Origin is on this train line: ", trainNetwork.GlenWaverly);
	var originLine = trainNetwork.GlenWaverly;
	}
}

// 2. check train line of dest
for (var k=0; k<trainNetwork.GlenWaverly.length; k++){
	if("Richmond" === trainNetwork.GlenWaverly[k]){
	console.log("OK");
	console.log("Dest is on this train line: ", trainNetwork.GlenWaverly);
	var destLine = trainNetwork.GlenWaverly;
	}
}

// 3. check if train line of origin equals train line of destination
if (originLine === destLine){
	console.log("origin line is equal to dest line, no need to change at Richmond");
// 3...work out how many stops there are
	var originIndex = trainNetwork.GlenWaverly.indexOf("Melbourne Central"); 
	console.log ("originIndex=", originIndex);
	var destIndex = trainNetwork.GlenWaverly.indexOf("Richmond"); 
	console.log ("destIndex=", destIndex);
	var numStops = destIndex - originIndex;
	console.log (numStops + " stops total");
//	3...print these stops 
	var nameOfStops = trainNetwork.GlenWaverly.slice(originIndex+1, destIndex);
	console.log ("These are the intermediate stops: " + nameOfStops);
//  3... all together
	console.log("origin: " + origin);
	console.log("destination: " + destination);

	console.log(origin + nameOfStops + destination);

	console.log (numStops + " stops total");
}


// 1. given the origin, determine which train line the passenger needs to board from
// 2. given the destination, determine which train line the passenger needs to alight
//	3. determine if the origin and the destination are on the same line
//		3. if true: passenger can use current train line, 
//			3. work out how many stops there are
//			3. print these stops 
//		4. if false: implies passenger needs to switch lines at Richmond to arrive at destination
// 			work out how many stops from origin to Richmond
//			work out which line destination is on
//			work out how many stops from Richmond to destination
//			print these stops 

