# write a program loc.rb to display the number of lines in a file

puts "Enter filename: "

filename = gets.chomp
line_count = `wc -l "{filename}" `.strip.split(' ')[0]
# OR
# line_count = `wc -l "{filename}" `.to_i
puts line_count

# `...` allows terminal commands
# wc = word count
# -l = line
# strip = strips out whitespace?
# split(' ')[0] = takes the first argument




# alternative method:

file_name = gets.chomp
count = IO.readlines(file_name).size
puts count

# IO.readlines = gives you back the data in array format