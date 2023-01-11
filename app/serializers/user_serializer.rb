class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :image, :email, :comments
  has_many :posts
  has_many :plants
  has_many :liked_posts

  def comments
    object.comments.map do |comment|
      {
        id: comment.id,
        comment: comment.comment,
        comment_for: comment.post.title,
      }
    end
  end
end
