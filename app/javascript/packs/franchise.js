document.addEventListener('DOMContentLoaded', function () {
	let popupOverlay = document.querySelector('#franchise-application ');
	let closeBtn = document.querySelector('#close-franchise-application');
	let openPopupBtn = document.querySelector('#open-franchise-application');
	if (document.querySelector('#franchise-application')) {
		function openPopup() {
			popupOverlay.style.visibility = 'visible';
		}
		function closePopup() {
			popupOverlay.style.visibility = 'hidden';
		}

		closeBtn.addEventListener('click', closePopup);

		popupOverlay.addEventListener('click', function (event) {
			if (event.target === popupOverlay) {
				closePopup();
			}
		});

		openPopupBtn.addEventListener('click', openPopup);
	}
});


document.addEventListener('DOMContentLoaded', function () {
	let popupOverlay = document.querySelector('#fin-model ');
	let closeBtn = document.querySelector('#close-fin-model');
	let openPopupBtn = document.querySelector('#open-fin-model');
	if (document.querySelector('#fin-model')) {
		function openPopup() {
			popupOverlay.style.visibility = 'visible';
		}
		function closePopup() {
			popupOverlay.style.visibility = 'hidden';
		}

		closeBtn.addEventListener('click', closePopup);

		popupOverlay.addEventListener('click', function (event) {
			if (event.target === popupOverlay) {
				closePopup();
			}
		});

		openPopupBtn.addEventListener('click', openPopup);
	}
});


document.addEventListener('turbo:load', function () {
	let openMenu = document.querySelector('#open-nav');
	let menu = document.querySelector('#nav');
	let navLinks = document.querySelectorAll('.nav-link');

	if (menu) {
		function toggleMenu() {
			menu.classList.toggle('active');
			openMenu.classList.toggle('active');
		}

		openMenu.addEventListener('click', function (event) {
			toggleMenu();
			event.stopPropagation();
		});

		menu.addEventListener('click', function (event) {
			event.stopPropagation();
		});

		document.addEventListener('click', function (event) {
			var isClickInsideMenu = menu.contains(event.target);

			if (!isClickInsideMenu && menu.classList.contains('active')) {
				toggleMenu();
			}
		});

		navLinks.forEach(function (navLink) {
			navLink.addEventListener('click', function () {
				navLinks.forEach(function (link) {
					link.classList.remove('active');
				});

				this.classList.add('active');

				menu.classList.remove('active');

				openMenu.classList.remove('active');
			});
		});
	}
});
