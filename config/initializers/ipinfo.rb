require 'ipinfo'

access_token = Rails.application.credentials.ipinfo[:access_token]

IPinfoHandler = IPinfo.create(access_token)
