Rails.application.routes.draw do 
  devise_for :users
  root to:'calculations#new'
  resources :users, only: [:edit, :update]
  resources :calculations, only: [:index, :create]
end