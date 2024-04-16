window.onload = function() {
    var marca = prompt("Introduce la marca");
    var modelo = prompt("Introduce el modelo");
    var num_bast = prompt("Introduce el número de bastidor");
    var cilindrada = prompt("Introduce la cilindrada");
    var portas = prompt("¿Cuantas puertas tiene?");
    var color = prompt("Introduce el color del coche");
    var nome = prompt("Introduce el nombre del propietario:");
    var apelidos = prompt("Introduce los apellidos del propietario:");

    var dato = {
        marca: marca,
        modelo: modelo,
        num_bast: num_bast,
        cilindrada: cilindrada,
        portas: portas,
        color: color,
        nome: nome,
        apelidos: apelidos
    };

    var datoJSON = JSON.stringify(dato);

    localStorage.setItem('dato', datoJSON);

    var datoRecuperadoJSON = localStorage.getItem('dato');
    var datoRecuperado = JSON.parse(datoRecuperadoJSON);

    // Mostra os datos en formato HTML
    document.body.innerHTML = `
        <h2>Información del vehículo:</h2>
        <p><strong>Marca:</strong> ${datoRecuperado.marca}</p>
        <p><strong>Modelo:</strong> ${datoRecuperado.modelo}</p>
        <p><strong>Número de bastidor:</strong> ${datoRecuperado.num_bast}</p>
        <p><strong>Cilindrada:</strong> ${datoRecuperado.cilindrada}</p>
        <p><strong>Número de puertas:</strong> ${datoRecuperado.portas}</p>
        <p><strong>Color:</strong> ${datoRecuperado.color}</p>
        <p><strong>Nombre:</strong> ${datoRecuperado.nome}</p>
        <p><strong>Apellidos:</strong> ${datoRecuperado.apelidos}</p>
    `;

    
    console.log(datoRecuperado);
    localStorage.removeItem('dato');
}
