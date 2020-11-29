class Api::V1::WorkoutsController < ApplicationController 
  
  def index
    @workouts = Workout.all 
    render json: @workouts, except: [:created_at, :updated_at]
  end

end 