require 'yahoofinance'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
	erb (:index)
end

get '/data' do
	@stock_ticker = params[:stock_ticker]
	@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_ticker)
	# binding.pry
	erb (:stock_data)
end