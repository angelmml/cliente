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

let arrayVehiculo = new array();

for(let i=0;i<2;i++){
    let marca1 = prompt("Marca:");
    let modelo1 = promt("Modelo:");
    let numBastidor1 = promt("Bastidor:");
    let cilindrada1 = promt("Cilindrada:");
    let numPuertas1 = promt("N Portas:");
    let color1 = promt("Color:");
    let nombre1 = prompt("Nome dono:");
    let apellido1 = prompt("Apelido:");
    let direccion1 = prompt("Direccion:");
    let telefono1 = prompt("Telefono:");
    let email1 = prompt("Email:");

    let vehiculo = new vehiculoInfo();
    vehiculo.marca = marca1;
    vehiculo.modelo = modelo1;
    vehiculo.numBastidor = numBastidor1;
    vehiculo.cilindrada = cilindrada1;
    vehiculo.numPuertas = numPuertas1;
    vehiculo.color = color1;
    vehiculo.nombre = nombre1;
    vehiculo.apellido = apellido1;
    vehiculo.direccion = direccion1;
    vehiculo.telefono = telefono1;
    vehiculo.email = email1;
    
    arrayVehiculo.push(vehiculo);
}





//Volcar nun for aparte

for(let i = 0; i<2;i++){
    localStorage.setItem(i,JSON.stringify.apply(arrayVehiculo[i]));
}
localStorage.setItem('vehiculoInfo', JSON.stringify(vehiculoInfo));


const vehiculoGuardado = JSON.parse(localStorage.getItem('vehiculoInfo'));


for (const propiedad in vehiculoGuardado) {
    document.write(`${propiedad}: ${vehiculoGuardado[propiedad]} <br>`);
};

//esto é uin ejemplo de acceder a unha variable do objeto
document.write(vehiculoGuardado.marca);