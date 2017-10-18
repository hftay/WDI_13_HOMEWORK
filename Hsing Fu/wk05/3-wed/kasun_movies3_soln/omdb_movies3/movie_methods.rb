def request_omdb imdb_id
  HTTParty.get("#{DOMAIN}?i=#{imdb_id}&apikey=#{APIKEY}").parsed_response
end

def get_movie_from_db imdb_id
  Movie.find_by(imdb_id: imdb_id)
end

def add_to_db movie
  Movie.create(
    title: movie['Title'],
    imdb_id: movie['imdbID'],
    poster: movie['Poster']
  )
end
