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
        if params[:image] != "null"
            file = params[:image]
            img = Cloudinary::Uploader.upload(file, folder: "jungle_book", public_id: params[:name], unique_filename: false, overwrite: true)
            img_url = img["url"]
            post = Post.create!(user_id: params[:user_id], title: params[:title], image: img_url, post_body: params[:post_body])
            params[:posts_plants_ids].each do |plant|
                post.posts_plants.create(plant_id: plant)
            end
            render json: post, status: :created
        else
            post = Post.create!(user_id: params[:user_id], title: params[:title], post_body: params[:post_body])
            render json: post, status: :created
        end
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
