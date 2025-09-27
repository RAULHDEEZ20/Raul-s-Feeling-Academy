// Efecto del navbar al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');

  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  }
});