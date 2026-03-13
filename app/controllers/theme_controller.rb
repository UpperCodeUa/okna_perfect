# frozen_string_literal: true

class ThemeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def set_theme
    session[:theme] = params[:theme].presence || 'light'

    render json: { status: 'success', theme: session[:theme] }
  end
end
