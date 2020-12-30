class Api::V1::WorkoutsController < ApplicationController 
  
  
  def index
    @workouts = Workout.all 
    render json: @workouts, except: [:created_at, :updated_at], include: [:details]
  end

  def create 
    @workout = Workout.create(workout_params)
    render json: @workout, except: [:updated_at], include: [:details]
  end

  def destroy
    @workout = Workout.find_by_id(params[:id])
    @workout.destroy
  end

  private 

  def workout_params
    params.require(:workout).permit(:name, :rating, details: [:sets_poses, :distance, :time, :weight])
  end

end 