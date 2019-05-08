Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :crates do
    resources :songs
  end

  resources :songs
  
  resources :users  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
