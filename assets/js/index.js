const iconH = document.querySelector('#icon-hamburger');
const close = document.getElementById('close');
const nav = document.querySelector('.nav-list');
iconH.addEventListener('click', () => {
  nav.classList.add('active');
  iconH.style.display = 'none';
});
console.log(close);
close.addEventListener('click', () => {
  nav.classList.remove('active');
  iconH.style.display = 'block';
});
