const html = document.querySelector('html');
const nightDayMode = document.querySelector('.night-day__mode');

const currentTheme = sessionStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', currentTheme);

nightDayMode.addEventListener('click', function () {
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    nightDayMode.classList.remove("dark");
    nightDayMode.classList.add("light");
  } else {
    html.setAttribute('data-theme', 'dark');
    nightDayMode.classList.remove("light");
    nightDayMode.classList.add("dark");
  }

  sessionStorage.setItem('theme', html.getAttribute('data-theme'));

  const newTheme = html.getAttribute('data-theme');
  fetch('/set_theme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ theme: newTheme }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);

    });
});
