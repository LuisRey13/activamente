// script.js
function actualizarFechaHora() {
    const fecha = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById('fecha').textContent = fechaFormateada;
    document.getElementById('hora').textContent = horaFormateada;
}

// Actualizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);

// Llamar a la función por primera vez para mostrar la fecha y hora al cargar la página
actualizarFechaHora();


const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const guardarButton = document.getElementById('guardar');
const mensaje = document.getElementById('mensaje');

guardarButton.addEventListener('click', () => {
  const nombre = nombreInput.value;
  const correo = correoInput.value;

  // Verificar que los campos no estén vacíos
  if (nombre === '' || correo === '') {
    mensaje.textContent = 'Por favor, ingresa tu nombre y correo.';
    return;
  }

  // Crea el objeto con los datos del usuario
  const usuario = {
    nombre: nombre,
    correo: correo
  };

  // Guarda los datos en el archivo JSON
  guardarDatos(usuario);

  // Limpia los campos de entrada
  nombreInput.value = '';
  correoInput.value = '';

  // Muestra un mensaje de éxito
  mensaje.textContent = 'Datos guardados correctamente!';
});

function guardarDatos(usuario) {
    document.body.style.backgroundColor = 'blue';
  // Lee los datos del archivo JSON existente (si existe)
  let datos = [];
  try {
    const archivoJSON = JSON.parse(localStorage.getItem('datosUsuarios'));
    if (archivoJSON) {
      datos = archivoJSON;
    }
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
  }

  // Agrega el nuevo usuario a la lista
  datos.push(usuario);

  // Guarda la lista actualizada en el archivo JSON
  localStorage.setItem('datosUsuarios', JSON.stringify(datos));
  window.location.href = "hola-mundo.html"; 
}