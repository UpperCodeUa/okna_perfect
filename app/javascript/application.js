import { Turbo } from "@hotwired/turbo-rails";
Turbo.session.drive = false;

import './controllers';

require('./packs/animation')
require('./packs/slider')
require('./packs/theme')
require('./packs/header')
require('./packs/telegram-bot')
require('./packs/franchise')
require('./packs/popup')
require('./packs/auto_open_popup')
require('./packs/sliding')

require('fslightbox');

window.addEventListener('load', function() {
    const images = document.querySelectorAll('img[data-src], video[data-src]');

    images.forEach(function(img) {
        const dataSrc = img.getAttribute('data-src');

        img.setAttribute('src', dataSrc);

        img.removeAttribute('data-src');

        img.addEventListener('load', function() {
            const parent = img.closest('.load');
            if (parent) {
                parent.classList.remove('load');
            }
        });
    });
});
