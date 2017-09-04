console.log("PT PLANNER v4");

var origin = "Tooronga";
var destination = "Glenferrie";

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

var recommendedRouteToTake = function (origin, destination){
	var originLine = checkTrainRoute (origin);
	var destLine = checkTrainRoute (destination);
	var originIndex = calcIndexOfStop(origin, originLine);
	var originSwitchOverIndex = calcIndexOfStop("Richmond", originLine);
	var destIndex = calcIndexOfStop(destination, destLine);
	var destSwitchOverIndex = calcIndexOfStop("Richmond", destLine);
	if (originLine === destLine){
		var stopsOnOriginLine = printStopsInOrder (originIndex, destIndex, originLine);
		var nameOfAllStops = stopsOnOriginLine.concat(destination);
	} else {
		var stopsOnOriginLine = printStopsInOrder (originIndex, originSwitchOverIndex, originLine);
		var stopsOnDestLine = printStopsInOrder (destSwitchOverIndex, destIndex, destLine);
		var nameOfAllStops = stopsOnOriginLine.concat(stopsOnDestLine, destination);
	}
	numStops = nameOfAllStops.length-1;
	displayRouteToPassenger(origin, destination, nameOfAllStops, numStops);
	return;
}

var checkTrainRoute = function (nameOfStop){
	for (i=0; i<trainRoute.length; i++){// loops through each of the three route and assign the route to routeToCheck
		var routeToCheck= trainNetwork[trainRoute[i]]; //returns the array of the stations within that route
		for (var j=0; j<routeToCheck.length; j++){
			if(nameOfStop === routeToCheck[j]){
			var trainLine = routeToCheck;
			return trainLine;
			}
		}
	}
}

var calcIndexOfStop = function(stopName, lineName){
	var stopIndex = lineName.indexOf(stopName); 
	return stopIndex;
}


var printStopsInOrder = function(originStop,destStop,lineName){
	if(originStop>destStop){
		var originStop = lineName.length - 1 - originStop;
		var destStop = lineName.length - 1 - destStop;
		lineName.reverse();
	}
	var nameOfStopsOnThisLine = lineName.slice(originStop, destStop);
	return nameOfStopsOnThisLine;
}

var displayRouteToPassenger = function (origin, destination, nameOfAllStops, numStops){
	var nameOfAllStopsWithArrows = nameOfAllStops.join(" -----> ");
	console.log("================RECOMMENDED ROUTE================");
	console.log("origin: " + origin);
	console.log("destination: " + destination + "\n\n");
	console.log(nameOfAllStopsWithArrows);
	console.log("\n\n" + numStops + " stops total");
}

recommendedRouteToTake(origin,destination);
