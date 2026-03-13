# frozen_string_literal: true

class Admin::ApplicationController < ActionController::Base
  include Localable
  include TurboFlashable
  include PunditAuthorable

  include Pagy::Backend
  include Pundit::Authorization

  layout 'admin/layouts/application'

  protect_from_forgery with: :exception
end
