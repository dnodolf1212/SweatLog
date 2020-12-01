class Api::V1::WorkoutsController < ApplicationController 
  
  def index
    @workouts = Workout.all 
    render json: @workouts, except: [:created_at, :updated_at]
  end

  def create 
    @workout = Workout.new()
  end

  private 

  def workout_params
    
  end

end 