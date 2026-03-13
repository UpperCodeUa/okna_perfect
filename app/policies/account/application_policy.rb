# frozen_string_literal: true

class Account::ApplicationPolicy < ApplicationPolicy
  def index?
    user&.partner?
  end

  def show?
    user&.partner?
  end

  def create?
    user&.partner?
  end

  def new?
    create?
  end

  def update?
    user&.partner?
  end

  def edit?
    update?
  end

  def destroy?
    user&.partner?
  end
end
