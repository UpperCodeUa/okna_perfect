# frozen_string_literal: true

require 'telegram/bot'

class TelegramMessageService
  def initialize(data)
    @data = data
    @franchise_message = data[:form_type] == 'franchise'
  end

  def send_message
    token = Rails.application.credentials.dig(:telegram, :bot_token)
    chat_id = Rails.application.credentials.dig(:telegram, :chat_id)
    bot = Telegram::Bot::Client.new(token)
    bot.api.send_message(chat_id:, text: message_text)
  end

  private

  def message_text
    <<~TEXT
      📌📩 #{@franchise_message ? 'New franchise message!' : 'New message!'}

      Name: #{@data[:name]}
      Phone: #{@data[:phone]}
      #{@franchise_message ? "Email: #{@data[:email]}" : ''}
      Country: #{@data[:location][:country]}
      City: #{@data[:location][:city]}

      #{additional_message_details unless @franchise_message}
    TEXT
  end

  def additional_message_details
    <<~DETAILS
      I am: #{@data[:person]}
      I want: #{@data[:contact_method]}
      Method of communication: #{@data[:social_network]}
      Message: #{@data[:message]}
    DETAILS
  end
end
