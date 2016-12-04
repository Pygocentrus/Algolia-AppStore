Rails.application.routes.draw do
  root to: 'front#index'
  get '*path' => redirect('/')

  namespace :api do
    namespace :v1 do
      resources :apps, only: [:index, :create, :destroy]
    end
  end
end
