class StudentsController < ApplicationController

  def index
    @students = Student.all
    # binding.pry
  end

  def show
    @student = Student.find_by(id: params[:id])
  end

end
