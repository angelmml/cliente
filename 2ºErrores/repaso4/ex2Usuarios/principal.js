// principal.js

import { agregarUsuario, eliminarUsuario, buscarUsuario } from "./usuarios.js";


// Función principal
function principal() {


    const opcion = window.prompt('Seleccione una opción:\n1. Agregar usuario\n2. Eliminar usuario\n3. Buscar usuario\n4. Salir');

    switch (opcion) {
        case '1':
            const idUsuarioAgregar = prompt('Ingrese el ID del usuario: ');
            const nombreUsuarioAgregar = prompt('Ingrese el nombre del usuario: ');
            agregarUsuario(idUsuarioAgregar, nombreUsuarioAgregar); // Usamos agregarUsuario sin el prefijo usuarios
            console.log(`Usuario agregado: ${nombreUsuarioAgregar}`);
            principal();
            break;
        case '2':
            const idUsuarioEliminar = prompt('Ingrese el ID del usuario que desea eliminar: ');
            eliminarUsuario(idUsuarioEliminar); // Usamos eliminarUsuario sin el prefijo usuarios
            console.log(`Usuario con ID ${idUsuarioEliminar} eliminado.`);
            principal();
            break;
        case '3':
            const idUsuarioBuscar = prompt('Ingrese el ID del usuario que desea buscar: ');
            const usuarioEncontrado = buscarUsuario(idUsuarioBuscar); // Usamos buscarUsuario sin el prefijo usuarios
            if (usuarioEncontrado) {
                console.log(`Usuario encontrado: ${usuarioEncontrado}`);
            } else {
                console.log(`Usuario con ID ${idUsuarioBuscar} no encontrado.`);
            }
            principal();
            break;
        case '4':
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            principal();
            break;
    }
}

// Llamamos a la función principal para iniciar el programa
principal();
