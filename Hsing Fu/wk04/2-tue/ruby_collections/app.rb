
require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.
planeteers[1]

# Add "Heart" to the end of planeteers.
# planeteers.push("Heart")
planeteers << ("Heart")

# Remove "Captain Planet" from the array (without using a method).
planeteers - ["Captain Planet"]
# note this deletes all elements called "Captain Planet"
# planeteers.delete_at(2)

# Combine planeteers with 
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
# and save the result in a variable called heroes.
# heroes = planeteers.concat(rangers)
heroes = planeteers+rangers

# Alphabetize the contents of heroes using a method.
heroes.sort
# heroesArr = heroes.map do |hero| 
# 	heroes = heroes.downcase
# end


# Randomize the contents of heroes using a method.
heroes.shuffle

# Select a random element from heroes using a method.
# heroes[Random.rand(heroes.size)]
heroes.sample

# Select all elements in heroes that begin with "B" using a method.

# beroes = []
# heroes.each {|elem|
# 	if elem.start_with?("B")
# 		beroes.push(elem)
# 	end
# }

# beroes = heroes.select{ |elem| elem.start_with?("B") }
# cannot handle lowercase elegantly

heroes.select{|hero| hero[0] =~ /b/i}
# =~ calls a function called matches to match regex
#/i makes it case-insensitive 

# Initialize a hash called ninja_turtle with the properties name, 
# weapon and radical. They should have values of 
# "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
	name: "Michelangelo",
	weapon: "Nunchuks",
	radical: true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value 
ninja_turtle[:age] = 1

# Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete(:radical)

# Add a key pizza_toppings to ninja_turtle. 
# Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

# Access the first element of pizza_toppings.
ninja_turtle[:pizza_toppings].first

# Produce an array containing all of ninja_turtle's keys using a method.
turtle_keys = ninja_turtle.keys

# Print out each key-value pair in the following format - 
# "KEY's is equal to VALUE" -- using a method.

ninja_turtle.each do |key,value|
	# puts "#{key}" + " is equal to " + "#{value}"
	puts "#{key} is equal to #{value}"

end

binding.pry
puts "stop prying..."






