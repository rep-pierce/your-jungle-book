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
        render json: post
    end

    private

    def post_params
        params.permit(:user_id, :title, :image, :post_body)
    end
end
