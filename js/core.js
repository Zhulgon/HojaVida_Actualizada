(function initializePortfolioCore() {
  const translations = window.PortfolioTranslations;

  if (!translations) {
    throw new Error("Portfolio translations must load before the core runtime.");
  }

  const state = {
    locale: localStorage.getItem("portfolio-locale") || "es",
    theme: "dark",
    projectIndex: 0,
    projectAnimating: false,
    projectPendingLoop: null,
    contactUnlocked: false,
    contactCopied: false,
    contactCopyTimeout: null,
    revealObserver: null,
    orbitAnimationFrame: null,
    initialized: false,
  };

  function getCopy() {
    return translations[state.locale];
  }

  function resolveCopy(path, source) {
    return path.split(".").reduce((value, key) => (value ? value[key] : ""), source);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (typeof text === "string") {
      element.textContent = text;
    }

    return element;
  }

  function isExternalHref(href) {
    return /^https?:\/\//.test(href);
  }

  function buildLinkChip(link) {
    const anchor = createElement("a", "link-chip", link.label);
    const external = isExternalHref(link.href);

    anchor.href = link.href;

    if (external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }

    anchor.innerHTML = external
      ? `${link.label} <i class="fa-solid fa-arrow-up-right-from-square"></i>`
      : `${link.label} <i class="fa-solid fa-arrow-right"></i>`;

    return anchor;
  }

  window.PortfolioApp = {
    translations,
    state,
    getCopy,
    resolveCopy,
    createElement,
    isExternalHref,
    buildLinkChip,
  };
})();
