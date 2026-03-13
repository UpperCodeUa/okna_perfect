# frozen_string_literal: true

class SendFormController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    if captcha_verified?(params['g-recaptcha-response'])
      # Kommo::LeadGeneratorService.new(params, session, request).process_form
      # TelegramSenderService.new(params).call
    else
      flash[:alert] = 'Failed to pass the captcha. Please try again.'
    end
    redirect_to root_path
  end

  def captcha_verified?(response)
    uri = URI('https://hcaptcha.com/siteverify')
    res = Net::HTTP.post_form(uri, secret: 'ES_efd774ba1ee2435e9fcee22d56631943', response:)

    result = JSON.parse(res.body)
    result['success']
  end
end
