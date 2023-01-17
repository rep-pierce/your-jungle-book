class PostsPlantsController < ApplicationController
    def create
        postsplant = PostsPlant.create!(postsplant_params)
        render json: postsplant
    end

    private

    def postsplant_params
        params.permit(:plant_id, :post_id)
    end
end
