  //num1 e num2 son os parámetros que recibe a función
const flecha1 = (num1, num2) => {
    try {
      const numero1 = Number(num1); // Converte o primeiro parámetro nun número
      const numero2 = Number(num2); // Converte o segundo parámetro nun número
      if (isNaN(numero1) || isNaN(numero2)) { // Comproba se un ou ambos os parámetros non son números
        throw new Error("Un ou dous parámetros non son números"); // Lanza un erro se un ou ambos os parámetros non son números
      }
      return numero1 + numero2; // Devolve a suma dos números
    } catch (error) {
      return error.message; // Devolve a mensaxe de erro se ocorre un erro
    }
  };

  const num1 = (prompt("Introduce o primeiro numero")); // Pide ao usuario que introduza o primeiro número
  const num2 = (prompt("Introduce o segundo numero")); // Pide ao usuario que introduza o segundo número
  const resultado = flecha1(num1, num2); // Chama a función "flecha1" cos números introducidos
  console.log(resultado); // Amosa o resultado na consola


  //num1 e num2 son os parámetros que recibe a función
  const flecha2 = (num1, num2) => {
    
  try {
    const cadena1 = String(num1); // Converte o primeiro parámetro nunha cadea de texto
    const cadena2 = String(num2); // Converte o segundo parámetro nunha cadea de texto
    const concatenado = cadena1 + cadena2; // Concatena as duas cadeas
    return concatenado; // Devolve a cadea concatenada
  } catch (error) {
    return error.message; // Devolve a mensaxe de erro se ocorre un erro
  } finally {
    console.log(concatenado); // Amosa a cadea concatenada, mesmo se ocorreu un erro ou non (sempre que non haxa erro de referencia)
  }
};
