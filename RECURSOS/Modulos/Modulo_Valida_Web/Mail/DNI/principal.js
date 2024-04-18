// Importamos la función validarURL del módulo validador.js
import { validarURL } from './validador.js';

// Pedimos al usuario que introduzca una URL
let url = prompt("Introduce la URL que deseas validar:");

// Validamos la URL utilizando la función validarURL
if (validarURL(url)) {
    console.log("La URL", url, "es válida.");
} else {
    console.log("La URL", url, "no es válida.");
}


/*
EMAIL

// Importamos la función validarEmail del módulo validador.js
import { validarEmail } from './validador.js';

// Pedimos al usuario que introduzca una dirección de correo electrónico
let email = prompt("Introduce tu dirección de correo electrónico:");

// Validamos el email utilizando la función validarEmail
if (validarEmail(email)) {
    console.log("La dirección de correo electrónico", email, "es válida.");
} else {
    console.log("La dirección de correo electrónico", email, "no es válida.");
}
*/

/*
DNI

// Importamos la función validarDNI del módulo validador.js
import { validarDNI } from './validador.js';

// Pedimos al usuario que introduzca un DNI
let dni = prompt("Introduce tu DNI (sin espacios ni guiones):");

// Validamos el DNI utilizando la función validarDNI
if (validarDNI(dni)) {
    console.log("El DNI", dni, "es válido.");
} else {
    console.log("El DNI", dni, "no es válido.");
}

*/