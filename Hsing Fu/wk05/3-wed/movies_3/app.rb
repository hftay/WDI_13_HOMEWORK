
# yet to do: design so that if only one result, skip straight to about page 
# imdb ID = for tracking unique

# The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.
# The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.

require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'pg'
require_relative 'db_config'
require_relative 'models/movie'

#########################################################
def run_db (sql)
	conn = PG.connect(dbname: 'omdb_moviedatabase')
	records = conn.exec(sql)
	conn.close
	records
end
#########################################################

get '/' do
	erb (:index)	
end

get '/search_results' do
	@movie_name_request = params["movie_name_request"]
	
	@server_response = HTTParty.get("http://omdbapi.com/?s=#{@movie_name_request}&apikey=#{ENV['OMDB_API_KEY']}")
	@search_results = @server_response.parsed_response["Search"]

	erb (:search_results)

	# binding.pry
end

#########################################################
get '/about' do
	@title_selected = params[:movie_title]
	@movies = Movie.all
	@this_movie = @movies.find_by title: params[:movie_title]
	binding.pry

	#check if title selected exist in database, if true, retrieve, else run HTTParty and create new Movie and save to database
	if @this_movie != nil
	@movie = Movie.new		
	@movie.title = @this_movie['title']
	@movie.plot = @this_movie['plot']
	@movie.year = @this_movie['year']
	@movie.poster = @this_movie['poster']
	@movie.rating = @this_movie['rating']
	# dont save to database	
	# REFACTOR, just create another variable to capture results so you dont need lines 49 to 54

	else 
	@server_response = HTTParty.get("http://omdbapi.com/?t=#{@title_selected}&apikey=#{ENV['OMDB_API_KEY']}")
	@details = @server_response.parsed_response

	@movie = Movie.new
	@movie.title = @details['Title']
	@movie.plot = @details['Plot']
	@movie.year = @details['Year']
	@movie.poster = @details['Poster']
	@movie.rating = @details['imdbRating']
	@movie.save 
	# @movie is now stored in omdb_moviedatabase, you can see it by refreshing movies in psql

	#alternative to writing code:
	@movie = Movie.new (
		title: @details['Title'],
		plot: @details['Plot']
		)
	end
	
	erb (:about)

end