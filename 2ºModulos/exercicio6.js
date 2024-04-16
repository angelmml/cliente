//Funcion na que validaremos o dni
function validaDNI(dni) {

    const comprobaDNI = /^\d{8}[a-zA-Z]$/;

    if (comprobaDNI.test(dni)){
        return alert("Dni válido");
    } else{ return alert("DNI non válido");}

}

export{validaDNI};