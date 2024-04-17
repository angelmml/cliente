// Función para validar si una URL es válida
function validarURL(url) {
    // Expresión regular para validar la URL
    // valida http://www.ejemplo.com
    let regex = /^(http|https):\/\/[^ "]+$/;

    // Comprobamos si la URL coincide con la expresión regular
    if (regex.test(url)) {
        return true; // La URL es válida
    } else {
        return false; // La URL no es válida
    }
}

// Exportamos la función validarURL para que esté disponible para otros módulos
export { validarURL };


/*
EMAIL

// Función para validar si una dirección de correo electrónico es válida
function validarEmail(email) {
    // Expresión regular para validar la dirección de correo electrónico
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Comprobamos si el email coincide con la expresión regular
    if (regex.test(email)) {
        return true; // El email es válido
    } else {
        return false; // El email no es válido
    }
}

// Exportamos la función validarEmail para que esté disponible para otros módulos
export { validarEmail };

*/

/*
DNI
// Función para validar si un DNI es válido
function validarDNI(dni) {
    // Expresión regular para validar un DNI español
    let regex = /^\d{8}[a-zA-Z]$/;

    // Comprobamos si el DNI coincide con la expresión regular
    if (regex.test(dni)) {
        // Extraemos el número y la letra del DNI
        let numero = dni.substring(0, 8);
        let letra = dni.substring(8);

        // Calculamos la letra esperada a partir del número del DNI
        let letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letraEsperada = letrasValidas.charAt(numero % 23);

        // Comparamos la letra esperada con la letra proporcionada
        if (letra.toUpperCase() === letraEsperada) {
            return true; // El DNI es válido
        }
    }
    
    return false; // El DNI no es válido
}

// Exportamos la función validarDNI para que esté disponible para otros módulos
export { validarDNI };

*/