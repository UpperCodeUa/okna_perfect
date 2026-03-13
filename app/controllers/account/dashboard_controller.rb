# frozen_string_literal: true

class Account::DashboardController < Account::ApplicationController
  before_action :authorize_policy

  def index; end

  private

  def authorize_policy
    authorize :dashboard, policy_class: Account::DashboardPolicy
  end
end
