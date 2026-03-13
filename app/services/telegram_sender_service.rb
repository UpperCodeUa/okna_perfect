# frozen_string_literal: true

require 'telegram/bot'

class TelegramSenderService
  attr_reader :params, :data, :franchise_message

  def initialize(params)
    @params = params
    @data = message_data
    @franchise_message = params[:form_type] == 'franchise'
    @token = Rails.application.credentials.dig(:telegram, :bot_token)
    @chat_id = Rails.application.credentials.dig(:telegram, :chat_id)
  end

  def call
    bot = Telegram::Bot::Client.new(@token)
    bot.api.send_message chat_id: @chat_id, text: text_message
  end

  private

  def text_message
    <<~TEXT
      📌📩 #{@franchise_message ? 'New franchise message!' : 'New message!'}

      Name: #{data[:name]}
      Phone: #{data[:phone_code] + data[:phone]}
      Email: #{data[:email]}
      Country: #{data[:location][:country]}
      City: #{data[:location][:city]}

      #{additional_message_details unless @franchise_message}
    TEXT
  end

  def additional_message_details
    <<~DETAILS
      I am: #{data[:person]}
      I want: #{data[:contact_method]}
      Method of communication: #{data[:social_network]}
      Message: #{data[:message]}
    DETAILS
  end

  def message_data # rubocop:disable Metrics/AbcSize
    {
      form_type: params[:form_type],
      person: params[:person],
      contact_method: params[:contact],
      social_network: params[:socialnet],
      name: params[:username],
      phone: params[:phone],
      phone_code: params[:phone_code],
      email: params[:email],
      message: params[:text],
      location: { country: params[:country], city: params[:city] }
    }
  end
end
