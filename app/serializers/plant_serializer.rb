class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :watered, :status, :watered_at, :frequency
  has_one :user
end
