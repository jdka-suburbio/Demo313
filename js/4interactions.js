const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

let dibujando = false;

canvas.addEventListener("mousedown", (e) => {
  dibujando = true;
  const pos = obtenerPosicion(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mousemove", (e) => {
  if (!dibujando) return;
  const pos = obtenerPosicion(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.stroke();
});

function obtenerPosicion(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

canvas.addEventListener("mouseup", () => {
  dibujando = false;
});

canvas.addEventListener("mouseleave", () => {
  dibujando = false;
});
