function mostrarMenu() {
    console.log("1. Agregar usuario"); // Amosa a opción para agregar un usuario
    console.log("2. Eliminar usuario"); // Amosa a opción para eliminar un usuario
    console.log("3. Buscar usuario"); // Amosa a opción para buscar un usuario
    console.log("4. Saír"); // Amosa a opción para saír do menú
}

function main() {
    let opcion;
    do {
        mostrarMenu(); // Chama a función para amosar o menú
        opcion = parseInt(prompt("Seleccione unha opción:")); // Pide ao usuario que seleccione unha opción
        switch (opcion) {
            case 1:
                let idAgregar = parseInt(prompt("Introduce o ID del usuario:")); // Pide ao usuario que introduza o ID do usuario a agregar
                let nombreAgregar = prompt("Introduce o nome del usuario:"); // Pide ao usuario que introduza o nome do usuario a agregar
                agregarUsuario(idAgregar, nombreAgregar); // Chama a función para agregar un usuario
                break;
            case 2:
                let idEliminar = parseInt(prompt("Introduce o ID do usuario a eliminar:")); // Pide ao usuario que introduza o ID do usuario a eliminar
                eliminarUsuario(idEliminar); // Chama a función para eliminar un usuario
                break;
            case 3:
                let idBuscar = parseInt(prompt("Introduce o ID do usuario a buscar:")); // Pide ao usuario que introduza o ID do usuario a buscar
                let nombreEncontrado = buscarUsuario(idBuscar); // Chama a función para buscar un usuario
                console.log("Nome del usuario:", nombreEncontrado); // Amosa o nome do usuario buscado
                break;
            case 4:
                console.log("Saíndo..."); // Amosa unha mensaxe de saída
                break;
            default:
                console.log("Opción inválida. Inténteo de novo."); // Amosa unha mensaxe de opción inválida
        }
    } while (opcion !== 4); // Repite o bucle mentres a opción non sexa saír
}

main(); // Chama á función principal para executar o programa
