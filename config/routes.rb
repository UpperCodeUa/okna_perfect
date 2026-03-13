Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  root 'home#index'

  devise_for :users

  get 'catalogue',       to: 'home#catalogue'
  get 'contacts',        to: 'home#contacts'
  get 'hybrid',          to: 'home#hybrid'
  get 'partner',         to: 'home#partner'
  get 'architect',       to: 'home#architect'
  get 'developer',       to: 'home#developer'
  get 'installer',       to: 'home#installer'
  get 'pvc',             to: 'home#pvc'
  get 'pvcglass_doors',  to: 'home#pvcglass_doors'
  get 'pvc_doors',       to: 'home#pvc_doors'
  get 'alumglass_doors', to: 'home#alumglass_doors'
  get 'alum_doors',      to: 'home#alum_doors'
  get 'show',            to: 'home#show'
  get 'aluminium',       to: 'home#aluminium'
  get 'blinds',          to: 'home#blinds'
  get 'shutters',        to: 'home#shutters'
  get 'franchise',       to: 'home#franchise'
  get 'sliding_pvc',     to: 'home#sliding_pvc'

  post 'set_theme',      to: 'theme#set_theme'

  resources :send_form, only: :create

  namespace :admin do
    root 'partners#index'

    resources :partners, except: :show
  end

  namespace :account do
    root 'dashboard#index'
  end

  match '/404', via: :all, to: 'errors#not_found'

  mount ActionCable.server, at: '/cable'
end
