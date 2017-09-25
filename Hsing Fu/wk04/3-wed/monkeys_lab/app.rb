require_relative 'monkey'
require 'pry'

Pacquiao = Monkey.new ("Pacquiao")
Pacquiao.eat 'balut'
Pacquiao.eat 'ramen'
Pacquiao.species 'Himalayan Baboon'
Pacquiao.introduce

Mayweather = Monkey.new ("Mayweather")
Mayweather.eat 'money'
Mayweather.species 'Space Monkey'
Mayweather.introduce

Macgregor = Monkey.new ("Macgregor")
Macgregor.eat 'sushi'
Macgregor.species 'Orangutan'
Macgregor.introduce

Monkeys = [Pacquiao,Mayweather,Macgregor]

binding.pry