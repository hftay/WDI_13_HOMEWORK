
require 'pry'
require_relative 'animal'
require_relative 'client'

Babadamu = Animal.new('Babadamu')
Babadamu.age 0.5
Babadamu.gender "Unknown"
Babadamu.species "Bear"
Babadamu.add_toy "Wellington Boots"

Leia = Client.new('Leia')
Leia.age 2
Leia.num_child 0
Leia.add_pet "Sophie the Giraffe"
Leia.add_pet "Barney the Dinosaur"

menu_activated = true

animals_of_shelter = [Animal.new("Ninja the Turtle"),Animal.new("Kung Fu the Panda"),Animal.new("Sinbad the Lion")]
clients_of_shelter = [Client.new("Lauren"), Client.new("Olivia"), Client.new("Sydnie")]

animals_of_shelter.push(Babadamu)
clients_of_shelter.push(Leia)

while menu_activated == true do
	puts "Welcome to the Happitails Shelter. Please select one of the following options:"
	puts "Press 1 to display all animals"
	puts "Press 2 to display all clients"
	puts "Press 3 to create an animal"
	puts "Press 4 to create a client"
	puts "Press 5 to adopt an animal"
	puts "Press 6 to put an animal up for adoption"
	user_selection = gets.chomp

	if user_selection.to_i == 1
		puts "These are the animals currently available at Happitails Shelter: "
		animals_of_shelter.each do |animal|
			puts animal.name
		end

	elsif user_selection.to_i == 2
		puts "These are the clients of Happitails Shelter: "		
		clients_of_shelter.each do |client|
			puts client.name
		end

	elsif user_selection.to_i == 3
		puts "Creating an animal..."
		puts "Enter animal name: "
		animal_name = gets.chomp
		animal_name = Animal.new(animal_name)
		puts "Enter animal age: "
		animal_name.age gets.chomp
		puts "Enter animal gender: "
		animal_name.gender gets.chomp
		puts "Enter animal species: "
		animal_name.species gets.chomp
		puts "Enter animal's toys: "
		animal_name.add_toy gets.chomp
		animals_of_shelter.push animal_name

	elsif user_selection.to_i == 4
		puts "Creating client profile..."
		puts "Enter client name: "
		client_name = gets.chomp
		client_name = Client.new(client_name)
		puts "Enter client age: "
		client_name.age gets.chomp
		puts "Enter client number of children: "
		client_name.num_child gets.chomp
		puts "Enter client's pets: "
		client_name.add_pet gets.chomp
		clients_of_shelter.push client_name
	
	elsif user_selection.to_i == 5
		puts "Enter index of client: "
		client_index = gets.chomp

		puts "Enter index of animal to adopt: "
		animal_index = gets.chomp
		
		animal_to_adopt = animals_of_shelter[animal_index.to_i]
		client_adopting_animal = clients_of_shelter[client_index.to_i]
		
		animals_of_shelter.delete animal_to_adopt
		client_adopting_animal.add_pet animal_to_adopt

		puts "#{client_adopting_animal.name} has adopted #{animal_to_adopt.name}!"

	elsif user_selection.to_i == 6
		puts "Enter index of client: "
		client_index = gets.chomp

		puts "Enter index of pet to put up for adoption: "
		pets_list_index = gets.chomp

		client_giving_pet = clients_of_shelter[client_index.to_i]
		pet_given_up = client_giving_pet.pets_list[pets_list_index.to_i]

		client_giving_pet.pets_list.delete pet_given_up
		animals_of_shelter.push pet_given_up

		puts "#{client_giving_pet.name} has put #{pet_given_up} up for adoption."

	else 
		menu_activated = false
		# exit
	end

end


# use object.keys and iterate to access name of pet

binding.pry


