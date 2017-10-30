class DishesController < ApplicationController

	def index
		@dishes = Dish.all
	end

	def new
	end

	def create
		dish = Dish.new
		dish.name = params[:name]
		dish.image_url = params[:image_url] 
		dish.save
		@venue = Venue.new
		@venue.name = params[:venue_name]
		@venue.address = params[:venue_address] 
		@venue.dish_id = dish.id 		
		@venue.save
		redirect_to '/dishes'
	end

	def show
		@dish = Dish.find_by(id: params[:id])
		@comments = @dish.comments
		@venue = @dish.venue
	end

	def edit
		@dish = Dish.find_by(id: params[:id])
		@venue = @dish.venue
	end

	def update
		@dish = Dish.find_by(id: params[:id])
		@dish.name = params[:name]
		@dish.image_url = params[:image_url] 
		@dish.save
		redirect_to "/dishes/#{@dish.id}"		
	end

	def destroy
		@dish = Dish.find_by(id: params[:id])
		@dish.destroy	
		redirect_to '/dishes'
	end

end
