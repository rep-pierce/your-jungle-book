class Plant < ApplicationRecord
  before_validation :set_watered_at, on: :create
  belongs_to :user
  has_many :posts_plants, dependent: :destroy
  has_many :posts, through: :posts_plants

  validates :watered, inclusion: { in: [ true, false ] }
  validates :frequency, numericality: { only_integer: true }

  def needs_watering?
    (watered_at + frequency.days) <= Time.now
  end
  
  def set_watered_at
    if self.watered == true
      self.watered_at = Time.now
    end
  end
end
