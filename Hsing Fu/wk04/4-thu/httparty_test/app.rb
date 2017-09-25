require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

results = HTTParty.get('https://logo.designcrowd.com/')

binding.pry