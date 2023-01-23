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

rep = User.create(name: "Rep", age: 26, username: "Rep", password: "rep", image: "rep", email: "ryan1@gmail.com")
ryan = User.create(name: "Ryan", age: 25, username: "Ryan", password: "ryan", image: "ryan", email: "ryan2@gmail.com")
red = User.create(name: "Red", age: 28, username: "Red", password: "red", image: 'red', email: "ryan3@gmail.com")
puts "seeded users"

plant1 = Plant.create(user: rep, name: "Fiddle Leaf Fig", image: "https://i.imgur.com/hv43L5m.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)
plant2 = Plant.create(user: rep, name: "Velvet Brother", image: "https://i.imgur.com/b27NHzK.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)
plant3 = Plant.create(user: rep, name: "Pepperonioids", image: "https://i.imgur.com/rCBGNds.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)

plant4 = Plant.create(user: ryan, name: "Queen Marble Pothos", image: "https://i.imgur.com/ajzXVVE.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)
plant5 = Plant.create(user: ryan, name: "Snake Plant", image: "https://i.imgur.com/YtQCiIq.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)
plant6 = Plant.create(user: ryan, name: "Monstera", image: "https://i.imgur.com/fKLf4dV.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)

plant7 = Plant.create(user: red, name: "Silver Pothos", image: "https://i.imgur.com/9BmjCKP.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
plant8 = Plant.create(user: red, name: "Bushy Plant", image: "https://i.imgur.com/dAViRaS.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
plant9 = Plant.create(user: red, name: "Variegated Rubber Leaf", image: "https://i.imgur.com/xVKwsHX.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
puts "seeded plants"

post1 = Post.create(user: rep, title: "Post1", image: "Post1", post_body: "Here is the first post")
post2 = Post.create(user: ryan, title: "Post2", image: "Post2", post_body: "Here is the second post")
post3 = Post.create(user: red, title: "Post3", image: "Post3", post_body: "Here is the third post")
puts "seeded posts"

tag1 = Tag.create(name: "Tag1")
tag2 = Tag.create(name: "Tag2")
tag3 = Tag.create(name: "Tag3")
puts "seeded tags"

PostTag.create(post: post1, tag: tag1)
PostTag.create(post: post2, tag: tag2)
PostTag.create(post: post3, tag: tag3)
puts "seeded pts"

Comment.create(user: rep, post: post2, comment: "This is the first comment")
Comment.create(user: ryan, post: post3, comment: "This is the second comment")
Comment.create(user: red, post: post1, comment: "This is the third comment")
puts "seeded comments"

Like.create(user: rep, post: post2)
Like.create(user: rep, post: post3)

Like.create(user: ryan, post: post1)
Like.create(user: ryan, post: post3)

Like.create(user: red, post: post1)
Like.create(user: red, post: post2)
puts "seeded likes"

PostsPlant.create(post: post1, plant: plant1)
PostsPlant.create(post: post1, plant: plant2)
PostsPlant.create(post: post1, plant: plant3)

PostsPlant.create(post: post2, plant: plant4)
PostsPlant.create(post: post2, plant: plant5)
PostsPlant.create(post: post2, plant: plant6)

PostsPlant.create(post: post3, plant: plant7)
PostsPlant.create(post: post3, plant: plant8)
PostsPlant.create(post: post3, plant: plant9)
puts "seeded pps"

puts "seeding done"