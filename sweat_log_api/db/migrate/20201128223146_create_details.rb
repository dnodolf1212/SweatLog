class CreateDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :details do |t|
      t.integer :workout_id
      t.integer :sets_poses
      t.string :distance
      t.string :time

      t.timestamps
    end
  end
end
