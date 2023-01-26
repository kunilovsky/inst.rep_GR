const toggle = document.getElementById('toggle');
const theme = window.localStorage.getItem('theme');

if (theme === 'dark') {
  document.body.classList.add('dark');
  toggle.classList.add('icon__light');
} else toggle.classList.add('icon__dark');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (theme === 'dark') {
    window.localStorage.setItem('theme', 'light');
  } else {
    window.localStorage.setItem('theme', 'dark');
  }
  if (toggle.classList.contains('icon__light')) {
    toggle.classList.remove('icon__light');
    toggle.classList.add('icon__dark');
  } else {
    toggle.classList.remove('icon__dark');
    toggle.classList.add('icon__light');
  }
});
