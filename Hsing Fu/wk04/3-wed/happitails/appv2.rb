
# TODo:
# fix bug in adopt_pet method where default is to display first client has adopted first pet
# if no pets to put up for adoption, skip
# methods for adopting and putting up for adoption are designed exactly the same way
	# and should be made into one single function, flatter, and single purpose
# use object.keys and iterate to access name of pet
# adopt animal could be a method within client

require 'pry'
require_relative 'animalv2'
require_relative 'clientv2'

Badanamu = Animal.new('Badanamu', 0.5, "Unknown", "Bear")
Badanamu.add_toy "Wellington Boots"
Ninja = Animal.new("Ninja", 200, "M", "Turtle")
Peppa = Animal.new("Peppa", 4, "Unknown", "Pig")

Leia = Client.new('Leia', 2, 0)
Leia.add_pet Animal.new("Barney", 0.5, "M", "Dinosaur")
Lauren = Client.new("Lauren", 0.3, 0)
Lauren.add_pet Animal.new("Sophie", 0.5, "F", "Giraffe")
Olivia = Client.new("Olivia", 6, 0)

animals_of_shelter = [Badanamu, Ninja, Peppa]
clients_of_shelter = [Leia, Lauren, Olivia]

menu_activated = true

def create_animal (animals_of_shelter)
	puts "\nCreating animal profile..."
	puts "\nEnter animal name: "
	name = gets.chomp
	puts "\nEnter animal age: "
	age = gets.chomp
	puts "\nEnter animal gender: "
	gender = gets.chomp
	puts "\nEnter animal species: "
	species = gets.chomp
	animal_obj = Animal.new(name, age, gender, species)
	puts "\nEnter animal's toys: "
	animal_obj.add_toy gets.chomp
	animals_of_shelter.push animal_obj
end

def create_client (clients_of_shelter) 
	puts "\nCreating client profile..."
	puts "\nEnter client name: "
	name = gets.chomp
	puts "\nEnter client age: "
	age = gets.chomp
	puts "\nEnter client number of children: "
	num_child = gets.chomp
	puts "\nEnter client's pets: "
	client_obj = Client.new(name, age, num_child)
	client_obj.add_pet gets.chomp
	clients_of_shelter.push client_obj
end

def display_menu_options
	puts "\nWelcome to the Happitails Shelter. Please select one of the following options:"
	puts "Press 1 to display all animals"
	puts "Press 2 to display all clients"
	puts "Press 3 to create an animal"
	puts "Press 4 to create a client"
	puts "Press 5 to adopt an animal"
	puts "Press 6 to put an animal up for adoption"
end

def display_array_elem (array)
	array.each do |elem|
		puts elem.name
	end
end

def obj_search (array_to_search)
	str_input = gets.chomp
	obj = array_to_search.find do |elem|
		elem.name == str_input
	end
end #=> returns hash

def adopt_animal(client, animal, animal_list)
	animal_list.delete animal
	client.add_pet animal
end

def put_animal_for_adoption(pet, client_pet_list, animal_list)
	client_pet_list.delete pet
	animal_list.push pet
end

while menu_activated == true do
	display_menu_options
	user_selection = gets.chomp

	if user_selection.to_i == 1
		puts "\nThese are the animals currently available at Happitails Shelter: "
		display_array_elem (animals_of_shelter)

	elsif user_selection.to_i == 2
		puts "\nThese are the clients of Happitails Shelter: "		
		display_array_elem (clients_of_shelter)

	elsif user_selection.to_i == 3
		create_animal (animals_of_shelter)

	elsif user_selection.to_i == 4
		create_client (clients_of_shelter) 
	
	elsif user_selection.to_i == 5 #adopt animal
		puts "\nThese are the clients of Happitails Shelter: "		
		display_array_elem (clients_of_shelter)
		puts "\nEnter name of client: "
		client_adopting_animal = obj_search (clients_of_shelter)
		if animals_of_shelter.count != 0
			puts "\nThese are the animals currently available at Happitails Shelter: "
			display_array_elem (animals_of_shelter)
			puts "\nEnter name of animal to adopt: "
			animal_to_adopt = obj_search (animals_of_shelter)
			adopt_animal(client_adopting_animal, animal_to_adopt, animals_of_shelter)
			puts "\n#{client_adopting_animal.name} has adopted #{animal_to_adopt.name}!"
		else
			puts "\nThere are no available pets at the shelter."
		end
		
	elsif user_selection.to_i == 6 #put animal for adoption
		puts "\nThese are the clients of Happitails Shelter: "		
		display_array_elem (clients_of_shelter)
		puts "\nEnter name of client: "
		client_giving_pet = obj_search (clients_of_shelter)
		if client_giving_pet.pets_list.count != 0
			puts "\n#{client_giving_pet.name} has the follow pets: "
			display_array_elem (client_giving_pet.pets_list)
			puts "\nEnter name of pet to put up for adoption: "
			pet_given_up = obj_search (client_giving_pet.pets_list)
			put_animal_for_adoption(pet_given_up, client_giving_pet.pets_list, animals_of_shelter)
			puts "\n#{client_giving_pet.name} has put #{pet_given_up.name} up for adoption."
		else 
			puts "\n#{client_giving_pet.name} has no pets."
		end

	else 
		menu_activated = false
	end

end

# binding.pry


