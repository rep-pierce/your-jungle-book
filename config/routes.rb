Rails.application.routes.draw do
  resources :posts_plants, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy]
  resources :posts, only: [:index, :create, :show, :destroy, :update]
  resources :plants, only: [:index, :create, :show, :destroy, :update]
  resources :users, only:[:index, :create, :show, :destroy, :update]


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  delete "/likes/:user_id/:post_id", to: "likes#destroy"
  patch '/plants/:id/water', to: 'plants#water'
  patch '/plants/:id/water_with_post', to: 'plants#water_with_post'
  patch '/plants/:id/image_update', to: 'plants#image_update'
  patch '/plants/:id/image_with_post_update', to: 'plants#image_with_post_update'

  post "/signup", to: "users#create"
  get "/auth", to: "users#auth"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
