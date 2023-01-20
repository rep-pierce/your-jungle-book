class AddWateredAtToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :watered_at, :datetime
  end
end
