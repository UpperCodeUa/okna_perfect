# frozen_string_literal: true

class Kommo::LeadDataPreparerService
  attr_reader :params, :session, :request

  def initialize(params, session, request)
    @params = params
    @session = session
    @request = request
  end

  def call
    build_form_data
  end

  private

  def build_form_data
    {
      name: params[:username],
      phone: params[:phone],
      email: params[:email],
      city: params[:city],
      country: params[:country],
      note: "Message: #{params[:text]}",
      utm_params: extract_utm_params,
      pipeline_id: determine_funnel
    }
  end

  def extract_utm_params # rubocop:disable Metrics/AbcSize
    {
      utm_source: session[:utm_source],
      utm_medium: session[:utm_medium],
      utm_campaign: session[:utm_campaign],
      utm_content: session[:utm_content],
      utm_term: session[:utm_term],
      utm_referrer: session[:utm_referrer],
      referrer: session[:referrer],
      gclientid: session[:gclientid],
      gclid: session[:gclid],
      fbclid: session[:fbclid]
    }.compact
  end

  def determine_funnel
    user_ip = request.remote_ip
    country = GeolocationService.country_for(user_ip)

    return 9_594_695 if params[:contact] == 'Get advice on franchise' || params[:form_type] == 'franchise'

    return 9_632_399 if ['United States', 'Canada'].include?(country)

    9_616_183
  end
end
