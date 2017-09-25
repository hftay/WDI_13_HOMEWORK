# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

require 'pry'
require 'fileutils'

user_guess = ""
answer = Random.rand(0..3)

# binding.pry

while user_guess.to_i != answer do
	puts "guess a number:"
	user_guess = gets.chomp
end

puts "congrats: the number is: " + answer.to_s

