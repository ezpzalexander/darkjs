function injectStyles() {
  let style = document.getElementById("custom-dark");
  if (style) return;

  style = document.createElement("style");
  style.id = "custom-dark";

  style.innerHTML = `
    html, body {
      background: #000 !important;
      color: #e8e8e8 !important;
    }

    * {
      background-color: transparent !important;
      color: #e8e8e8 !important;
      border-color: #222 !important;
    }

    a {
      color: #00ff88 !important;
    }

    a:hover {
      text-shadow: 0 0 6px #00ff88;
    }

    article, main, section, div {
      background: rgba(20,20,20,0.6) !important;
      backdrop-filter: blur(8px);
      border-radius: 10px;
    }
  `;

  document.head.appendChild(style);
}

// Run multiple times to beat SlopIt rendering
injectStyles();
document.addEventListener("DOMContentLoaded", injectStyles);
window.addEventListener("load", injectStyles);
setTimeout(injectStyles, 500);
setTimeout(injectStyles, 1500);
