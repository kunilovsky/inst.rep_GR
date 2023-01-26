const toggle = document.getElementById('toggle');
const theme = window.localStorage.getItem('theme');

if (theme === 'dark') {
  document.body.classList.add('dark');
  toggle.classList.add('thema__action-1');
} else toggle.classList.add('thema__action-2');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (theme === 'dark') {
    window.localStorage.setItem('theme', 'light');
  } else {
    window.localStorage.setItem('theme', 'dark');
  }
});

toggle.addEventListener('click', () => {
  if (toggle.classList.contains('thema__action-1')) {
    toggle.classList.remove('thema__action-1');
    toggle.classList.add('thema__action-2');
  } else {
    toggle.classList.remove('thema__action-2');
    toggle.classList.add('thema__action-1');
  }
});
