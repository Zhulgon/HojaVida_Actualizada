(function attachPortfolioUi() {
  const app = window.PortfolioApp;

  if (!app) {
    throw new Error("Portfolio core must load before UI helpers.");
  }

  const { state, getCopy, resolveCopy } = app;

  function applyStaticTranslations(copy) {
    document.title = copy.metaTitle;
    document.documentElement.lang = state.locale;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.metaDescription);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", copy.metaTitle);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", copy.metaDescription);
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", copy.metaTitle);
    }

    if (twitterDescription) {
      twitterDescription.setAttribute("content", copy.metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = resolveCopy(node.getAttribute("data-i18n"), copy);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = resolveCopy(node.getAttribute("data-i18n-html"), copy);
    });

    const themeLabel = state.theme === "dark" ? copy.theme.light : copy.theme.dark;
    const themeToggleLabel = document.getElementById("themeToggleLabel");
    const langToggleLabel = document.getElementById("langToggleLabel");
    const menuToggle = document.getElementById("menuToggle");
    const themeToggle = document.getElementById("themeToggle");
    const langToggle = document.getElementById("langToggle");
    const projectsControls = document.querySelector(".projects-controls");
    const heroSignals = document.getElementById("heroSignals");

    if (themeToggleLabel) {
      themeToggleLabel.textContent = themeLabel;
    }

    if (langToggleLabel) {
      langToggleLabel.textContent = state.locale === "es" ? "EN" : "ES";
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-label", copy.nav.menu);
    }

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", `${copy.controls.theme}: ${themeLabel}`);
    }

    if (langToggle) {
      langToggle.setAttribute("aria-label", copy.controls.language);
    }

    if (projectsControls) {
      projectsControls.setAttribute("aria-label", copy.projects.carouselLabel);
    }

    if (heroSignals) {
      heroSignals.setAttribute("aria-label", copy.hero.signalsAria);
    }

    updateContactReveal(copy);
  }

  function updateFooter(copy) {
    const footerCopy = document.getElementById("footerCopy");
    if (!footerCopy) {
      return;
    }

    footerCopy.textContent = copy.footer.copy.replace("{year}", String(new Date().getFullYear()));
  }

  function updateContactReveal(copy) {
    const revealButton = document.getElementById("contactReveal");
    const hint = document.getElementById("contactHint");

    if (!revealButton || !hint) {
      return;
    }

    const emailUser = "jsebastian000124";
    const emailHost = "gmail.com";
    const emailAddress = `${emailUser}@${emailHost}`;

    revealButton.type = "button";
    revealButton.removeAttribute("href");
    revealButton.removeAttribute("target");
    revealButton.removeAttribute("rel");

    if (state.contactUnlocked && state.contactCopied) {
      revealButton.innerHTML = `<i class="fa-solid fa-check"></i><span>${copy.contact.copied}</span>`;
      revealButton.setAttribute("aria-pressed", "true");
      revealButton.setAttribute("aria-label", copy.contact.copied);
      revealButton.classList.add("is-copied");
      hint.textContent = copy.contact.hintCopied;
      return;
    }

    if (state.contactUnlocked) {
      revealButton.innerHTML = `<i class="fa-regular fa-copy"></i><span>${emailAddress}</span>`;
      revealButton.setAttribute("aria-pressed", "true");
      revealButton.setAttribute("aria-label", `${copy.contact.copy}: ${emailAddress}`);
      revealButton.classList.remove("is-copied");
      hint.textContent = copy.contact.hintCopy;
    } else {
      revealButton.innerHTML = `<i class="fa-regular fa-envelope"></i><span>${copy.contact.reveal}</span>`;
      revealButton.setAttribute("aria-pressed", "false");
      revealButton.setAttribute("aria-label", copy.contact.reveal);
      revealButton.classList.remove("is-copied");
      hint.textContent = copy.contact.hint;
    }
  }

  async function copyContactEmail() {
    const emailAddress = "jsebastian000124@gmail.com";

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(emailAddress);
      return;
    }

    const fallbackInput = document.createElement("input");
    fallbackInput.value = emailAddress;
    fallbackInput.setAttribute("readonly", "");
    fallbackInput.style.position = "absolute";
    fallbackInput.style.opacity = "0";
    fallbackInput.style.pointerEvents = "none";
    document.body.appendChild(fallbackInput);
    fallbackInput.select();
    document.execCommand("copy");
    fallbackInput.remove();
  }

  function applyTheme() {
    document.body.setAttribute("data-theme", state.theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", state.theme === "dark" ? "#0d1320" : "#ece5d9");
    }
  }

  function closeMenu() {
    const dropdown = document.getElementById("menuDropdown");
    const toggle = document.getElementById("menuToggle");

    if (!dropdown || !toggle) {
      return;
    }

    dropdown.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function observeReveal() {
    const nodes = document.querySelectorAll(".reveal");

    if (state.revealObserver) {
      state.revealObserver.disconnect();
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    state.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            state.revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((node) => state.revealObserver.observe(node));
  }

  function renderAll() {
    const copy = getCopy();
    applyStaticTranslations(copy);
    updateFooter(copy);
    app.renderSkills(copy);
    app.renderProjects(copy);
    app.renderCredentials(copy);
    app.renderCredentialOrbits(copy);
    app.initCredentialOrbitMotion();
    app.renderExperience(copy);
    observeReveal();
  }

  function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const dropdown = document.getElementById("menuDropdown");
    const menu = document.getElementById("siteMenu");

    if (!toggle || !dropdown || !menu) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    });
  }

  function setupLanguageToggle() {
    const button = document.getElementById("langToggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      state.locale = state.locale === "es" ? "en" : "es";
      localStorage.setItem("portfolio-locale", state.locale);
      renderAll();
    });
  }

  function setupThemeToggle() {
    const button = document.getElementById("themeToggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("portfolio-theme", state.theme);
      applyTheme();
      applyStaticTranslations(getCopy());
    });
  }

  function setupProjectSlider() {
    const prevButton = document.getElementById("projectsPrev");
    const nextButton = document.getElementById("projectsNext");
    const viewport = document.getElementById("projectsViewport");
    const track = document.getElementById("projectsGrid");
    let touchStartX = 0;

    if (!prevButton || !nextButton || !viewport || !track) {
      return;
    }

    prevButton.addEventListener("click", () => {
      app.changeProjectSlide(-1);
    });

    nextButton.addEventListener("click", () => {
      app.changeProjectSlide(1);
    });

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        app.changeProjectSlide(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        app.changeProjectSlide(1);
      }
    });

    viewport.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      (event) => {
        const delta = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 44) {
          return;
        }

        app.changeProjectSlide(delta > 0 ? -1 : 1);
      },
      { passive: true }
    );

    track.addEventListener("click", (event) => {
      if (event.target.closest("a, button, video")) {
        return;
      }

      if (event.target.closest(".project-slide.is-prev")) {
        app.changeProjectSlide(-1);
        return;
      }

      if (event.target.closest(".project-slide.is-next")) {
        app.changeProjectSlide(1);
      }
    });

    track.addEventListener("transitionend", (event) => {
      if (event.target !== track || event.propertyName !== "transform" || !state.projectPendingLoop) {
        return;
      }

      app.completeProjectLoop(getCopy());
    });

    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        app.updateProjectsSlider(getCopy());
      });
    });
  }

  function setupContactReveal() {
    const button = document.getElementById("contactReveal");

    if (!button || button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";

    button.addEventListener("click", async () => {
      if (!state.contactUnlocked) {
        state.contactUnlocked = true;
        state.contactCopied = false;
        updateContactReveal(getCopy());
        return;
      }

      try {
        await copyContactEmail();
        state.contactCopied = true;
        updateContactReveal(getCopy());

        if (state.contactCopyTimeout) {
          window.clearTimeout(state.contactCopyTimeout);
        }

        state.contactCopyTimeout = window.setTimeout(() => {
          state.contactCopied = false;
          updateContactReveal(getCopy());
        }, 1800);
      } catch (error) {
        state.contactCopied = false;
        updateContactReveal(getCopy());
      }
    });
  }

  function setupScrollUI() {
    const updateScrollState = () => {
      document.body.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
  }

  function setupViewportRefresh() {
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        app.initCredentialOrbitMotion();
      });
    });
  }

  function init() {
    if (state.initialized) {
      renderAll();
      return;
    }

    state.initialized = true;
    applyTheme();
    renderAll();
    setupMenu();
    setupLanguageToggle();
    setupThemeToggle();
    setupProjectSlider();
    setupContactReveal();
    setupScrollUI();
    setupViewportRefresh();
  }

  Object.assign(app, {
    applyStaticTranslations,
    updateFooter,
    updateContactReveal,
    copyContactEmail,
    applyTheme,
    closeMenu,
    observeReveal,
    renderAll,
    setupMenu,
    setupLanguageToggle,
    setupThemeToggle,
    setupProjectSlider,
    setupContactReveal,
    setupScrollUI,
    setupViewportRefresh,
    init,
  });
})();
