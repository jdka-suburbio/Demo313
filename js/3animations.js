const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

let x = 0;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 1. limpiar

  ctx.beginPath(); // 2. dibujar círculo
  ctx.arc(x, 150, 30, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  x += 2; // 3. mover a la derecha
  if (x > canvas.width) x = 0;

  requestAnimationFrame(animar); // 4. repetir
}

animar();