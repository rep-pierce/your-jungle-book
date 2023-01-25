class AllowPostImageToBeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :posts, :image, true
  end
end
