class PostTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :post
  has_one :tag
end
