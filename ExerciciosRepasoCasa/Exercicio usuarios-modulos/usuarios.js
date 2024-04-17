let usuariosMap = new Map();

function agregarUsuario(idUsuario, nombre) {
    usuariosMap.set(idUsuario, nombre);
}

function eliminarUsuario(idUsuario) {
    usuariosMap.delete(idUsuario);
}

function buscarUsuario(idUsuario) {
    if (usuariosMap.has(idUsuario)) {
        return usuariosMap.get(idUsuario);
    } else {
        return "Usuario no encontrado";
    }
}

export { agregarUsuario, eliminarUsuario, buscarUsuario };