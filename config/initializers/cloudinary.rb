Cloudinary.config_from_url(ENV["CLOUDINARY_URL"])
Cloudinary.config do |config|
    config.secure = true
end
puts "\nConnected to: #{Cloudinary.config.cloud_name}\n"