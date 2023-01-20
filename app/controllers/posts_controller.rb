class PostsController < ApplicationController
    def index
        posts = Post.all.reverse
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post, serializer: PostAndAllSerializer
    end

    def create
        post = Post.create!(post_params)
        params[:posts_plants_ids].each do |plant|
            post.posts_plants.create(plant_id: plant)
        end
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:user_id, :title, :image, :post_body)
    end
end
