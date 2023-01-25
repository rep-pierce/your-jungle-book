class PlantsController < ApplicationController
    def index
        plants = Plants.all
        render json: plants
    end
    def show
        plant = Plant.find(params[:id])
        render json: plant
    end
    def destroy
        plant = Plant.find(params[:id])
        plant.destroy
        head :no_content
    end
    def water_with_post
        plant = Plant.find(params[:id])
        post = plant.posts.create(user_id: plant.user.id, title: "#{plant.user.username} watered #{plant.name}", image: plant.image, post_body: "#{plant.user.username} just watered their plant today!")
        plant.update(watered_at: Time.now, watered: true, status: "I watered my #{plant.name} on #{Date.today}")
        render json: {plant: plant, post: post}, status: :accepted
    end
    def water
        plant = Plant.find(params[:id])
        plant.update(watered_at: Time.now, watered: true, status: "I watered my #{plant.name} on #{Date.today}")
        render json: {plant: plant}
    end
    def image_update
        plant = Plant.find(params[:id])
        file = params[:image]
        img = Cloudinary::Uploader.upload(file, folder: "jungle_book", public_id: plant.name, unique_filename: false, overwrite: true)
        img_url = img["url"]
        plant.update(image: img_url)
        render json: {plant: plant}
    end
    def image_with_post_update
        plant = Plant.find(params[:id])
        file = params[:image]
        img = Cloudinary::Uploader.upload(file, folder: "jungle_book", public_id: plant.name, unique_filename: false, overwrite: true)
        img_url = img["url"]
        post = plant.posts.create(user_id: plant.user.id, title: "#{plant.user.username} updated #{plant.name}'s image!", image: img_url, post_body: "#{plant.user.username} just updated their plants picture!")
        plant.update(image: img_url)
        render json: {plant: plant, post: post}, status: :accepted
    end
    
    def create
        if params[:image] != "null"
            file = params[:image]
            img = Cloudinary::Uploader.upload(file, folder: "jungle_book", public_id: params[:name], unique_filename: false, overwrite: true)
            img_url = img["url"]
            plant = Plant.create!(user_id: params[:user_id], name: params[:name], image: img_url, watered: params[:watered], status: params[:status], frequency: params[:frequency])
            render json: plant, status: :created
        else
            plant = Plant.create!(user_id: params[:user_id], name: params[:name], watered: params[:watered], status: params[:status], frequency: params[:frequency])
            render json: plant, status: :created
        end
    end
    private

    def plant_params
        params.permit(:user_id, :name, :image, :watered, :status, :frequency)
    end
end
