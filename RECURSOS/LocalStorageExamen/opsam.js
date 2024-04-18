// Objeto base para la información del vehículo
var vehiculoInfo = {
    marca: "Toyota",
    modelo: "Corolla",
    numBastidor: "123456789",
    cilindrada: "2000cc",
    numPuertas: "4",
    color: "Rojo",
    nombre: "Juan",
    apellido: "Pérez",
    direccion: "Calle 123",
    telefono: "123456789",
    email: "juan@example.com"
};


// Crear un array vacío para almacenar los vehículos
let arrayVehiculo = [];


// Bucle para solicitar información de múltiples vehículos
for(let i = 0; i < 2; i++) {
    let marca1 = prompt("Marca?");
    let modelo1 = prompt("Modelo?");
    let numBastidor1 = prompt("Numero bastidor?");
    let cilindrada1 = prompt("Cilindrada?");
    let numPuertas1 = prompt("Numero de puertas?");
    let color1 = prompt("Color?");
    let nombre1 = prompt("Nombre?");
    let apellido1 = prompt("Apellido?");
    let direccion1 = prompt("Direccion?");
    let telefono1 = prompt("Telefono?");
    let email1 = prompt("Email?");


    // Crear un nuevo objeto para cada vehículo
    let vehiculo = {
        marca: marca1,
        modelo: modelo1,
        numBastidor: numBastidor1,
        cilindrada: cilindrada1,
        numPuertas: numPuertas1,
        color: color1,
        nombre: nombre1,
        apellido: apellido1,
        direccion: direccion1,
        telefono: telefono1,
        email: email1
    };


    // Agregar el vehículo al array
    arrayVehiculo.push(vehiculo);
}
// Guardar información en el localStorage
for (let i = 0; i < arrayVehiculo.length; i++) {
    localStorage.setItem(i, JSON.stringify(arrayVehiculo[i]));
}


// Recuperar información del localStorage y mostrar en la página usando document.write
for (let i = 0; i < arrayVehiculo.length; i++) {
    let vehiculoGuardado = JSON.parse(localStorage.getItem(i));
    document.write("<h2>Vehículo " + (i + 1) + "</h2>");
    document.write("<p>Marca: " + vehiculoGuardado.marca + "</p>");
    document.write("<p>Modelo: " + vehiculoGuardado.modelo + "</p>");
    document.write("<p>Numero bastidor: " + vehiculoGuardado.numBastidor + "</p>");
    document.write("<p>Cilindrada: " + vehiculoGuardado.cilindrada + "</p>");
    document.write("<p>Numero de puertas: " + vehiculoGuardado.numPuertas + "</p>");
    document.write("<p>Color: " + vehiculoGuardado.color + "</p>");
    document.write("<p>Nombre: " + vehiculoGuardado.nombre + "</p>");
    document.write("<p>Apellido: " + vehiculoGuardado.apellido + "</p>");
    document.write("<p>Direccion: " + vehiculoGuardado.direccion + "</p>");
    document.write("<p>Telefono: " + vehiculoGuardado.telefono + "</p>");
    document.write("<p>Email: " + vehiculoGuardado.email + "</p>");
    document.write("<hr>");
}