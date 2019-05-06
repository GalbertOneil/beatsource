Rails.application.routes.draw do
  resources :crates do
    resources :songs
  end

  resources :songs
  
  resources :users  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
