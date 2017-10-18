require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'movies_db'
)

# module ActiveRecord
#   class Base
#
#   end
# end
