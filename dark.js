// ===== BASE DARK MODE =====
document.documentElement.style.background = "#000";
document.body.style.background = "#000";
document.body.style.color = "#e8e8e8";

// ===== FONT + GLOBAL STYLE =====
const baseStyle = document.createElement("style");
baseStyle.innerHTML = `
  body {
    font-family: 'Inter', system-ui, sans-serif !important;
    letter-spacing: 0.2px;
    transition: opacity 0.6s ease;
  }

  a {
    transition: all 0.2s ease;
    color: #00ff88 !important;
  }

  a:hover {
    text-shadow: 0 0 8px #00ff88;
  }

  header, main, article, footer {
    backdrop-filter: blur(10px);
  }
`;
document.head.appendChild(baseStyle);

// ===== FADE IN =====
document.body.style.opacity = "0";
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ===== CURSOR GLOW =====
const cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.width = "10px";
cursor.style.height = "10px";
cursor.style.borderRadius = "50%";
cursor.style.background = "#00ff88";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "9999";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ===== SCROLL PROGRESS BAR =====
const bar = document.createElement("div");
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.height = "3px";
bar.style.background = "#00ff88";
bar.style.zIndex = "9999";
document.body.appendChild(bar);

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  bar.style.width = (scroll / height) * 100 + "%";
});

// ===== GLASSMORPHISM EFFECT =====
const glass = document.createElement("style");
glass.innerHTML = `
  article, main, section, div {
    background: rgba(20,20,20,0.4) !important;
    border-radius: 12px;
    padding: 10px;
    backdrop-filter: blur(12px);
  }
`;
document.head.appendChild(glass);

// ===== MATRIX BACKGROUND (LIGHT VERSION) =====
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "01";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);

// ===== FORCE DARK (LIGHTWEIGHT) =====
setInterval(() => {
  document.body.style.background = "#000";
}, 1000);
