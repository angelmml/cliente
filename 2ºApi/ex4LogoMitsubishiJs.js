const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Función para dibujar un triángulo equilátero
function dibujarTriangulo(x, y, lado, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + lado / 2, y + lado * Math.sqrt(3) / 2);
    ctx.lineTo(x - lado / 2, y + lado * Math.sqrt(3) / 2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// Dibujar los tres triángulos del logo
dibujarTriangulo(100, 100, 50, "red");

