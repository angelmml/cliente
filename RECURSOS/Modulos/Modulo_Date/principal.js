// Importamos la función obtenerFechaActual del módulo funcionesFecha.js
import { obtenerFechaActual } from './funcionesFecha.js';

// Obtenemos la fecha actual
const fechaActual = obtenerFechaActual();

// Mostramos la fecha actual en el navegador
document.body.innerHTML = `<h1>Fecha Actual:</h1><p>${fechaActual}</p>`;
