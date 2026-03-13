document.addEventListener('DOMContentLoaded', function () {
	let popupOverlay = document.querySelector('#consultation-popup');
	let closeBtn = document.querySelector('#close-consultation-popup');
	let openPopupBtn = document.querySelector('.open-consultation');
	if (document.querySelector('.open-consultation')) {
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
	let popupOverlay = document.querySelector('#request-popup');
	let closeBtn = document.querySelector('#close-request-popup');

	if (document.querySelector('#request-popup')) {
		
		function closePopup() {
			popupOverlay.style.visibility = 'hidden';
		}

		closeBtn.addEventListener('click', closePopup);

		popupOverlay.addEventListener('click', function (event) {
			if (event.target === popupOverlay) {
				closePopup();
			}
		});
	}
});

