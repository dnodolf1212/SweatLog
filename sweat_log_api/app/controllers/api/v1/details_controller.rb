class Api::V1::DetailsController < ApplicationController

  def create 
    @workout = Workout.find_by_id(params[:workout_id])
    @detail = @workout.details.create(detail_params)
    render json: @detail
  end

  private 

  def detail_params
    params.require(:detail).permit(:workout_id, :sets_poses, :distance, :time, :weight)
  end

end
