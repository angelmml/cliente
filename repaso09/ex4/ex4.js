// Crear un array de mapas para almacenar los barcos
let barcos = [];

// Pedir el nombre de 5 barcos
for (let i = 0; i < 5; i++) {
    let nombre = prompt("Introduce el nombre del barco:");
    let ano = prompt("Introduce el año de construcción del barco:");

    // Crear un mapa con el nombre y el año de construcción
    let barco = new Map([
        ['Nombre del barco', nombre],
        ['Año de construcción', ano]
    ]);

    // Añadir el barco al array
    barcos.push(barco);
}

// Almacenar los barcos en localStorage
localStorage.setItem('barcos', JSON.stringify(Array.from(barcos, m => [...m])));

// Pedir el nombre del barco a eliminar
let nombreEliminar = prompt("Introduce el nombre del barco que quieres eliminar:");

// Recuperar los barcos de localStorage
let barcosGuardados = JSON.parse(localStorage.getItem('barcos'));

// Buscar el barco a eliminar
let indiceEliminar = barcosGuardados.findIndex(barco => barco[0][1] === nombreEliminar);

if (indiceEliminar !== -1) {
    // Si se encuentra el barco, se elimina
    barcosGuardados.splice(indiceEliminar, 1);
    alert("Barco eliminado.");

    // Guardar los barcos actualizados en localStorage
    localStorage.setItem('barcos', JSON.stringify(barcosGuardados));
} else {
    // Si no se encuentra el barco, se muestra un mensaje
    alert("Barco no encontrado.");
}
