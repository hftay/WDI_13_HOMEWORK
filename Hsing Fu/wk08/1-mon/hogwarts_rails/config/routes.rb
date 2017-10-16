Rails.application.routes.draw do

  root "houses#index"
  # resources :houses, only: [:index, :show, :create]
  resources :houses
  # resources :students, only: [:index, :show, :new]
  resources :students

end
