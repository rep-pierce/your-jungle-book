class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:user_id, :post_id, :comment)
    end
end
