// Función flecha para encontrar el máximo elemento en un array
const encontrarMaximo = (array) => {
    let maximo = -999; // Cambiar -999 por el valor deseado
    try {
        // Recorrer el array para encontrar el máximo
        array.forEach(numero => {
            if (numero > maximo) {
                maximo = numero;
            }
        });
        if (maximo === -999) {
            throw new Error("El array está vacío o no contiene valores mayores que -999");
        }
        return maximo;
    } catch (error) {
        console.error(error.message);
    }
};

// Array de ejemplo
const numeros = [4, 8, 2, 10, 6];

// Llamar a la función para encontrar el máximo
const maximoEncontrado = encontrarMaximo(numeros);

// Mostrar el máximo encontrado
console.log("El máximo elemento en el array es:", maximoEncontrado);
