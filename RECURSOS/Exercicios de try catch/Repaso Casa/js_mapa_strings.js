// Crear un mapa de datos para almacenar información sobre países y sus capitales
const paisesCapitales = new Map();

// Agregar información sobre países y sus capitales al mapa
paisesCapitales.set('España', 'Madrid');
paisesCapitales.set('Francia', 'París');
paisesCapitales.set('Italia', 'Roma');
paisesCapitales.set('Alemania', 'Berlín');
paisesCapitales.set('Reino Unido', 'Londres');

// Función flecha para obtener la capital de un país
const obtenerCapital = (nombrePais) => {
    try {
        // Obtener la capital del país del mapa
        const capital = paisesCapitales.get(nombrePais);

        if (!capital) {
            throw new Error(`No se encontró información sobre la capital de ${nombrePais}`);
        }

        return capital;
    } catch (error) {
        console.error(error.message);
    }
};

// Llamar a la función para obtener la capital de un país específico
const nombrePais = 'Francia';
const capitalPais = obtenerCapital(nombrePais);

// Mostrar la capital del país obtenida
console.log(`La capital de ${nombrePais} es: ${capitalPais}`);
