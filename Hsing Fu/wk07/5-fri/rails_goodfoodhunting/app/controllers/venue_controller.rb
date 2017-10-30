class VenueController < ApplicationController

	def update
		@dish = Dish.find_by(id: params[:id])
		# byebug
		@venue = @dish.venue
		@venue.name = params[:venue_name]
		@venue.address = params[:venue_address]
		@venue.save

		redirect_to "/dishes/#{@dish.id}"		
	end

	# def index
	# end

end