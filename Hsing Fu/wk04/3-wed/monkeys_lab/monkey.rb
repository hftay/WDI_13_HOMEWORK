# Create a Monkey class in monkey.rb, which has the following attributes:

# name - a string, which should be determined by some input
# species - a string, which should be determined by some input
# foods_eaten - an array, which should be initialized as an empty array
# And the following methods:

# eat(food) - adds a food (a string) to the list of foods eaten
# introduce - introduces self, with name, species, and what it's eaten
# Create another file app.rb to use test out the Monkey class
# you should be able to call all the following methods

require 'pry'

class Monkey
	
	def initialize(name)
		@name = name
		@species = ""
		@foods_eaten = []
	end

	def species (species)
		@species = species
	end

	def eat(food)
		@foods_eaten.push food
	end

	def introduce
		puts "Hola, my name is #{@name}, a #{@species}. I've eaten #{@foods_eaten}"
	end

end

# binding.pry

#require_relative 'monkey'