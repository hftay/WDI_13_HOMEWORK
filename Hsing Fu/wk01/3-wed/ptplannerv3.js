console.log("PT PLANNER v3");

var origin = "Glenferrie";
var destination = "Richmond";

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

// to loop through the Object trainNetwork{} to determine which route passenger needs to use, will 
for (i=0; i<trainRoute.length; i++){
// loops through each of the three route and assign the route to routeToCheck
	var routeToCheck= trainNetwork[trainRoute[i]]; //routeToCheck returns the array of the stations within that route

	for (var j=0; j<routeToCheck.length; j++){ // 1. check train line of origin
		if(origin === routeToCheck[j]){
		var originLine = routeToCheck;
		}
	}
	for (var k=0; k<routeToCheck.length; k++){ // 2. check train line of dest
		if(destination === routeToCheck[k]){
		var destLine = routeToCheck;
		}
	}
}

// 3. check if train line of origin equals train line of destination
if (originLine === destLine){
	console.log("Origin line is equal to Dest line, no need to change at Richmond");
// 3...work out how many stops there are
	var originIndex = originLine.indexOf(origin); 
	var destIndex = destLine.indexOf(destination); 
	var numStops = Math.abs(destIndex - originIndex);

//	3...print these stops 
	var originSliceStart = originIndex;
	var originSliceEnd = destIndex;
	//so you can go in reverse
	if(originSliceStart>destIndex){
		var originIndex = originLine.length-1 - originIndex;
		var destIndex = originLine.length-1 - destIndex;
		originLine.reverse();
		var originSliceStart = originIndex;
		var originSliceEnd = destIndex;
	}
	console.log ("originIndex= " + originSliceStart + "; destIndex= " + destSliceEnd +"; " + numStops + " stops total");
	var nameOfStopsOnOriginLine = originLine.slice(originSliceStart, originSliceEnd);
	
	// to join stops with "----->""
	var nameOfAllStopsWithArrows = nameOfStopsOnOriginLine.join(" -----> ");
}
// 4. if false: implies passenger needs to switch lines at Richmond to arrive at destination
else if(originLine !== destLine){
	console.log("Origin line is not the same as  Dest line, passenger needs to change at Richmond");
// 	4... work out how many stops from Origin to Richmond
	var originIndex = originLine.indexOf(origin); 
	var originRichmondIndex = originLine.indexOf("Richmond"); 
	var numStopsOnOriginLine = Math.abs(originRichmondIndex - originIndex);
// 	4... work out how many stops from Richmond to Destination
	var destIndex = destLine.indexOf(destination); 
	var destRichmondIndex = destLine.indexOf("Richmond"); 
	var numStopsOnDestLine = Math.abs(destRichmondIndex - destIndex);
//	4... work out how many stops in total 
	var numStops = numStopsOnOriginLine + numStopsOnDestLine;

//	4...print these stops 
	var originSliceStart = originIndex;
	var originSliceEnd = originRichmondIndex;
	//so you can go in reverse
	if(originSliceStart>originSliceEnd){
		var originIndex = originLine.length-1 - originIndex;
		var originRichmondIndex = originLine.length-1 - originRichmondIndex;
		originLine.reverse();
		var originSliceStart = originIndex;
		var originSliceEnd = originRichmondIndex;
	}
	var nameOfStopsOnOriginLine = originLine.slice(originSliceStart, originSliceEnd);
	console.log ("These are the intermediate stops on the origin line: " + nameOfStopsOnOriginLine);
//	4...print these stops 
	var destSliceStart = destRichmondIndex;
	var destSliceEnd = destIndex;
	//so you can go in reverse
	if(destSliceStart>destSliceEnd){
		var destIndex = destLine.length-1 - destIndex;
		var destRichmondIndex = destLine.length-1 - destRichmondIndex;
		destLine.reverse();
		var destSliceStart = destRichmondIndex;
		var destSliceEnd = destIndex;
	}
	var nameOfStopsOnDestLine = destLine.slice(destSliceStart, destSliceEnd);
	console.log ("These are the intermediate stops on the dest line: " + nameOfStopsOnDestLine);
	//concatenate stops on origin line to destination line
	var nameOfAllStops = nameOfStopsOnOriginLine.concat(nameOfStopsOnDestLine);
	// to join stops with "----->""
	var nameOfAllStopsWithArrows = nameOfAllStops.join(" -----> ");
}

//	all together now...
console.log("================RECOMMENDED ROUTE================");
console.log("\n\n" + "origin: " + origin);
console.log("destination: " + destination + "\n\n");
console.log(nameOfAllStopsWithArrows + " -----> "+ destination);
console.log("\n\n" + numStops + " stops total");

