class Dish < ApplicationRecord
	has_many :comments
	has_one :venue
end
