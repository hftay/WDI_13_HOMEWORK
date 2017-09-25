
class Client

# puts "clieeeeeent is up"

	def initialize(name, age, num_child)
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

	def add_pet (pet)
		@pets_list.push pet 
	end

	def remove_pet (pet)
		@pets_list.delete pet
	end

end