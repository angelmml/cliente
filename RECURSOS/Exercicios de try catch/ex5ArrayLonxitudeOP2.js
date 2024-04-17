// Definimos a función flecha que obtén un elemento dunha matriz dado un índice
const obtenerElemento = (matriz, indice) => {
    try {
        // Comprobamos se o índice está fóra dos límites da matriz
        if (indice < 0 || indice >= matriz.length) {
            throw new Error('O índice está fora do intervalo da matriz');
        } else {
            // Devolvemos o elemento correspondente ao índice
            return matriz[indice];
        }
    } catch (error) {
        // Devolvemos a mensaxe de erro se ocorre un erro
        return error.message;
    } finally {
        // Amosamos unha mensaxe indicando que se intentou acceder ao elemento, independentemente de se hai un erro ou non
        document.write("Intentouse acceder <br> ");
    }
}

// Exemplo de uso:
const matriz = [10, 20, 30, 40, 50];
document.write(obtenerElemento(matriz, 12) + "<br>"); // Intentamos acceder a un elemento cun índice fora do intervalo
document.write(obtenerElemento(matriz, 3)); // Accedemos a un elemento dentro do intervalo
