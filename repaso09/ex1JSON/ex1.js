window.onload = function(){
    var nome = prompt("Introduce o nome:");
    var portoBase = prompt("Introduce o Porto Base");
    var anoConstruccion = prompt ("Introduce o ano de construccion");
    var eslora = prompt ("Introduce o tamaño da eslora");


    var barco = {
        nome: nome,
        portoBase: portoBase,
        anoConstruccion: anoConstruccion,
        eslora : eslora
    };

    var barcoJSON = JSON.stringify(barco);
    localStorage.setItem('barco', barcoJSON);
    var barcoRecuperadoJSON = localStorage.getItem('barco');
    var barcoRecuperado = JSON.parse(barcoRecuperadoJSON);

    document.body.innerHTML = `
    <h2>Informacion da vivienda:<h2>
    <p><strong>Direccion:</strong> ${barcoRecuperado.nome}</p>
    <p><strong>Valor catastral:</strong> ${barcoRecuperado.portoBase}</p>
    <p><strong>Ano construccion:</strong> ${barcoRecuperado.anoConstruccion}</p>
    <p><strong>Ano construccion:</strong> ${barcoRecuperado.eslora}</p>

  `;
  console.log(barcoRecuperado);
}


