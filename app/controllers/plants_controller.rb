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
        plant.update(watered_at: Time.now, watered: true)
        render json: plant, status: :accepted
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
