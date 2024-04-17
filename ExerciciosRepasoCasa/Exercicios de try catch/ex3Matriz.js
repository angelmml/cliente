// Creamos unha función flecha que devolve o elemento dunha matriz dado un índice, lanzando un erro se o índice está fóra do rango do array.
const matriz = (matrix, indice) => {
    try {
        // Comprobamos se o índice está dentro dos límites da matriz
        if (indice >= 0 && indice < matrix.length) {
            // Devolvemos o elemento correspondente ao índice
            return matrix[indice];
        } else {
            // Lanzamos un erro se o índice está fóra de rango
            throw new RangeError("Fóra de rango you");
        }
    } catch (error) {
        // Devolvemos a mensaxe de erro
        return error.message;
    } finally {
        console.log("Eu aparezco si ou si"); // Esta mensaxe aparecerá sempre, independentemente de si hai un erro ou non
    }
};

// Creamos un array
const matrix = ["Bosque", 8, 15, "Cartón", 23, "Xaguar"];
// Definimos un índice fóra de rango
const indice = -5;

// Chamamos á función "matriz" co array e o índice
const result = matriz(matrix, indice);
// Amosamos o resultado na consola
console.log(result);