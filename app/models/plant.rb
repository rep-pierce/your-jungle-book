class Plant < ApplicationRecord
  belongs_to :user
  has_many :posts_plants, dependent: :destroy
  has_many :posts, through: :posts_plants
end
