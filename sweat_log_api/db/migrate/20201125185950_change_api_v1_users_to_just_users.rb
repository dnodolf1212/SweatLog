class ChangeApiV1UsersToJustUsers < ActiveRecord::Migration[6.0]
  def change
    rename_table :api_v1_users, :users
  end
end
