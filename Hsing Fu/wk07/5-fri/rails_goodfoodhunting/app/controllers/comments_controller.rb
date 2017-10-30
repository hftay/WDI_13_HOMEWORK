class CommentsController < ApplicationController

	def create
		comment = Comment.new
		comment.content = params[:content]
		comment.dish_id = params[:dish_id]
		comment.save
		# byebug
		redirect_to "/dishes/#{params[:dish_id]}"
	end

	# def index
	# end

end
