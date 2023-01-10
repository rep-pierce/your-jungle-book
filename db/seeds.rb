# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Post.destroy_all
Plant.destroy_all
Tag.destroy_all
PostTag.destroy_all
Comment.destroy_all
Like.destroy_all
PostsPlant.destroy_all

User.create(name: "Rep", age: 26, username: "Rep", password: "rep", image: "rep", email: "ryan1@gmail.com")
User.create(name: "Ryan", age: 25, username: "Ryan", password: "ryan", image: "ryan", email: "ryan2@gmail.com")
User.create(name: "Red", age: 28, username: "Red", password: "red", image: 'red', email: "ryan3@gmail.com")

Plant.create(user_id: 1, name: "Plant1", image: "Plant1", watered: true, status: "Watered this last night")
Plant.create(user_id: 1, name: "Plant2", image: "Plant2", watered: true, status: "Watered this last night")
Plant.create(user_id: 1, name: "Plant3", image: "Plant3", watered: true, status: "Watered this last night")

Plant.create(user_id: 2, name: "Plant4", image: "Plant4", watered: false, status: "Haven't watered them in a while")
Plant.create(user_id: 2, name: "Plant5", image: "Plant5", watered: false, status: "Haven't watered them in a while")
Plant.create(user_id: 2, name: "Plant6", image: "Plant6", watered: false, status: "Haven't watered them in a while")

Plant.create(user_id: 3, name: "Plant7", image: "Plant7", watered: true, status: "Watered this this morning")
Plant.create(user_id: 3, name: "Plant8", image: "Plant8", watered: true, status: "Watered this this morning")
Plant.create(user_id: 3, name: "Plant9", image: "Plant9", watered: true, status: "Watered this this morning")

Post.create(user_id: 1, title: "Post1", image: "Post1", post_body: "Here is the first post")
Post.create(user_id: 2, title: "Post2", image: "Post2", post_body: "Here is the second post")
Post.create(user_id: 3, title: "Post3", image: "Post3", post_body: "Here is the third post")

Tag.create(name: "Tag1")
Tag.create(name: "Tag2")
Tag.create(name: "Tag3")

PostTag.create(post_id: 1, tag_id: 1)
PostTag.create(post_id: 2, tag_id: 2)
PostTag.create(post_id: 3, tag_id: 3)

Comment.create(user_id: 1, post_id: 2, comment: "This is the first comment")
Comment.create(user_id: 2, post_id: 3, comment: "This is the second comment")
Comment.create(user_id: 3, post_id: 1, comment: "This is the third comment")

Like.create(user_id: 1, post_id: 2)
Like.create(user_id: 1, post_id: 3)

Like.create(user_id: 2, post_id: 1)
Like.create(user_id: 2, post_id: 3)

Like.create(user_id: 3, post_id: 1)
Like.create(user_id: 3, post_id: 2)

PostsPlant.create(post_id: 1, plant_id: 1)
PostsPlant.create(post_id: 1, plant_id: 2)
PostsPlant.create(post_id: 1, plant_id: 3)

PostsPlant.create(post_id: 2, plant_id: 4)
PostsPlant.create(post_id: 2, plant_id: 5)
PostsPlant.create(post_id: 2, plant_id: 6)

PostsPlant.create(post_id: 3, plant_id: 7)
PostsPlant.create(post_id: 3, plant_id: 8)
PostsPlant.create(post_id: 3, plant_id: 9)

puts "seeding done"