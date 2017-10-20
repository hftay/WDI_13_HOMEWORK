console.log ('ajax');

// display form tag, button etc
// allow user to search for movies using t search
// make an api call to omdb using ajax
// display all search results on the same page without refresh

var APIKEY = '2f6435d9'
// url: "http://omdbapi.com/?s=" + $movieInput + "&apikey=" + ENV['OMDB_API_KEY']

var createDOM = function(){
	// create HTML Dom elements in JS
	// and set attributes using .prop (not.attr)
	var $form = $('<form>').prop({
		action: "/",
		method: "get"
	})
	var $label = $('<label>').prop({
		innerHTML: "movie: "
	})
	var $input = $('<input>').prop({
	})
	var $button = $('<button>').prop({
		class: "search-btn",
		type: "submit",
		textContent: "search",
	});
	// append form contents
	$form.append($label);
	$form.append($input);
	$form.append($button);
	$('body').append($form);	
}

createDOM();

$('.search-btn').on("click", function(event){
	event.preventDefault(); //stop form direct to server
	var $movieInput = $('input').val();

	// var options = {
	// 	url: "http://omdbapi.com/?s=" + $movieInput + "&apikey=" + APIKEY,
	// 	method: 'get',
	// 	data: {}
	// }

	var options = { // alternative neater way to write ajax
		url: "http://omdbapi.com/",
		method: 'get',
		data: { apikey: '2f6435d9', s: $movieInput} // data to pass into url
	}	

	var appendSearchResults = function(response){
		var $searchResults = $('<div>').prop({ class:"search-results" });
		$('body').append($searchResults);
		// var $searchResults = $('.search-results');
		$searchResults.children().remove();
		if(response.Response === "True"){
			var searchResultsArr = response.Search;
			searchResultsArr.forEach(function(movie){
				var $movieTitle = $('<h2>').text(movie.Title);
				$searchResults.append($movieTitle);
				$searchResults.append($('<hr>'));			
			})
		}
	}

	$.ajax(options).done(appendSearchResults);
	$('input').val('');

})

