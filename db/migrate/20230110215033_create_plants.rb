class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :image
      t.boolean :watered
      t.text :status

      t.timestamps
    end
  end
end
