# frozen_string_literal: true

class Admin::PartnersController < Admin::ApplicationController
  before_action :authorize_policy
  before_action :set_partner, only: %i[edit update destroy]

  def index
    @partners = Admin::PartnerFilterService.new(params).call
    @pagy, @partners = pagy(@partners, items: 10)
  end

  def new
    @partner = User.new
  end

  def edit
    @partner_presenter = UserPresenter.new(@partner, view_context)
  end

  def create
    if User.invite!(partner_params)
      redirect_to admin_partners_path, notice: I18n.t('flash.partner.create.success')
    else
      flash.now[:alert] = I18n.t('flash.partner.create.error')
      render :new
    end
  end

  def update
    if @partner.update(partner_params)
      redirect_to admin_partners_path, notice: I18n.t('flash.partner.update.success')
    else
      @partner_presenter = UserPresenter.new(@partner, view_context)
      flash.now[:alert] = I18n.t('flash.partner.update.error')
      render :edit
    end
  end

  def destroy
    @partner.destroy

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: [
          *notice_turbo_flash(I18n.t('flash.partner.destroy')),
          turbo_stream.remove(@partner)
        ]
      end
    end
  end

  private

  def authorize_policy
    authorize User, policy_class: Admin::PartnerPolicy
  end

  def set_partner
    @partner = User.find(params[:id])
  end

  def partner_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :partner_role
    )
  end
end
