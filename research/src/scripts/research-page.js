const PAGE_SIZE = 4;

function initPaperFilters() {
  const section = document.querySelector("[data-papers-section]");
  if (!section) return;

  const filters = Array.from(
    section.querySelectorAll("[data-filter]")
  );
  const cards = Array.from(
    section.querySelectorAll("[data-paper-card]")
  );
  const loadMore = section.querySelector("[data-papers-load-more]");
  const fade = section.querySelector("[data-papers-fade]");

  let activeFilter = "ALL";
  let visibleCount = PAGE_SIZE;

  function matchingCards() {
    if (activeFilter === "ALL") return cards;
    return cards.filter(
      (card) => card.getAttribute("data-category") === activeFilter
    );
  }

  function render() {
    const matches = matchingCards();
    cards.forEach((card) => {
      card.hidden = true;
    });
    matches.forEach((card, index) => {
      card.hidden = index >= visibleCount;
    });

    const remaining = matches.length - visibleCount;
    if (loadMore) {
      loadMore.hidden = remaining <= 0;
    }
    if (fade) {
      fade.hidden = remaining <= 0;
    }
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.getAttribute("data-filter") || "ALL";
      visibleCount = PAGE_SIZE;
      filters.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      render();
    });
  });

  loadMore?.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    render();
  });

  render();
}

function initFlowModal() {
  const modal = document.querySelector("[data-flow-modal]");
  if (!modal) return;

  const panels = Array.from(
    modal.querySelectorAll("[data-flow-panel]")
  );
  const cards = Array.from(
    document.querySelectorAll("[data-flow-card]")
  );
  const closers = Array.from(
    modal.querySelectorAll("[data-flow-modal-close]")
  );

  let lastFocus = null;

  function openModal(id) {
    lastFocus = document.activeElement;
    panels.forEach((panel) => {
      panel.hidden = panel.getAttribute("data-flow-panel") !== id;
    });
    modal.hidden = false;
    document.body.classList.add("is-flow-modal-open");
    const closeBtn = modal.querySelector(".flow-modal_close");
    closeBtn?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("is-flow-modal-open");
    panels.forEach((panel) => {
      panel.hidden = true;
    });
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-flow-id");
      if (id) openModal(id);
    });
  });

  closers.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function init() {
  initPaperFilters();
  initFlowModal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
