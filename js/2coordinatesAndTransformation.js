const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.save(); // Guarda el estado actual

// Mueve el origen del sistema de coordenadas a una nueva posición.
ctx.translate(200, 150); // Mueve el origen a (200, 150)

// Rota el sistema de coordenadas actual. 
// El ángulo debe estar en radianes.
ctx.rotate(Math.PI / 6); // 30 grados
ctx.fillStyle = "orange";
ctx.fillRect(-50, -25, 100, 50); // Centro en el origen actual
ctx.restore(); // Vuelve al estado anterior

ctx.fillStyle = "gray";
ctx.fillRect(10, 10, 80, 30); // Sin transformaciones



