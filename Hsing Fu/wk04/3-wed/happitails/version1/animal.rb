
class Animal

# puts "animales is up"

	def initialize(name)
		@name = name
		@age
		@gender
		@species
		@toy_list = []
	end

	def name
		@name
	end

	def age (age)
		@age = age
	end

	def gender (gender)
		@gender = gender
	end

	def species (species)
		@species = species
	end

	def add_toy (toy)
		@toy_list.push toy 
	end

end

