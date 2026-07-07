/**
 * Bootstrap file kept intentionally small.
 * The portfolio runtime is split into:
 * - js/translations.js
 * - js/core.js
 * - js/renderers.js
 * - js/ui.js
 */

(function bootstrapPortfolio() {
  const app = window.PortfolioApp;

  if (!app || typeof app.init !== "function") {
    console.error("PortfolioApp failed to initialize.");
    return;
  }

  const start = () => app.init();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
    return;
  }

  start();
})();
