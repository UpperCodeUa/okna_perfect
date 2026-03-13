import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails"

// Connects to data-controller="modals"
export default class extends Controller {
  close(e) {
    const modal = document.getElementById("modal");

    modal.innerHTML = "";
    modal.removeAttribute("src");
    modal.removeAttribute("complete");
  }

  submitEnd(e) {
    if (e.detail.success) {
      this.close(e)
    }
  }

  close_with_render(e) {
    Turbo.visit(window.location);
  }
}
