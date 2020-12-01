class Api::V1::WorkoutsController < ApplicationController 
  
  
  def index
    @workouts = Workout.all 
    render json: @workouts, except: [:created_at, :updated_at], include: [:details]
  end

  def create 
    @workout = Workout.create(workout_params)
  end

  private 

  def workout_params
    params.require(:workout).permit(:name, :rating)
  end

end 