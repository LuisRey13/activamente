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