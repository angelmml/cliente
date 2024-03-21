//Cargamos alumnos

function cargarAlumnos(dni, nota) {
   const mapaNota = new Map();

    const numeroAlumnos = parseInt(prompt("Introduce el numero de alumnos:"));

    for (let i = 1; i <= numeroAlumnos; i++){
        const dni = prompt("Introduce o dni do alumno: ");
        const nota = prompt("Introduce a nota do alumno: ");
        mapaNota.set(dni, nota);
    }
    return mapaNota;

}

function imprimirAlumnos( mapaNota) {
    console.log("Lista de alumnos");
    for (const (dni, nota) of mapaNota){
        console.log()
    }
}

export{cargarAlumnos, imprimirAlumnos}