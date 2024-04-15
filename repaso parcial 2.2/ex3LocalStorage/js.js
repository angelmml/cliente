let fechaActual = new Date().toString();

let nomeUsuario = prompt("Escribe o teu nome:");

if (nomeUsuario){
    localStorage.setItem(nomeUsuario, fechaActual);
    console.log("Informacion gardada en LocalStorge:");
    console.log("Nome:", nomeUsuario);
    console.log("Fecha do sistema: ", fechaActual);
}else{
    console.log("Non se metiu un nombre. Non se garda en LocalStorgare.");
}

