// Creamos o mapa na función
function cargarMapa(){
   let fruta = new Map();
   fruta.set( 1,"Fresa");
   fruta.set( 2,"Laranxa");
   fruta.set( 3,"Limón");
   return fruta;
}

function buscaFruta(fruta){
    let clave = prompt("Introduce o codigo da fruta:")

    let frutaSelec = fruta.get(parseInt(clave));
    if (frutaSelec){
        alert(`Existe`)
    }else{
        alert("Non existe.")
    }

    buscaFruta(fruta);
}

export {cargarMapa, buscaFruta}