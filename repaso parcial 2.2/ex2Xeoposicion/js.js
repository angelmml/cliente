let fechaActual = new Date();
let mesActual = fechaActual.getMonth();

if(mesActual == 3){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            const longitud = posicion.coords.longitude;
            const latitud = posicion.coords.latitude;
            document.write(`Longitud: ${longitud}, Latitud: ${latitud}`);
        }, (error) => {
            document.error('Error al obtener la ubicación:', error.message);
        });
    }
}