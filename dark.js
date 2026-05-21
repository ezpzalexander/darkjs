// ===== WAIT FOR FULL PAGE READY =====
function applyTheme() {

  // Force base colors
  document.documentElement.style.setProperty("background", "#000", "important");
  document.documentElement.style.setProperty("color", "#e8e8e8", "important");
  document.body.style.setProperty("background", "#000", "important");
  document.body.style.setProperty("color", "#e8e8e8", "important");

  // Kill white backgrounds aggressively
  document.querySelectorAll("*").forEach(el => {
    el.style.setProperty("background-color", "transparent", "important");
    el.style.setProperty("color", "#e8e8e8", "important");
  });

  // Accent links
  document.querySelectorAll("a").forEach(a => {
    a.style.setProperty("color", "#00ff88", "important");
  });

  console.log("Dark theme applied");
}

// Run ASAP + after load (double safety)
document.addEventListener("DOMContentLoaded", applyTheme);
window.addEventListener("load", applyTheme);

// Re-apply every second (prevents SlopIt overrides)
setInterval(applyTheme, 1000);
