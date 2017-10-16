class HousesController < ApplicationController



  def index
  	# byebug
  	# redirect_to '/student'
    @houses = House.all
  end

  def show
  	@students = Student.all
    @house = House.find_by(id: params[:id])
    # byebug
  end

end
