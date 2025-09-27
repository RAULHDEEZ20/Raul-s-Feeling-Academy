// Funciones del modal
function abrirModal(instrumento) {
  const modal = document.getElementById('modal-contacto');
  const titulo = document.getElementById('titulo-modal');
  const selectInstrumento = document.getElementById('instrumento');

  // Configurar el modal según el instrumento
  const instrumentos = {
    'bajo': 'Información sobre Bajo Eléctrico',
    'piano': 'Información sobre Piano Jazz',
    'saxofon': 'Información sobre Saxofón'
  };

  titulo.textContent = instrumentos[instrumento];
  selectInstrumento.value = instrumento;

  modal.classList.add('mostrar');

  // Cerrar menú móvil si está abierto
  closeMobileMenu();
}

function cerrarModal() {
  const modal = document.getElementById('modal-contacto');
  const formulario = document.getElementById('formulario-contacto');
  const mensajeExito = document.getElementById('mensaje-exito');

  modal.classList.remove('mostrar');
  formulario.reset();
  formulario.style.display = 'block';
  mensajeExito.style.display = 'none';
}

// Event listeners del modal y formulario
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const formulario = this;
  const mensajeExito = document.getElementById('mensaje-exito');

  formulario.style.display = 'none';
  mensajeExito.style.display = 'block';

  setTimeout(function () {
    cerrarModal();
  }, 6000);
});

document.getElementById('modal-contacto').addEventListener('click', function (e) {
  if (e.target === this) {
    cerrarModal();
  }
});