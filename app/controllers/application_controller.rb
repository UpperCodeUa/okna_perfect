# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_utm_params_to_session
  before_action :set_mata_tags
  before_action :check_path

  def after_sign_in_path_for(resource)
    return account_root_path if resource.partner?
    return admin_root_path if resource.admin?

    super
  end

  private

  def check_path
    return unless request.original_url.include?('cs')

    redirect_to request.original_url.sub('cs', ''), status: :moved_permanently and return
  end

  def set_mata_tags
    set_meta_tags title: 'Perfect Okna',
                  description: 'Perfect Okna',
                  og: {
                    title: 'Perfect Okna',
                    description: 'Perfect Okna',
                    locale: 'ua',
                    type: 'website',
                    url: request.original_url,
                    image: "#{request.base_url}/assets/logo.svg",
                    site_name: 'Perfect Okna'
                  },
                  twitter: {
                    title: 'Perfect Okna',
                    description: 'Perfect Okna',
                    card: 'summary_large_image',
                    image: "#{request.base_url}/assets/logo.svg"
                  }
  end

  def set_utm_params_to_session
    %i[utm_source utm_medium utm_campaign utm_content utm_term
       utm_referrer referrer gclientid gclid fbclid].each do |param|
      session[param] = params[param] if params[param].present?
    end
  end
end
