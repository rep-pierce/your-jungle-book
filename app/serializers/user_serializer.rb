class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :image, :email
  has_many :posts
end
