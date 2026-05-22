function forceDark() {
  // Base page
  document.documentElement.style.setProperty("background", "#000", "important");
  document.body.style.setProperty("background", "#000", "important");
  document.body.style.setProperty("color", "#e8e8e8", "important");

  // Target visible content containers specifically
  document.querySelectorAll("main, article, section, div").forEach(el => {
    el.style.setProperty("background", "rgba(20,20,20,0.7)", "important");
    el.style.setProperty("color", "#e8e8e8", "important");
  });

  // Fix text elements
  document.querySelectorAll("p, h1, h2, h3, span, li").forEach(el => {
    el.style.setProperty("color", "#e8e8e8", "important");
  });

  // Links
  document.querySelectorAll("a").forEach(a => {
    a.style.setProperty("color", "#00ff88", "important");
  });
}

// Run constantly to beat SlopIt rendering
setInterval(forceDark, 300);
