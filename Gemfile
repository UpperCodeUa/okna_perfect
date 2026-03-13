# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.1'

gem 'pg', '~> 1.4.5'
gem 'puma', '~> 5.0'
gem 'rails', '~> 7.0.8'
gem 'redis', '~> 4.0'

gem 'carrierwave', '~> 3.0', '>= 3.0.4'
gem 'devise', '~> 4.9', '>= 4.9.4'
gem 'devise_invitable', '~> 2.0.9'
gem 'faraday', '~> 2.12'
gem 'globalize', '~> 6.3'
gem 'i18n', '~> 1.14', '>= 1.14.1'
gem 'image_processing', '~> 1.12', '>= 1.12.2'
gem 'meta-tags', '~> 2.22'
gem 'pagy', '~> 9.0', '>= 9.0.2'
gem 'pundit', '~> 2.3'
gem 'sidekiq', '~> 7.3', '>= 7.3.2'
gem 'simple_form', '~> 5.3', '>= 5.3.1'
gem 'slim', '~> 3.0', '>= 3.0.6'

gem 'cssbundling-rails'
gem 'IPinfo', '~> 2.2.4'
gem 'jbuilder'
gem 'jsbundling-rails'
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'telegram-bot-ruby'
gem 'turbo-rails'

gem 'bootsnap', require: false
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'brakeman', '~> 6.0', '>= 6.0.1'
  gem 'fasterer', '~> 0.10.1'
  gem 'simplecov', require: false

  gem 'rubocop', '~> 1.48', '>= 1.48.1', require: false
  gem 'rubocop-factory_bot', require: false
  gem 'rubocop-performance', '~> 1.16', require: false
  gem 'rubocop-rails', '~> 2.18', require: false
  gem 'rubocop-rspec', '~> 2.19', require: false

  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'annotate', '~> 3.2'
  gem 'bullet', '~> 7.0', '>= 7.0.7'
  gem 'letter_opener_web', '~> 2.0'
  gem 'pry', '~> 0.14.2'
  gem 'web-console', '~> 4.2'

  gem 'solargraph', '~> 0.51.2'

  gem 'capistrano', require: false
  gem 'capistrano3-puma', '5.2.0'
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rails', require: false
  gem 'capistrano-rvm', require: false
  gem 'capistrano-yarn', require: false
end

group :test do
  gem 'capybara', '~> 3.39', '>= 3.39.1'
  gem 'database_cleaner', '~> 2.0', '>= 2.0.2'
  gem 'factory_bot_rails', '~> 6.2'
  gem 'rspec_junit_formatter', require: false
  gem 'rspec-rails', '~> 6.0.0'
  gem 'shoulda-matchers', '~> 5.3'

  gem 'selenium-webdriver'
  gem 'webdrivers'
end
