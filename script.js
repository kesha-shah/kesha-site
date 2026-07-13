// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle — remembers choice, falls back to system preference
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const icon = btn.querySelector(".theme-icon");

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function isDark() {
    const t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function paint() {
    icon.textContent = isDark() ? "☀" : "☾";
    btn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  }

  btn.addEventListener("click", function () {
    const next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paint();
  });

  paint();
})();
