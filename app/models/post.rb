class Post < ApplicationRecord
  belongs_to :user
  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags
  has_many :likes, dependent: :destroy
  has_many :like_users, through: :likes, source: :user
  has_many :comments, dependent: :destroy
  has_many :comment_users, through: :comments, source: :user
  has_many :posts_plants, dependent: :destroy
  has_many :plants, through: :posts_plants

end
