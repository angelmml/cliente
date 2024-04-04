window.onload = function() {
    var marca = prompt("Introduce a marca");
    var modelo = prompt("Introduce o modelo");
    var num_bast = prompt("Introduce o número de bastidor");
    var cilindrada = prompt("Introduce a cilindrada");
    var portas = prompt("Cantas portas ten?");
    var color = prompt("Introduce o color do coche");
    var nome = prompt("Introduce o nombre do propietario:");
    var apelidos = prompt("Introduce os apelidos do propietario:");


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

    // Mostrar los datos en formato HTML
    document.body.innerHTML = `
        <h2>Información del vehículo:</h2>
        <p><strong>Marca:</strong> ${datoRecuperado.marca}</p>
        <p><strong>Modelo:</strong> ${datoRecuperado.modelo}</p>
        <p><strong>Número de bastidor:</strong> ${datoRecuperado.num_bast}</p>
        <p><strong>Cilindrada:</strong> ${datoRecuperado.cilindrada}</p>
        <p><strong>Número de puertas:</strong> ${datoRecuperado.portas}</p>
        <p><strong>Color:</strong> ${datoRecuperado.color}</p>
        <p><strong>Nome:</strong> ${datoRecuperado.nome}</p>
        <p><strong>Apelidos:</strong> ${datoRecuperado.apelido}</p>
        
    `;
}
