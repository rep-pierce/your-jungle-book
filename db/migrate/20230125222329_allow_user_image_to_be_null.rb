class AllowUserImageToBeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :image, true
  end
end
