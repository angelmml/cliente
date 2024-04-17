// Obtener el elemento canvas y su contexto
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// Dibujar la cara del emoticón
function dibujarEmoticono() {
  // Dibujar cara
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dibujar ojos
  dibujarOjo(60, 70);
  dibujarOjo(140, 70);

  // Dibujar nariz (triángulo)
  ctx.beginPath();
  ctx.moveTo(100, 100); // Mover el lápiz a la posición central
  ctx.lineTo(90, 120); // Dibujar una línea al punto izquierdo de la nariz
  ctx.lineTo(110, 120); // Dibujar una línea al punto derecho de la nariz
  ctx.closePath(); // Cerrar el trazado
  ctx.fillStyle = "gray"; // Establecer el color de relleno para la nariz
  ctx.fill(); // Rellenar el triángulo

  // Dibujar boca
  ctx.beginPath();
  ctx.arc(100, 120, 40, 0, Math.PI, false);
  ctx.lineWidth = 3;
  ctx.stroke();
}

// Función para dibujar un ojo
function dibujarOjo(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
}

// Llamar a la función para dibujar el emoticón
dibujarEmoticono();
