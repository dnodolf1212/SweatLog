class AddReferencesToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :user, :string
    add_column :workouts, :references, :string
  end
end
