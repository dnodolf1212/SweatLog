class AddRatingToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :rating, :integer
  end
end
