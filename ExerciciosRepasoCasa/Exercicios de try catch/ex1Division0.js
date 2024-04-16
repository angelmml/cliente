
//Función flecha
const dividir = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("División entre cero non permitida");
        }
        return num1 / num2;
    } catch (error) {
        return error.message;
    }
};

console.log(dividir(10, 2));
console.log(dividir(8, 0));