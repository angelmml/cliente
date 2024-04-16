window.onload = function(){
    var direccion = prompt("Introduce a direccion:");
    var catastral = prompt("Introduce o valor catastral");
    var anoConstruccion = prompt ("Introduce o ano de construccion");

    var dato = {
        direccion: direccion,
        catastral: catastral,
        anoConstruccion: anoConstruccion
    };

    var datoJSON = JSON.stringify(dato);
    localStorage.setItem('dato', datoJSON);
    var datoRecuperadoJSON = localStorage.getItem('dato');
    var datoRecuperado = JSON.parse(datoRecuperadoJSON);

    document.body.innerHTML = `
    <h2>Informacion da vivienda:<h2>
    <p><strong>Direccion:</strong> ${datoRecuperado.direccion}</p>
    <p><strong>Valor catastral:</strong> ${datoRecuperado.catastral}</p>
    <p><strong>Ano construccion:</strong> ${datoRecuperado.anoConstruccion}</p>
  `;
  localStorage.removeItem('datos');
}


