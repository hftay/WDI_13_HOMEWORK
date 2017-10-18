require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'
require_relative 'movie_methods'

DOMAIN = 'http://omdbapi.com'
APIKEY = '2f6435d9'

get '/' do
  erb :home
end

post '/search_results' do
  title = params[:title]
  results = HTTParty.get("#{DOMAIN}?s=#{title}&apikey=#{APIKEY}").parsed_response
  @movies = results["Search"]
  erb :search_results
end

get '/movie' do
  imdb_id = params[:imdb_id]

  @movie = get_movie_from_db(imdb_id)

  unless @movie
    movie_info = request_omdb(imdb_id)
    @movie = add_to_db movie_info
  end

  erb :movie
end
