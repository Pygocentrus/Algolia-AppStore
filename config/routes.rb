Rails.application.routes.draw do
  root to: 'front#index'

  namespace :api do
    namespace :v1 do
      resources :apps, only: [:index, :show, :create, :destroy]
    end
  end

  get '*path' => redirect('/')
end
