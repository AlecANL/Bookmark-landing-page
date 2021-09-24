const $nav = document.getElementById('nav');
const $iconMenu = document.getElementById('icon-menu');
const $iconClose = document.getElementById('icon-close');
const $slides = document.querySelectorAll('.slide');
const $controls = document.querySelectorAll('.s-control');

$controls.forEach((control, idx) => {
  control.addEventListener('click', () => {
    $controls.forEach(el => el.classList.remove('is-active'));
    $slides.forEach(el => el.classList.remove('is-active'));
    $slides[idx].classList.add('is-active');
    $controls[idx].classList.add('is-active');
  });
});

$iconMenu.addEventListener('click', () => {
  $nav.classList.add('is-active');
});

$iconClose.addEventListener('click', () => {
  $nav.classList.remove('is-active');
});
