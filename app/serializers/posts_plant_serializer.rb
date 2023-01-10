class PostsPlantSerializer < ActiveModel::Serializer
  attributes :id
  has_one :post
  has_one :plant
end
