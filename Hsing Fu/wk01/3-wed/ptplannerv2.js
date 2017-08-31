console.log("PT PLANNER VERBOSE");

var origin = "Flagstaff";
var destination = "Glenferrie";
console.log("Origin:", origin ,"Destination:", destination);
var trainNetwork={
	"Alamein": ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
 	"GlenWaverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
	"Sandringham": ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
};
var trainRoute = Object.keys(trainNetwork); // returns ["Alamein", "GlenWaverly", "Sandringham"]

// 0. determine which of route of the train network system passenger will need to use  
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

// to loop through the Object trainNetwork{} to determine which route passenger needs to use
for (i=0; i<trainRoute.length; i++){
	console.log("================START OF LOOP================");

	console.log("Currently looping train route "+ i + " which is " + trainRoute[i]);
	console.log("This route has the following stations:");
	console.log(trainNetwork[trainRoute[i]]);
	var routeToCheck= trainNetwork[trainRoute[i]]; //returns array of one train route

	// 1. check train line of origin
	for (var j=0; j<routeToCheck.length; j++){
		if(origin === routeToCheck[j]){
		console.log("Origin is on this train line: ");
		var originLine = routeToCheck;
		console.log(originLine);
		}
	}

	// 2. check train line of dest
	for (var k=0; k<routeToCheck.length; k++){
		if(destination === routeToCheck[k]){
		console.log("Dest is on this train line: ");
		var destLine = routeToCheck;
		console.log(destLine);
		}
	}

console.log("================END OF LOOP================");
}

// 3. check if train line of origin equals train line of destination
if (originLine === destLine){
	console.log("Origin line is equal to Dest line, no need to change at Richmond");
// 3...work out how many stops there are
	var originIndex = originLine.indexOf(origin); 
	console.log ("originIndex=", originIndex);
	var destIndex = destLine.indexOf(destination); 
	console.log ("destIndex=", destIndex);
	var numStops = Math.abs(destIndex - originIndex);
	console.log (numStops + " stops total");

//	3...print these stops 
	var originSliceStart = originIndex;
	var originSliceEnd = destIndex;
	//so you can go in reverse
	if(originSliceStart>destIndex){
		var originIndex = originLine.length-1 - originIndex;
		var destIndex = originLine.length-1 - destIndex;
		console.log (originLine.reverse());
		var originSliceStart = originIndex;
		var originSliceEnd = destIndex;
	}

	console.log ("Check order of index start < end: ");
	console.log (originSliceStart, originSliceEnd);
	var nameOfStopsOnOriginLine = originLine.slice(originSliceStart, originSliceEnd);
	console.log ("These are the intermediate stops on the origin line: " + nameOfStopsOnOriginLine);

	// to join stops with "----->""
	var nameOfAllStopsWithArrows = nameOfStopsOnOriginLine.join(" -----> ");
	console.log(nameOfAllStopsWithArrows);

//  3... all together now
	console.log("================RECOMMENDED ROUTE================");
	console.log("\n\n" + "origin: " + origin);
	console.log("destination: " + destination + "\n\n");
	console.log(nameOfAllStopsWithArrows + " -----> "+ destination);
	console.log ("\n\n" + numStops + " stops total");
}
// 4. if false: implies passenger needs to switch lines at Richmond to arrive at destination
else if(originLine !== destLine){
	console.log("Origin line is not the same as  Dest line, passenger needs to change at Richmond");
// 	4... work out how many stops from origin to Richmond
	var originIndex = originLine.indexOf(origin); 
	console.log ("originIndex=", originIndex);
	var originRichmondIndex = originLine.indexOf("Richmond"); 
	console.log ("Richmond index on origin line=", originRichmondIndex);
	var numStopsOnOriginLine = Math.abs(originRichmondIndex - originIndex);
	console.log (numStopsOnOriginLine + " stops on origin line");
	
	var destIndex = destLine.indexOf(destination); 
	console.log ("destIndex=", destIndex);
	var destRichmondIndex = destLine.indexOf("Richmond"); 
	console.log ("Richmond index on dest line=", destRichmondIndex);
	var numStopsOnDestLine = Math.abs(destRichmondIndex - destIndex);
	console.log (numStopsOnDestLine + " stops on dest line");

	var numStops = numStopsOnOriginLine + numStopsOnDestLine;
//	4...print these stops 
	var originSliceStart = originIndex;
	var originSliceEnd = originRichmondIndex;
	//so you can go in reverse
	if(originSliceStart>originSliceEnd){
		var originIndex = originLine.length-1 - originIndex;
		var originRichmondIndex = originLine.length-1 - originRichmondIndex;
		console.log (originLine.reverse());
		var originSliceStart = originIndex;
		var originSliceEnd = originRichmondIndex;
	}

	console.log ("Check order of index start < end: ");
	console.log (originSliceStart, originSliceEnd);
	var nameOfStopsOnOriginLine = originLine.slice(originSliceStart, originSliceEnd);
	console.log ("These are the intermediate stops on the origin line: " + nameOfStopsOnOriginLine);
	
	var destSliceStart = destRichmondIndex;
	var destSliceEnd = destIndex;
	//so you can go in reverse
	if(destSliceStart>destSliceEnd){
		var destIndex = destLine.length-1 - destIndex;
		var destRichmondIndex = destLine.length-1 - destRichmondIndex;
		console.log (destLine.reverse());
		var destSliceStart = destRichmondIndex;
		var destSliceEnd = destIndex;
	}

	console.log ("Check order of index start < end: ");
	console.log (destSliceStart, destSliceEnd);
	var nameOfStopsOnDestLine = destLine.slice(destSliceStart, destSliceEnd);
	console.log ("These are the intermediate stops on the dest line: " + nameOfStopsOnDestLine);

//  4... all together now
	console.log("================RECOMMENDED ROUTE================");
	
	console.log(nameOfStopsOnOriginLine);
	console.log(nameOfStopsOnDestLine);
	var nameOfAllStops = nameOfStopsOnOriginLine.concat(nameOfStopsOnDestLine);
	console.log(nameOfAllStops);
	// to join stops with "----->""
	var nameOfAllStopsWithArrows = nameOfAllStops.join(" -----> ");
	console.log(nameOfAllStopsWithArrows);

	console.log("\n\n" + "origin: " + origin);
	console.log("destination: " + destination + "\n\n");
	console.log(nameOfAllStopsWithArrows + " -----> "+ destination);
	console.log("\n\n" + numStops + " stops total");
}

