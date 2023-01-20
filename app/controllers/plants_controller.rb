class PlantsController < ApplicationController
    def index
        plants = Plants.all
        render json: plants
    end
    def show
        plant = Plant.find(params[:id])
        render json: plant
    end
    def water
        plant = Plant.find(params[:id])
        post = plant.posts.create(user_id: plant.user.id, title: "#{plant.user.username} watered #{plant.name}", image: plant.image, post_body: "#{plant.user.username} just watered their plant today!")
        plant.update(watered_at: Time.now, watered: true)
        render json: {plant: plant, post: post}, status: :accepted
    end
    
    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end
    private

    def plant_params
        params.permit(:user_id, :name, :image, :watered, :status, :frequency)
    end
end
