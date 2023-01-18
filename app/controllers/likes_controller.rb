class LikesController < ApplicationController
    def create
        like = Like.create!(like_params)
        render json: like.post, status: :created
    end
    def destroy
        # like = Like.where(:user_id => params[:user_id], :post_id => params[:post_id])
        like = Like.find_by(like_params)
        like.destroy
        head :no_content
    end

    private

    def like_params
        params.permit(:user_id, :post_id)
    end
end
