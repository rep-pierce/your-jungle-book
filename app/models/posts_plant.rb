class PostsPlant < ApplicationRecord
  belongs_to :post
  belongs_to :plant
end
