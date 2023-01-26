class RemovePostTags < ActiveRecord::Migration[7.0]
  def change
    drop_table :post_tags
  end
end
