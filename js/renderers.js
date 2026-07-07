(function attachPortfolioRenderers() {
  const app = window.PortfolioApp;

  if (!app) {
    throw new Error("Portfolio core must load before renderers.");
  }

  const { state, createElement, buildLinkChip, getCopy } = app;

  function buildCredentialTools(tools) {
    const stack = createElement("div", "credential-stack");
    const grid = createElement("div", "credential-tool-grid");
    const orbitDuration = Math.max(18, tools.length * 2.35);

    grid.classList.add("credential-tool-grid-constellation");

    tools.forEach((tool, index) => {
      const orbitNode = createElement("div", "credential-orbit-node");
      const item = createElement("div", "credential-tool");
      const icon = createElement("span", "credential-tool-icon");
      const label = createElement("span", "credential-tool-label", tool.label);
      const orbitDelay = `${(-orbitDuration / tools.length) * index}s`;

      item.style.setProperty("--tool-color", tool.color);
      orbitNode.style.setProperty("--orbit-duration", `${orbitDuration}s`);
      orbitNode.style.setProperty("--orbit-delay", orbitDelay);
      item.style.setProperty("--orbit-duration", `${orbitDuration}s`);
      item.style.setProperty("--orbit-delay", orbitDelay);

      if (tool.icon) {
        icon.innerHTML = `<i class="${tool.icon}"></i>`;
      } else {
        icon.appendChild(createElement("span", "credential-tool-abbr", tool.abbr));
      }

      item.append(icon, label);
      orbitNode.appendChild(item);
      grid.appendChild(orbitNode);
    });

    stack.appendChild(grid);
    return stack;
  }

  function renderCredentialOrbits(copy) {
    const panel = document.getElementById("credentialsOrbitPanel");
    if (!panel) {
      return;
    }

    const orbitItems = copy.credentials.items.filter((item) => item.tools?.length);
    panel.innerHTML = "";
    panel.hidden = orbitItems.length === 0;

    if (!orbitItems.length) {
      return;
    }

    const shell = createElement("div", "formation-orbits-shell");
    const heading = createElement("div", "formation-orbits-heading");
    const title = createElement("h3", "", copy.credentials.orbitTitle);
    const intro = createElement("p", "", copy.credentials.orbitIntro);
    const grid = createElement("div", "formation-orbits-grid");

    heading.append(title, intro);

    orbitItems.forEach((item, index) => {
      const orbitCard = createElement("article", `formation-orbit-card${index % 2 === 1 ? " reveal-delay" : ""}`);
      const orbit = buildCredentialTools(item.tools);
      const caption = createElement("p", "formation-orbit-caption", item.title);

      orbitCard.append(orbit, caption);
      grid.appendChild(orbitCard);
    });

    shell.append(heading, grid);
    panel.appendChild(shell);
  }

  function stopCredentialOrbitMotion() {
    if (state.orbitAnimationFrame) {
      window.cancelAnimationFrame(state.orbitAnimationFrame);
      state.orbitAnimationFrame = null;
    }
  }

  function resetCredentialOrbitLayout(orbitGrids) {
    orbitGrids.forEach((grid) => {
      grid.querySelectorAll(".credential-orbit-node").forEach((node) => {
        const item = node.firstElementChild;
        const label = item?.querySelector(".credential-tool-label");
        const icon = item?.querySelector(".credential-tool-icon");

        node.style.left = "";
        node.style.top = "";
        node.style.zIndex = "";

        if (!item) {
          return;
        }

        item.style.opacity = "";
        item.style.transform = "";
        item.style.filter = "";
        item.style.pointerEvents = "";

        if (label) {
          label.style.opacity = "";
        }

        if (icon) {
          icon.style.boxShadow = "";
        }
      });
    });
  }

  function initCredentialOrbitMotion() {
    stopCredentialOrbitMotion();

    const orbitGrids = Array.from(document.querySelectorAll(".credential-tool-grid-constellation"));
    if (!orbitGrids.length) {
      return;
    }

    const compactLayout = window.matchMedia("(max-width: 560px)").matches;
    if (compactLayout) {
      resetCredentialOrbitLayout(orbitGrids);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const orbitConfigs = orbitGrids.map((grid, gridIndex) => ({
      grid,
      direction: gridIndex % 2 === 0 ? 1 : -1,
      nodes: Array.from(grid.querySelectorAll(".credential-orbit-node")),
    }));

    const renderFrame = (time) => {
      const seconds = time / 1000;

      orbitConfigs.forEach(({ nodes, direction }, gridIndex) => {
        const total = nodes.length;
        const baseAngle = gridIndex === 0 ? Math.PI * 0.58 : Math.PI * 0.42;
        const orbitSpeed = reducedMotion ? 0 : 0.22 + total * 0.005;
        const radiusX = 33;
        const radiusY = 24;

        nodes.forEach((node, index) => {
          const item = node.firstElementChild;
          if (!item) {
            return;
          }

          const angle = baseAngle + (Math.PI * 2 * index) / total + seconds * orbitSpeed * direction;
          const depth = (Math.sin(angle) + 1) / 2;
          const x = 50 + Math.cos(angle) * radiusX;
          const y = 48 + Math.sin(angle) * radiusY;
          const opacity = Math.max(0, Math.min(1, (depth - 0.14) / 0.86));
          const scale = 0.74 + depth * 0.34;
          const label = item.querySelector(".credential-tool-label");
          const icon = item.querySelector(".credential-tool-icon");

          node.style.left = `${x}%`;
          node.style.top = `${y}%`;
          node.style.zIndex = String(Math.round(depth * 100));

          item.style.opacity = opacity.toFixed(3);
          item.style.transform = `translate(-50%, -50%) scale(${scale})`;
          item.style.filter = `blur(${(1 - depth) * 1.1}px)`;
          item.style.pointerEvents = opacity > 0.42 ? "auto" : "none";

          if (label) {
            label.style.opacity = Math.max(0.2, opacity).toFixed(3);
          }

          if (icon) {
            icon.style.boxShadow = depth > 0.54
              ? `inset 0 0 0 1px color-mix(in srgb, var(--tool-color) 26%, transparent), 0 14px 28px color-mix(in srgb, var(--tool-color) 16%, transparent)`
              : `inset 0 0 0 1px color-mix(in srgb, var(--tool-color) 18%, transparent)`;
          }
        });
      });

      if (!reducedMotion) {
        state.orbitAnimationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    if (reducedMotion) {
      renderFrame(0);
      return;
    }

    state.orbitAnimationFrame = window.requestAnimationFrame(renderFrame);
  }

  function renderSkills(copy) {
    const grid = document.getElementById("skillsGrid");
    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    copy.skills.items.forEach((item, index) => {
      const card = createElement("article", `skill-card reveal${index % 2 === 1 ? " reveal-delay" : ""}`);
      const title = createElement("h3", "", item.title);
      const summary = createElement("p", "skill-summary", item.summary);
      const techGrid = createElement("div", "tech-grid");

      card.style.setProperty("--skill-accent", item.accent);

      if (item.tools.length <= 4) {
        techGrid.classList.add("tech-grid-compact");
      }

      item.tools.forEach((tool) => {
        const tile = createElement("div", "tech-item");
        const icon = createElement("div", "tech-icon");
        const label = createElement("span", "tech-label", tool.label);

        tile.style.setProperty("--tool-color", tool.color);

        if (tool.icon) {
          icon.innerHTML = `<i class="${tool.icon}"></i>`;
        } else {
          icon.appendChild(createElement("span", "tech-abbr", tool.abbr));
        }

        tile.append(icon, label);
        techGrid.appendChild(tile);
      });

      card.append(title, summary, techGrid);
      grid.appendChild(card);
    });
  }

  function buildProjectVisual(project) {
    const visual = createElement("div", "project-visual");

    if (project.video) {
      const video = document.createElement("video");
      visual.classList.add("has-video");
      video.src = project.video;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", `${project.name} demo`);
      visual.appendChild(video);
      return visual;
    }

    if (project.image) {
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = project.name;
      image.loading = "lazy";
      image.decoding = "async";
      visual.appendChild(image);
      return visual;
    }

    const fallback = createElement("div", "project-visual-fallback");
    const mark = createElement("div", "project-fallback-mark", project.fallback || project.name.slice(0, 2));
    const lines = createElement("div", "project-fallback-lines");

    for (let index = 0; index < 4; index += 1) {
      lines.appendChild(createElement("span"));
    }

    fallback.append(mark, lines);
    visual.appendChild(fallback);
    return visual;
  }

  function getProjectLoopCloneCount(total) {
    if (total <= 1) {
      return 0;
    }

    return Math.min(2, total);
  }

  function normalizeProjectIndex(index, total) {
    if (total <= 0) {
      return 0;
    }

    return ((index % total) + total) % total;
  }

  function getRenderedProjectIndex(total) {
    return state.projectIndex + getProjectLoopCloneCount(total);
  }

  function updateProjectsSlider(copy, options = {}) {
    const track = document.getElementById("projectsGrid");
    const viewport = document.getElementById("projectsViewport");
    const status = document.getElementById("projectsStatus");
    const prevButton = document.getElementById("projectsPrev");
    const nextButton = document.getElementById("projectsNext");
    const { renderedIndex = null, disableTransition = false } = options;

    if (!track || !viewport || !status || !prevButton || !nextButton) {
      return;
    }

    const slides = Array.from(track.children);
    const total = copy.projects.items.length;
    const currentRenderedIndex = renderedIndex ?? getRenderedProjectIndex(total);
    const compactCarousel = window.matchMedia("(max-width: 860px)").matches;

    state.projectIndex = normalizeProjectIndex(state.projectIndex, total);

    prevButton.disabled = total <= 1;
    nextButton.disabled = total <= 1;
    prevButton.setAttribute("aria-label", copy.projects.prevLabel);
    nextButton.setAttribute("aria-label", copy.projects.nextLabel);
    viewport.setAttribute("aria-label", copy.projects.carouselLabel);

    status.textContent = copy.projects.counter
      .replace("{current}", String(state.projectIndex + 1).padStart(2, "0"))
      .replace("{total}", String(total).padStart(2, "0"));

    slides.forEach((slide, index) => {
      const isActive = index === currentRenderedIndex;
      const isNext = total > 1 && index === currentRenderedIndex + 1;
      const isPrev = total > 1 && index === currentRenderedIndex - 1;
      const useDesktopNeighbors = !compactCarousel;

      slide.classList.toggle("is-active", isActive);
      slide.classList.toggle("is-next", useDesktopNeighbors && isNext);
      slide.classList.toggle("is-prev", useDesktopNeighbors && isPrev);
      slide.classList.toggle("is-far", useDesktopNeighbors && !isActive && !isNext && !isPrev);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    const activeSlide = slides[currentRenderedIndex];
    if (!activeSlide) {
      return;
    }

    track.style.transition = disableTransition ? "none" : "";
    track.style.transform = `translateX(-${activeSlide.offsetLeft}px)`;

    if (disableTransition) {
      track.getBoundingClientRect();
      track.style.transition = "";
    }
  }

  function completeProjectLoop(copy) {
    if (!state.projectPendingLoop) {
      return;
    }

    const { projectIndex, renderedIndex } = state.projectPendingLoop;
    state.projectPendingLoop = null;
    state.projectIndex = projectIndex;

    window.requestAnimationFrame(() => {
      updateProjectsSlider(copy, { renderedIndex, disableTransition: true });
      window.requestAnimationFrame(() => {
        state.projectAnimating = false;
      });
    });
  }

  function changeProjectSlide(step) {
    const copy = getCopy();
    const total = copy.projects.items.length;
    const cloneCount = getProjectLoopCloneCount(total);

    if (total <= 1 || state.projectAnimating || step === 0) {
      return;
    }

    state.projectIndex = normalizeProjectIndex(state.projectIndex, total);

    if (step > 0 && state.projectIndex === total - 1) {
      state.projectAnimating = true;
      state.projectPendingLoop = {
        projectIndex: 0,
        renderedIndex: cloneCount,
      };
      updateProjectsSlider(copy, { renderedIndex: total + cloneCount });
      return;
    }

    if (step < 0 && state.projectIndex === 0) {
      state.projectAnimating = true;
      state.projectPendingLoop = {
        projectIndex: total - 1,
        renderedIndex: total + cloneCount - 1,
      };
      updateProjectsSlider(copy, { renderedIndex: cloneCount - 1 });
      return;
    }

    state.projectIndex = normalizeProjectIndex(state.projectIndex + step, total);
    updateProjectsSlider(copy);
  }

  function renderProjects(copy) {
    const track = document.getElementById("projectsGrid");
    if (!track) {
      return;
    }

    const items = copy.projects.items;
    const cloneCount = getProjectLoopCloneCount(items.length);
    const slidesData = items.map((project, index) => ({ project, index, isClone: false }));

    state.projectAnimating = false;
    state.projectPendingLoop = null;
    state.projectIndex = normalizeProjectIndex(state.projectIndex, items.length);
    track.innerHTML = "";

    if (cloneCount > 0) {
      const leadingClones = items.slice(-cloneCount).map((project, offset) => ({
        project,
        index: items.length - cloneCount + offset,
        isClone: true,
      }));
      const trailingClones = items.slice(0, cloneCount).map((project, index) => ({
        project,
        index,
        isClone: true,
      }));

      slidesData.unshift(...leadingClones);
      slidesData.push(...trailingClones);
    }

    slidesData.forEach(({ project, index, isClone }) => {
      const slide = createElement("div", "project-slide");
      const card = createElement("article", `project-card ${project.kind}`);
      const list = document.createElement("ul");
      const tags = createElement("div", "project-tags");
      const links = createElement("div", "project-links");

      slide.dataset.projectIndex = String(index);
      if (isClone) {
        slide.dataset.clone = "true";
      }

      project.bullets.forEach((bullet) => {
        list.appendChild(createElement("li", "", bullet));
      });

      project.tags.forEach((tag) => {
        tags.appendChild(createElement("span", "tag", tag));
      });

      project.links.forEach((link) => {
        links.appendChild(buildLinkChip(link));
      });

      card.append(
        buildProjectVisual(project),
        createElement("p", "project-meta", project.meta),
        createElement("h3", "", project.title),
        createElement("p", "project-summary", project.summary),
        list,
        tags,
        links,
        createElement("p", "project-note", project.name)
      );

      slide.appendChild(card);
      track.appendChild(slide);
    });

    updateProjectsSlider(copy);
  }

  function renderCredentials(copy) {
    const grid = document.getElementById("credentialsGrid");
    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    copy.credentials.items.forEach((item, index) => {
      const card = createElement("article", `credential-card formation-card reveal${index % 2 === 1 ? " reveal-delay" : ""}`);
      const icon = createElement("div", "credential-icon");
      const badges = createElement("div", "project-badges");

      icon.innerHTML = `<i class="${item.icon}"></i>`;

      item.badges.forEach((badge) => {
        badges.appendChild(createElement("span", "badge-chip", badge));
      });

      card.append(
        icon,
        createElement("p", "credential-topline", item.topline),
        createElement("h3", "", item.title)
      );

      if (item.details?.length) {
        const detailList = createElement("ul", "credential-detail-list");

        item.details.forEach((detail) => {
          const entry = createElement("li", "credential-detail-item");
          entry.appendChild(createElement("strong", "credential-detail-label", detail.label));

          if (detail.description) {
            entry.appendChild(createElement("p", "credential-detail-copy", detail.description));
          }

          detailList.appendChild(entry);
        });

        card.appendChild(detailList);
      } else if (item.body) {
        card.appendChild(createElement("p", "", item.body));
      }

      card.appendChild(badges);

      if (item.link) {
        card.appendChild(buildLinkChip(item.link));
      }

      grid.appendChild(card);
    });
  }

  function renderExperience(copy) {
    const grid = document.getElementById("experienceGrid");
    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    copy.experience.items.forEach((item) => {
      const card = createElement("article", "timeline-card experience-story-card reveal");
      const list = createElement("ul", "experience-story-list");

      card.append(
        createElement("p", "credential-topline", item.topline),
        createElement("h3", "", item.title),
        createElement("p", "experience-story-copy", item.body)
      );

      item.highlights.forEach((highlight) => {
        list.appendChild(createElement("li", "", highlight));
      });

      card.append(list, createElement("p", "experience-story-closing", item.closing));
      grid.appendChild(card);
    });
  }

  Object.assign(app, {
    buildCredentialTools,
    renderCredentialOrbits,
    stopCredentialOrbitMotion,
    initCredentialOrbitMotion,
    renderSkills,
    buildProjectVisual,
    getProjectLoopCloneCount,
    normalizeProjectIndex,
    getRenderedProjectIndex,
    updateProjectsSlider,
    completeProjectLoop,
    changeProjectSlide,
    renderProjects,
    renderCredentials,
    renderExperience,
  });
})();
