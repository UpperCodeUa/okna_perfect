# frozen_string_literal: true

class Kommo::LeadWorker
  include Sidekiq::Worker

  def perform(lead_data_json, note_text)
    lead_data = JSON.parse(lead_data_json)

    lead_response = Kommo::LeadCreatorService.call(lead_data)

    if lead_response.success?
      response_body = JSON.parse(lead_response.body)

      if response_body.is_a?(Array) && response_body.first['id']
        lead_id = response_body.first['id']

        Kommo::LeadCreatorService.add_note_to_lead(lead_id, note_text)
      end
    end
  rescue StandardError => e
    Rails.logger.error("An error occurred in Kommo::LeadWorker: #{e.message}")
  end
end
