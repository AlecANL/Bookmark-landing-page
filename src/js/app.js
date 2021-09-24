// @ts-check

const $nav = document.getElementById('nav');
const $iconMenu = document.getElementById('icon-menu');
const $iconClose = document.getElementById('icon-close');

$iconMenu.addEventListener('click', () => {
  $nav.classList.add('is-active');
});

$iconClose.addEventListener('click', () => {
  $nav.classList.remove('is-active');
});
