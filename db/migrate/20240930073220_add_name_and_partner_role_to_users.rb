class AddNameAndPartnerRoleToUsers < ActiveRecord::Migration[7.0]
  def change
    change_table :users, bulk: true do |t|
      t.string :name
      t.string :partner_role
    end
  end
end
