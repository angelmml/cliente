//Función flecha que converte unha cadea nun número, lanzando un erro se a cadea non é válida ou non existe.
const cadena = (cadena1) => {
  try {
    if (cadena1) {
      const numero = Number(cadena1); // Converte a cadea nun número
      if (isNaN(numero)) {
        // Comproba se o número é NaN
        throw new Error("Non é un número válido"); // Lanza un erro se non é un número válido
      }
      return numero; // Devolve o número se é válido
    } else {
      throw new Error("Cadena non existente"); // Lanza un erro se a cadea non existe
    }
  } catch (error) {
    return error.message; // Devolve a mensaxe de erro
  }
};

const cadena1 = "33"; // Define unha cadea
const resultado = cadena(cadena1); // Chama á función "cadena" coa cadea
console.log(resultado); // Amosa o resultado na consola
