# frozen_string_literal: true

class Admin::PartnerFilterService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def call
    User
      .partners
      .where(partner_role)
  end

  private

  def partner_role
    return {} if params.dig(:partner, :partner_role).blank?

    { partner_role: params.dig(:partner, :partner_role) }
  end
end
