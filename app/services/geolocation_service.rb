# frozen_string_literal: true

class GeolocationService
  def self.country_for(ip)
    details = IPinfoHandler.details(ip)
    details.country_name || 'Unknown'
  rescue StandardError => e
    Rails.logger.error("Geolocation lookup failed: #{e.message}")
    'Unknown'
  end
end
