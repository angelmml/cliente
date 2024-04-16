// Creamos a función flecha cos parámetros que queremos
const creaMatriz = (matriz, lonxitude) => {
  try {
    // No try comprobamos se a matriz é un array e se a lonxitude é un número
    if (!Array.isArray(matriz) || typeof lonxitude !== "number") {
      throw new Error("Necesítase un array e unha lonxitude correctos");
    }
    // Creamos o array vacío
    const novaMatriz = [];
    // Con un bucle "for" gardamos a información no array
    for (let i = 0; i < lonxitude; i++) {
      novaMatriz.push(0);
    }
    // Amosamos a mensaxe unha vez engadidos os datos
    console.log(`Intentouse construír un array. Resultado: ${novaMatriz}`);
    // Devolvemos o array
    return novaMatriz;
  } catch (error) {
    // Amosamos a mensaxe de erro se se dan os requisitos
    console.error(error.message);
  } finally {
    // Mensaxe do finally que sempre vai aparecer
    console.log("Intentouse construír un array");
  }
};

// Exemplos de uso
creaMatriz([1, 3, 4, 5, 6], 4);
creaMatriz(null, 33);
creaMatriz([4, 5, 6, 32], "como");
