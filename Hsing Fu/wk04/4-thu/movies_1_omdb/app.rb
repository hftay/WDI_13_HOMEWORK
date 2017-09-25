
# yet to do: design so that if only one result, skip straight to about page 

require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

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

get '/about' do
	
	title_selected = params[:movie_title]

	@server_response = HTTParty.get("http://omdbapi.com/?t=#{title_selected}&apikey=#{ENV['OMDB_API_KEY']}")
	@details = @server_response.parsed_response
	
	erb (:about)

	# binding.pry
end