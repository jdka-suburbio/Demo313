const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();         // Iniciar nuevo trazo
ctx.moveTo(50, 50);      // Punto de inicio
ctx.lineTo(200, 100);    // Punto final
ctx.strokeStyle = "red"; // Color del trazo
ctx.lineWidth = 2;       // Grosor
ctx.stroke();            // Dibujar

ctx.fillStyle = "blue";          // Color de relleno
ctx.fillRect(100, 150, 120, 80); // x, y, ancho, alto

ctx.strokeStyle = "black";        // Color del borde
ctx.strokeRect(100, 150, 120, 80);

ctx.beginPath();
ctx.arc(300, 200, 50, 0, 2 * Math.PI); // x, y, radio, inicio, fin
ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.font = "20px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hola Canvas!", 180, 50); // texto, x, y
