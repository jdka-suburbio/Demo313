const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

const padding = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 60
};

let priceData = [];

async function fetchPrices() {
  const res = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=60');
  const data = await res.json();

  priceData = data.map(k => ({
    time: new Date(k[0]),
    close: parseFloat(k[4])
  }));
}

function drawAxes(minPrice, maxPrice) {
  ctx.strokeStyle = "#ddd";
  ctx.fillStyle = "#444";
  ctx.font = "12px sans-serif";

  const stepsY = 5;
  for (let i = 0; i <= stepsY; i++) {
    const y = padding.top + ((canvas.height - padding.top - padding.bottom) / stepsY) * i;
    const price = maxPrice - ((maxPrice - minPrice) / stepsY) * i;

    // Línea horizontal
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.stroke();

    // Etiqueta Y
    ctx.fillText(`$${price.toFixed(2)}`, 5, y + 4);
  }

  // Eje X - timestamps
  const stepsX = 6;
  const step = Math.floor(priceData.length / stepsX);
  for (let i = 0; i < priceData.length; i += step) {
    const x = padding.left + (i / priceData.length) * (canvas.width - padding.left - padding.right);
    const label = priceData[i].time.toLocaleTimeString().slice(0, 5);
    ctx.fillText(label, x - 10, canvas.height - 10);
  }
}

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (priceData.length < 2) return;

  const prices = priceData.map(p => p.close);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const stepX = (canvas.width - padding.left - padding.right) / (priceData.length - 1);

  drawAxes(minPrice, maxPrice);

  ctx.beginPath();
  ctx.strokeStyle = "#007ACC";
  ctx.lineWidth = 2;

  priceData.forEach((p, i) => {
    const x = padding.left + i * stepX;
    const y = padding.top + ((maxPrice - p.close) / (maxPrice - minPrice)) * (canvas.height - padding.top - padding.bottom);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();

  // Mostrar último precio
  const last = priceData[priceData.length - 1];

  ctx.font = "bold 14px monospace";
  ctx.fillStyle = "#000";
  ctx.fillText(`Último precio: $${last.close.toFixed(2)}`, canvas.width / 2, padding.top - 5);
}

function animate() {
  drawChart();
  requestAnimationFrame(animate);
}

fetchPrices();
setInterval(fetchPrices, 2000);
animate();
