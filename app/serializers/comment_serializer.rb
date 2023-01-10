class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user
  has_one :post
end
