# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(name: "Rep", age: 26, username: "Rep", password: "rep", image: "rep", email: "ryan1@gmail.com")
User.create(name: "Ryan", age: 25, username: "Ryan", password: "ryan", image: "ryan", email: "ryan2@gmail.com")
User.create(name: "Red", age: 28, username: "Red", password: "red", image: 'red', email: "ryan3@gmail.com")

puts "seeding done"