class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :watered, :status
  has_one :user
end
