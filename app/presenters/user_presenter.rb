# frozen_string_literal: true

class UserPresenter < BasePresenter
  def full_name
    "#{first_name} #{last_name}"
  end

  def registration_date
    created_at.strftime('%d %b, %Y')
  end
end
