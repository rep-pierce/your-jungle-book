class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def auth
        render json: current_user
    end

    def update
        user = current_user.update!(user_params)
        render json: user, status: :accepted
    end 

    private

    def user_params
        params.permit(:name, :age, :username, :password, :password_confirmation, :id, :image)
    end
end
