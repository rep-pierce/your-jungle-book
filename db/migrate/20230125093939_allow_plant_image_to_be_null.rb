class AllowPlantImageToBeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :plants, :image, true
  end
end

