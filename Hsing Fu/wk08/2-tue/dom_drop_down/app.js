
console.log ('cities');

cityNames = ["Austin", "Los Angeles", "New York City", "San Francisco", "Sydney"];
cityClasses = ["austin", "la", "nyc", "sf", "sydney"];

var $cityType = $('#city-type');

// create drop down options
cityNames.forEach(function(city){
	var $option = $('<option>').text(city);
	$cityType.append($option);
});


$cityType.on('change', function(event){
	$body = $(event.target).closest("body");
	$body.removeClass();

	// captures the option selected, feature of <select> element
	var $selectedOption = $("#city-type option:selected");
	console.log($selectedOption.text());
	// find the class to add to change the background
	var cityName = $selectedOption.text();
	var index = cityNames.indexOf(cityName);
	var cityBackground = cityClasses[index];

	$body.addClass(cityBackground);

});



