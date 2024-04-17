// Crear un mapa de datos para almacenar información de estudiantes y sus calificaciones
const estudiantes = new Map();

// Agregar información de estudiantes y sus calificaciones al mapa
estudiantes.set('Juan', [8, 7, 9]);
estudiantes.set('María', [6, 8, 7]);
estudiantes.set('Pedro', [9, 9, 10]);

// Función flecha para calcular el promedio de calificaciones de un estudiante
const calcularPromedio = (nombreEstudiante) => {
    try {
        // Obtener las calificaciones del estudiante del mapa
        const calificaciones = estudiantes.get(nombreEstudiante);

        // Calcular el promedio de las calificaciones
        const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;

        if (!Number.isFinite(promedio)) {
            throw new Error(`No se encontraron calificaciones para el estudiante ${nombreEstudiante}`);
        }

        return promedio;
    } catch (error) {
        console.error(error.message);
    }
};

// Llamar a la función para calcular el promedio de calificaciones para un estudiante específico
const nombreEstudiante = 'Juan';
const promedioCalificaciones = calcularPromedio(nombreEstudiante);

// Mostrar el promedio de calificaciones calculado
console.log(`El promedio de calificaciones para ${nombreEstudiante} es: ${promedioCalificaciones}`);
