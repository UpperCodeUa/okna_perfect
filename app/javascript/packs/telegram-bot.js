document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.footer-form');
    const flashes = document.querySelectorAll('.massege-info');

    forms.forEach((form, index) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

                    var name = form.querySelector('input[name="username"]').value;
                    var phone = form.querySelector('input[name="phone"]').value;
                    var email = form.querySelector('input[name="email"]').value;
                    var country = form.querySelector('input[name="country"]').value;
                    var city = form.querySelector('input[name="city"]').value;
                    var message = form.querySelector('textarea[name="text"]').value;

                    const chatIds = ['-1002321771436'];
                    const apiUrl = 'https://api.telegram.org/bot7744054478:AAHqRVuYeAPYkBy7Gq96UH2fRE7yvjqoQsY/sendMessage';
                    chatIds.forEach(chatId => {
                        fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: `📌📩 New message\n\nI am: ${name}\nPhone number: ${phone}\nEmail: ${email}\nCountry: ${country}\nCity: ${city}\n\nMessage: ${message}`,
                            }),
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            form.querySelector('input[name="username"]').value = "";
                            form.querySelector('input[name="phone"]').value = "";
                            form.querySelector('input[name="email"]').value = "";
                            form.querySelector('input[name="country"]').value = "";
                            form.querySelector('input[name="city"]').value = "";
                            form.querySelector('textarea[name="text"]').value = "";
                            setTimeout(() => {
                                flashes[index].style.left = "20px";
                            }, 500);
                            setTimeout(() => {
                                flashes[index].style.left = "-200px";
                            }, 5000);
                            fbq('track', 'Lead');
                        });
                    });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formConsultation = document.querySelectorAll('.form-consultation');
    const flashMessage = document.querySelectorAll('.massege-info');

    formConsultation.forEach((form, index) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

                    var name = form.querySelector('input[name="username"]').value;
                    var phone = form.querySelector('input[name="phone"]').value;
                    var country = form.querySelector('input[name="country"]').value;

                    const chatIds = ['-1002321771436'];
                    const apiUrl = 'https://api.telegram.org/bot7744054478:AAHqRVuYeAPYkBy7Gq96UH2fRE7yvjqoQsY/sendMessage';
                    chatIds.forEach(chatId => {
                        fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: `📌📩 Consultation\n\nI am: ${name}\nPhone number: ${phone}\nCountry: ${country}`,
                            }),
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            form.querySelector('input[name="username"]').value = "";
                            form.querySelector('input[name="phone"]').value = "";
                            form.querySelector('input[name="country"]').value = "";
                            document.getElementById("consultation-popup").style.visibility = "hidden";
                            setTimeout(() => {
                                flashMessage[index].style.left = "20px";
                            }, 500);
                            setTimeout(() => {
                                flashMessage[index].style.left = "-200px";
                            }, 5000);
                            fbq('track', 'Lead');
                        });
                    });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formRequest = document.querySelectorAll('.form-request');
    const flashMessages = document.querySelectorAll('.massege-info');

    formRequest.forEach((form, index) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

                    var name = form.querySelector('input[name="username"]').value;
                    var phone = form.querySelector('input[name="phone"]').value;
                    var country = form.querySelector('input[name="country"]').value;

                    const chatIds = ['-1002321771436'];
                    const apiUrl = 'https://api.telegram.org/bot7744054478:AAHqRVuYeAPYkBy7Gq96UH2fRE7yvjqoQsY/sendMessage';
                    chatIds.forEach(chatId => {
                        fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                chat_id: chatId,
                                text: `📌📩 Request\n\nI am: ${name}\nPhone number: ${phone}\nCountry: ${country}`,
                            }),
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            form.querySelector('input[name="username"]').value = "";
                            form.querySelector('input[name="phone"]').value = "";
                            form.querySelector('input[name="country"]').value = "";
                            setTimeout(() => {
                                flashMessages[index].style.left = "20px";
                            }, 500);
                            setTimeout(() => {
                                flashMessages[index].style.left = "-200px";
                            }, 5000);
                            fbq('track', 'Lead');
                        });
                    });
        });
    });
});
