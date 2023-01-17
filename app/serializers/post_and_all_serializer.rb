class PostAndAllSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :post_body, :likes
  has_one :user
  has_many :tags
  has_many :plants
  has_many :comments
  
  def likes
    object.likes.length
  end
end
