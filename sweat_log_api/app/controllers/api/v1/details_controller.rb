class Api::V1::DetailsController < ApplicationController

  def create 
    @detail = Detail.create(detail_params)
    render json: @detail
  end

  private 

  def detail_params
    params.require(:detail).permit(:workout_id, :sets_poses, :time, :distance, :weight)
  end

end
