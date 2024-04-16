document.getElementById('foto').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            const longitud = posicion.coords.longitude;
            const latitud = posicion.coords.latitude;
            console.log(`Longitud: ${longitud}, Latitud: ${latitud}`);
        }, (error) => {
            console.error('Error al obtener la ubicación:', error.message);
        });
    } else {
        alert('Tu navegador no soporta la geolocalización.');
    }
});
