class AddWeightToDetails < ActiveRecord::Migration[6.0]
  def change
    add_column :details, :weight, :integer
  end
end
