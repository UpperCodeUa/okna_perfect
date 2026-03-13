# frozen_string_literal: true

class Kommo::LeadGeneratorService
  def initialize(params, session, request)
    @params = params
    @session = session
    @request = request
  end

  def process_form # rubocop:disable Metrics/MethodLength, Metrics/AbcSize
    form_data = Kommo::LeadDataPreparerService.new(@params, @session, @request).call
    custom_fields_utm = build_utm_fields(form_data[:utm_params])

    location_field_id = case form_data[:pipeline_id]
                        when 9_594_695
                          737_750
                        when 9_632_399
                          744_948
                        when 9_616_183
                          748_018
                        end

    location_value = "#{form_data[:city]}, #{form_data[:country]}"

    custom_fields = []
    custom_fields << { field_id: location_field_id, values: [{ value: location_value }] } if location_field_id
    custom_fields << { field_id: 742_952, values: [{ value: form_data[:note] }] }
    custom_fields += custom_fields_utm

    lead_data = [
      {
        name: form_data[:name],
        pipeline_id: form_data[:pipeline_id],
        custom_fields_values: custom_fields,
        _embedded: {
          contacts: [
            {
              name: form_data[:name],
              custom_fields_values: [
                { field_code: 'EMAIL', values: [{ value: form_data[:email] }] },
                { field_code: 'PHONE', values: [{ value: form_data[:phone] }] }
              ]
            }
          ]
        }
      }
    ]

    lead_json = lead_data.to_json

    Kommo::LeadWorker.perform_async(lead_json, build_note_text(form_data))
  end

  private

  def build_utm_fields(utm_params)
    return [] unless utm_params

    utm_fields = %i[utm_source utm_medium utm_campaign utm_term utm_content
                    utm_referrer referrer gclientid gclid fbclid]

    fields = utm_fields.map do |utm_field|
      next if utm_params[utm_field].blank?

      { field_code: utm_field.to_s.upcase, values: [{ value: utm_params[utm_field] }] }
    end

    fields.compact
  end

  def build_note_text(form_data)
    <<~NOTE
      #{form_data[:note]}
      ------------------------
      Name: #{form_data[:name]}
      Phone: #{form_data[:phone]}
      Email: #{form_data[:email] || 'N/A'}
      City: #{form_data[:city]}
      Country: #{form_data[:country]}
    NOTE
  end
end
