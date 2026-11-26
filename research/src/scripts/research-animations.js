/**
 * Scroll / load reveals matching micro1.ai/business-owners:
 * opacity 0 + translateY(20px) → opacity 1 + y 0, duration 0.7s,
 * ScrollTrigger start "top 80%", play once.
 * Research hero has no entrance animation.
 */

const REVEAL_DURATION = 0.7;
const REVEAL_Y = 20;
const REVEAL_EASE = "power1.out";
const SCROLL_START = "top 80%";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

async function ensureGsap() {
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    return window.gsap;
  }

  // Reuse DevLink's bundled GSAP + ScrollTrigger (attaches to window).
  await import("../devlink/webflow_modules/devlink-gsap.js");

  if (!window.gsap || !window.ScrollTrigger) {
    throw new Error("GSAP / ScrollTrigger failed to load");
  }

  window.gsap.registerPlugin(window.ScrollTrigger);
  return window.gsap;
}

function revealTargets() {
  return Array.from(document.querySelectorAll("[data-reveal]"));
}

function clearRevealStyles(elements) {
  elements.forEach((el) => {
    el.style.opacity = "";
    el.style.transform = "";
    el.style.willChange = "";
  });
}

function initScrollReveals(gsap, reduced) {
  const elements = revealTargets();
  if (!elements.length) return;

  if (reduced) {
    clearRevealStyles(elements);
    return;
  }

  gsap.set(elements, {
    opacity: 0,
    y: REVEAL_Y,
    force3D: true,
  });

  elements.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: REVEAL_DURATION,
      ease: REVEAL_EASE,
      overwrite: "auto",
      clearProps: "willChange",
      scrollTrigger: {
        trigger: el,
        start: SCROLL_START,
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
}

async function initResearchAnimations() {
  const reduced = prefersReducedMotion();
  document.documentElement.classList.toggle("js-reduced-motion", reduced);

  let gsap;
  try {
    gsap = await ensureGsap();
  } catch (error) {
    console.error("Research animations unavailable", error);
    clearRevealStyles([...document.querySelectorAll("[data-reveal]")]);
    return;
  }

  initScrollReveals(gsap, reduced);

  if (!reduced && window.ScrollTrigger) {
    window.ScrollTrigger.refresh();
  }
}

function boot() {
  if (window.__researchAnimationsBooted) return;
  window.__researchAnimationsBooted = true;
  initResearchAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
