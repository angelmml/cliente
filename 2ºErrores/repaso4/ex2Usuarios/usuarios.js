// usuarios.js
let usuarioMapa = new Map();

function agregarUsuario(idUsuario, nombre){
  usuarioMapa.set(idUsuario, nombre);
}

function eliminarUsuario(idUsuario){
  usuarioMapa.delete(idUsuario);
}

function buscarUsuario (idUsuario){
  if (usuarioMapa.has(idUsuario)){
    return usuarioMapa.get(idUsuario);
  } else {
    return null; // Semicolon added
  }
}

export {agregarUsuario, eliminarUsuario, buscarUsuario};