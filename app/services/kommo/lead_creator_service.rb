# frozen_string_literal: true

require 'faraday'
require 'json'

class Kommo::LeadCreatorService
  SUBDOMAIN = Rails.application.credentials.dig(:kommo, :subdomain)
  ACCESS_TOKEN = Rails.application.credentials.dig(:kommo, :access_token)

  def self.call(lead_data)
    url = "https://#{SUBDOMAIN}.kommo.com/api/v4/leads/complex"

    conn = Faraday.new(url:) do |faraday|
      faraday.request :json
      faraday.response :logger
      faraday.adapter Faraday.default_adapter
    end

    conn.post do |req|
      req.headers['Authorization'] = "Bearer #{ACCESS_TOKEN}"
      req.headers['Content-Type'] = 'application/json'
      req.headers['Accept'] = 'application/json'
      req.body = lead_data.to_json
    end
  end

  def self.add_note_to_lead(lead_id, note_text) # rubocop:disable  Metrics/MethodLength
    note_url = "https://#{SUBDOMAIN}.kommo.com/api/v4/leads/notes"

    note_data = [
      {
        entity_id: lead_id,
        note_type: 'extended_service_message',
        params: {
          service: 'Integration with your site',
          text: note_text
        }
      }
    ]

    conn = Faraday.new(url: note_url) do |faraday|
      faraday.request :json
      faraday.response :logger
      faraday.adapter Faraday.default_adapter
    end

    conn.post do |req|
      req.headers['Authorization'] = "Bearer #{ACCESS_TOKEN}"
      req.headers['Content-Type'] = 'application/json'
      req.headers['Accept'] = 'application/json'
      req.body = note_data.to_json
    end
  end
end
