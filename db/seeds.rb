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
Comment.destroy_all
Like.destroy_all
PostsPlant.destroy_all

rep = User.create(name: "Rep", age: 26, username: "Rep", password: "rep")
ryan = User.create(name: "Ryan", age: 25, username: "Ryan", password: "ryan", image: "https://i.imgur.com/T9AkNN3.jpg")
red = User.create(name: "Red", age: 28, username: "Red", password: "red")
puts "seeded users"

plant1 = Plant.create(user: rep, name: "Fiddle Leaf Fig", image: "https://i.imgur.com/hv43L5m.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)
plant2 = Plant.create(user: rep, name: "Velvet Brother", image: "https://i.imgur.com/b27NHzK.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)

plant3 = Plant.create(user: ryan, name: "Pepperonioids", image: "https://i.imgur.com/rCBGNds.jpg", watered: true, status: "Watered this last night", frequency: 3, watered_at: Time.now)
plant4 = Plant.create(user: ryan, name: "Queen Marble Pothos", image: "https://i.imgur.com/ajzXVVE.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)
plant5 = Plant.create(user: ryan, name: "Snake Plant", image: "https://i.imgur.com/YtQCiIq.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)
plant6 = Plant.create(user: ryan, name: "Monstera", image: "https://i.imgur.com/fKLf4dV.jpg", watered: false, status: "Haven't watered them in a while", frequency: 2, watered_at: 1.month.ago)
plant10 = Plant.create(user: ryan, name: "Verigated Pep", image: "https://i.imgur.com/7EEF6MQ.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant11 = Plant.create(user: ryan, name: "Tall Pep", image: "https://i.imgur.com/UGGjTNG.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant12 = Plant.create(user: ryan, name: "White Aloe", image: "https://i.imgur.com/0XpwOvL.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant13 = Plant.create(user: ryan, name: "Fuzzy Cactus", image: "https://i.imgur.com/PyNitHD.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant14 = Plant.create(user: ryan, name: "Small Pep", image: "https://i.imgur.com/FfStFQr.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant15 = Plant.create(user: ryan, name: "Little Cactus", image: "https://i.imgur.com/aJfKsMQ.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant16 = Plant.create(user: ryan, name: "Long Cactus", image: "https://i.imgur.com/A8s3qQC.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant17 = Plant.create(user: ryan, name: "Rubber Leaf", image: "https://i.imgur.com/YfexOoV.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant18 = Plant.create(user: ryan, name: "Thick Boi", image: "https://i.imgur.com/JhXRVLO.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)
plant19 = Plant.create(user: ryan, name: "Nice One", image: "https://i.imgur.com/erC5uP3.jpg", watered: false, status: "Doing pretty well but I need to water them soon", frequency: 4, watered_at: 1.month.ago)

plant7 = Plant.create(user: red, name: "Silver Pothos", image: "https://i.imgur.com/9BmjCKP.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
plant8 = Plant.create(user: red, name: "Bushy Plant", image: "https://i.imgur.com/dAViRaS.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
plant9 = Plant.create(user: red, name: "Variegated Rubber Leaf", image: "https://i.imgur.com/xVKwsHX.jpg", watered: true, status: "Watered this this morning", frequency: 1, watered_at: Time.now)
puts "seeded plants"

post1 = Post.create(user: rep, title: "How my Fiddle Leaf is Doing!", image: "https://i.imgur.com/hv43L5m.jpg", post_body: "My Fiddle Leaf Fig is doing super well! I keep seeing lots of growth and despite being known as a difficult plant to work with, it's given me no issues")
post2 = Post.create(user: ryan, title: "The Monster that is a Monstera", image: "https://i.imgur.com/fKLf4dV.jpg", post_body: "Lately, my Monstera plant hasn't been needing much water, I guess a plant as big as it is can retain it for a while!")
post3 = Post.create(user: red, title: "Truly my Knight in Shining Armor", image: "https://i.imgur.com/9BmjCKP.jpg", post_body: "This Silver Pothos is just to die for!")
puts "seeded posts"

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