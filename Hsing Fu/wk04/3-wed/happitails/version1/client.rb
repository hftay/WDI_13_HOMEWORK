
class Client

# puts "clieeeeeent is up"

	def initialize(name)
		@name = name
		@age
		@num_child
		@pets_list = []
	end

	def name
		@name
	end

	def pets_list
		@pets_list
	end

	def age (age)
		@age = age
	end

	def num_child (num_child)
		@num_child = num_child
	end

	def add_pet (pet)
		@pets_list.push pet 
	end

end