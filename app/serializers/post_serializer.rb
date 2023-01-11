class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :post_body
  has_one :user
  has_many :tags
end
