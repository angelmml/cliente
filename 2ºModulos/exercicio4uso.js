import { mostraContido,crearArray,crearMapa } from "/2ºModulos/exercicio4.js";


function programaPrincipal(str1, str2) {
    var mapa = crearMapa(str1, str2);
    var array = crearArray(str1, str2);
    mostraContido(mapa, array);
}


programaPrincipal("Ana", "Pepe");