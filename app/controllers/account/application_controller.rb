# frozen_string_literal: true

class Account::ApplicationController < ActionController::Base
  include Localable
  include PunditAuthorable

  include Pagy::Backend
  include Pundit::Authorization

  layout 'layouts/application'

  protect_from_forgery with: :exception
end
