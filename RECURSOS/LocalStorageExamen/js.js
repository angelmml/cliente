// Definindo un obxecto coa información dun vehículo
var vehiculoInfo = {
    marca: "Toyota",
    modelo: "Corolla",
    numBastidor: "123456789",
    cilindrada: "2000cc",
    numPuertas: "4",
    color: "Vermello",
    nome: "Juan",
    apelido: "Pérez",
    direccion: "Calle 123",
    telefono: "123456789",
    email: "juan@example.com"
};

// Creando un array para gardar múltiples vehículos
let arrayVehiculo = new Array();

// Pedindo ao usuario información sobre os vehículos e gardándoa nun array
for(let i=0; i<2 ; i++){
    let marca1=prompt("Marca?");
    let modelo1=prompt("Modelo?");
    let numBastidor1=prompt("Número de bastidor?");
    let cilindrada1=prompt("Cilindrada?");
    let numPuertas1=prompt("Número de portas?");
    let nome1=prompt("Nome?");
    let apelido1=prompt("Apelidos?");
    let direccion1=prompt("Dirección?");
    let telefono1=prompt("Teléfono?");
    let email1=prompt("Email?");

    // Creando un novo obxecto vehículo e asignándolle a información recollida
    let vehiculo = Object.create(vehiculoInfo);
    vehiculo.marca=marca1;
    vehiculo.modelo=modelo1;
    vehiculo.numBastidor=numBastidor1;
    vehiculo.cilindrada=cilindrada1;
    vehiculo.numPuertas=numPuertas1;
    vehiculo.nome=nome1;
    vehiculo.apelido=apelido1;
    vehiculo.direccion=direccion1;
    vehiculo.telefono=telefono1;
    vehiculo.email=email1;
    arrayVehiculo.push(vehiculo);
}

// Gardando a información dos vehículos no almacenamento local (localStorage)
for(let i=0; i<2 ; i++){
    localStorage.setItem(i,JSON.stringify(arrayVehiculo[i]));
}

// Recuperando a información dos vehículos gardada e mostrándoa na páxina
for (let i = 0; i < arrayVehiculo.length; i++) {
    // Parseando o obxecto JSON gardado de volta a un obxecto JavaScript
    let vehiculoGardado = JSON.parse(localStorage.getItem(i));
    document.write("<h2>Vehículo " + (i + 1) + "</h2>");
    document.write("<p>Marca: " + vehiculoGardado.marca + "</p>");
    document.write("<p>Modelo: " + vehiculoGardado.modelo + "</p>");
    document.write("<p>Número de bastidor: " + vehiculoGardado.numBastidor + "</p>");
    document.write("<p>Cilindrada: " + vehiculoGardado.cilindrada + "</p>");
    document.write("<p>Número de portas: " + vehiculoGardado.numPuertas + "</p>");
    document.write("<p>Nome: " + vehiculoGardado.nome + "</p>");
    document.write("<p>Apelido: " + vehiculoGardado.apelido + "</p>");
    document.write("<p>Dirección: " + vehiculoGardado.direccion + "</p>");
    document.write("<p>Teléfono: " + vehiculoGardado.telefono + "</p>");
    document.write("<p>Email: " + vehiculoGardado.email + "</p>");
    document.write("<hr>");
}
