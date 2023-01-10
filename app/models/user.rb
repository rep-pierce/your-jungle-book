class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :plants, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :post
    has_many :comments, dependent: :destroy
    has_many :commented_posts, through: :comments, source: :post

    validates :name, presence: true
    validates :age, presence: true, numericality: true
    validates :username, presence: true, uniqueness: true

end
