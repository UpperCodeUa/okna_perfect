# frozen_string_literal: true

module HomeHelper
  def pvcglass_doors_path?
    'display: block;' if current_page?(pvcglass_doors_path)
  end
end
