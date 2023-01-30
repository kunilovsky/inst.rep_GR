const toggle = document.getElementById('toggle');
const theme = window.localStorage.getItem('theme');
const burger = document.getElementById('burger');

if (theme === 'dark') {
  document.body.classList.add('dark');
  toggle.classList.add('icon__light');
  burger.classList.add('navbar-toggler-icon-white');
} else toggle.classList.add('icon__dark');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  burger.classList.toggle('navbar-toggler-icon-white');
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
