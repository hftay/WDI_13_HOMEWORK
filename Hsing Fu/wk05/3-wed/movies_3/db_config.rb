require 'active_record'

options = {
	adapter: 'postgresql',
	database: 'omdb_moviedatabase',
}

ActiveRecord::Base.establish_connection(options)