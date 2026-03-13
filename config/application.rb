require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module OknaPerfect
  class Application < Rails::Application
    config.load_defaults 7.0

    # config.i18n.available_locales = %i[en de es fr it nl ua]
    config.i18n.available_locales = %i[en cs]
    config.i18n.default_locale = :cs

    config.i18n.fallbacks = [I18n.default_locale]
    config.i18n.fallbacks = true
    config.assets.paths << Rails.root.join('app', 'assets', 'images', '3d-model')

    config.active_job.queue_adapter = :sidekiq
  end
end
