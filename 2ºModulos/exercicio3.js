/*  Creamos a función para  Crear un programa que teña unha función que separe
    en 2 dous a unha cadea. Pasamos por parámetro un a esa función a un String. */

    function recibeString(){
        let cadea = prompt("Introduce una palabra: ");
        let metade = Math.floor(cadea.length / 2); // Utilizamos Math.floor() para redondear hacia abajo
    
        let primeiraParte = cadea.substring(0, metade);
        let segundaParte = cadea.substring(metade);
    
        if (cadea.length % 2 !== 0){
            segundaParte = cadea.substring(metade) + '0';
            primeiraParte = cadea.substring(0, metade + 1);
        }
    
        console.log(primeiraParte);
        console.log(segundaParte);
    }
    export {recibeString};