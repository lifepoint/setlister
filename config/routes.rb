Setlister::Application.routes.draw do
  devise_for :users

  resources :songs
  resources :setlist_songs

  resources :setlists do
    member do
      get :slideshow
    end
  end

  root :to => 'home#index'
end
