
class Animal

# puts "animales is up"

	# def initialize(props)
	# 	@name = [props:name]
	# end

	def initialize(name, age, gender, species)
		@name = name
		@age
		@gender
		@species
		@toy_list = []
	end

	def name
		@name
	end

	def add_toy (toy)
		@toy_list.push toy 
	end

end

