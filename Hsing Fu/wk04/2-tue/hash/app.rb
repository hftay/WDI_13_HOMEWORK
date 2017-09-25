require 'pry'
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
# users["Erik"][:favorite_numbers]+[7]
# users["Erik"][:favorite_numbers]<<7
users["Erik"][:favorite_numbers].push(7)
# writing << is equivalent to writing .push 

# How would you add yourself to the users hash?
users["HF"] = {}
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
# users["Erik"][:favorite_numbers].sort.first
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |num| num.even?}
# How would you return an array of the favorite numbers common to all users?
jon_nums=users["Jonathan"][:favorite_numbers]
erik_nums=users["Erik"][:favorite_numbers]
anil_nums=users["Anil"][:favorite_numbers]
common_num = jon_nums & erik_nums & anil_nums



# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
fav_nums_arr = jon_nums+erik_nums+anil_nums
fav_nums_arr.sort.uniq
# fav_nums_arr & fav_nums_arr --> also returns uniq

binding.pry
puts "stop prying..."