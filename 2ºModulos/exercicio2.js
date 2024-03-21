//Creamos a funcion para engadir os datos de prezo e desconto
function calculaPrezo(){
    let prezo = parseFloat(prompt("Introduce o prezo do producto:"));
    let desconto = 20;

    let prezoReducido = prezo - (prezo * desconto)/100;
    console.log('Desconto aplicado: ' + desconto + '%.' + ' Precio final: '+prezoReducido);
    return prezoReducido;

   
}

export {calculaPrezo};