// Comprobamos se o navegador soporta a API de notificacións
if (!("Notification" in window)) {
    console.log("Este navegador non soporta notificacións.");
} else {
    // Cando se fai clic no botón "Notificar"
    document.getElementById("notificarBtn").addEventListener("click", function() {
        // Pedimos permiso ó usuario para amosar notificacións
        Notification.requestPermission().then(function (permission) {
            // Comprobamos se o permiso foi concedido polo usuario
            if (permission === "granted") {
                // Creamos e amosamos a notificación
                var notification = new Notification("Notificación en galego", {
                    body: "Esta é unha notificación en galego.",
                    icon: "icono.jpg" // Icona a amosar
                });

                // Engadimos un evento para cando o usuario faga clic na notificación
                notification.onclick = function () {
                    console.log("O usuario clicou na notificación.");
                };
            } else {
                // Se o usuario non concedeu o permiso
                console.log("O usuario non aceptou a petición de notificación.");
            }
        });
    });
}
