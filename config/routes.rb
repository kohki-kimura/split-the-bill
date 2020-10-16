Rails.application.routes.draw do 
  devise_for :users
  root to:'calculations#index'
  resources :users, only: [:edit, :update]
end