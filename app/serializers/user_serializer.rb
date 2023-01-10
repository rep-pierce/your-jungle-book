class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :password_digest, :image, :email
end
