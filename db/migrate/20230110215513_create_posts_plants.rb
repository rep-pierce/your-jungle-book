class CreatePostsPlants < ActiveRecord::Migration[7.0]
  def change
    create_table :posts_plants do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
