// Función para scroll suave
function scrollToSection(seccionId) {
  document.getElementById(seccionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Funciones del menú móvil
function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('nav-menu-mobile');

  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('nav-menu-mobile');

  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}

// Event listeners de navegación
document.addEventListener('click', function (e) {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('nav-menu-mobile');
  const navContainer = document.querySelector('.nav-container');

  if (!navContainer.contains(e.target) && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});