// var startTime = parseInt(sessionStorage.getItem('startTime')) || new Date().getTime();
// var popupShownTimes = parseInt(sessionStorage.getItem('popupShownTimes')) || 0;

// function updateTimer() {
//     var currentTime = new Date().getTime();
//     var elapsedTime = currentTime - startTime;

//     sessionStorage.setItem('startTime', startTime.toString());
//     sessionStorage.setItem('popupShownTimes', popupShownTimes.toString());

//     var requestPopup = document.getElementById('request-popup');

//     var elapsedSeconds = Math.floor(elapsedTime / 1000);

//     if (popupShownTimes === 0 && elapsedSeconds >= 40) {
//         requestPopup.style.visibility = "visible";
//         popupShownTimes++;
//         sessionStorage.setItem('popupShownTimes', popupShownTimes.toString());
//     } else if (popupShownTimes === 1 && elapsedSeconds >= 80) {
//         requestPopup.style.visibility = "visible";
//         popupShownTimes++;
//         sessionStorage.setItem('popupShownTimes', popupShownTimes.toString());
//     }
// }

// setInterval(updateTimer, 1000);
