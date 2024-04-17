// Función flecha para encontrar la cadena más larga en un array
const encontrarCadenaMasLarga = (array) => {
    let cadenaMasLarga = '';
    try {
        // Recorrer el array para encontrar la cadena más larga
        array.forEach(cadena => {
            if (cadena.length > cadenaMasLarga.length) {
                cadenaMasLarga = cadena;
            }
        });
        if (cadenaMasLarga === '') {
            throw new Error("El array está vacío");
        }
        return cadenaMasLarga;
    } catch (error) {
        console.error(error.message);
    }
};

// Array de ejemplo
const palabras = ['manzana', 'banana', 'naranja', 'sandía', 'uva'];

// Llamar a la función para encontrar la cadena más larga
const cadenaMasLargaEncontrada = encontrarCadenaMasLarga(palabras);

// Mostrar la cadena más larga encontrada
console.log("La cadena más larga en el array es:", cadenaMasLargaEncontrada);
