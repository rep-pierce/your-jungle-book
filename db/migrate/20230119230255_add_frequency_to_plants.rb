class AddFrequencyToPlants < ActiveRecord::Migration[7.0]
  def change
    add_column :plants, :frequency, :integer
  end
end
