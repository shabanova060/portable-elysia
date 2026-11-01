const header = document.querySelector("#header");

const handleScroll = () => {
  const isScrolled = window.scrollY > 0;

  header.classList.toggle("mt-8", !isScrolled);
  header.classList.toggle("bg-neutral-950/75", !isScrolled);
  header.classList.toggle("bg-neutral-950", isScrolled);
};

// Passive listener improves scroll performance
window.addEventListener("scroll", handleScroll, { passive: true });

// Run once on load in case the page starts scrolled down
handleScroll();

const createCarousel = (root, { cloneCount = 4 } = {}) => {
  if (!root) return null;

  const track = root.querySelector("[data-carousel-track]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  if (!track) return null;

  const originalSlides = Array.from(
    track.querySelectorAll("[data-carousel-slide]"),
  );

  const totalReal = originalSlides.length;
  const clones = Number(root.dataset.carouselClones) || cloneCount;
  if (totalReal <= clones) return null;

  const controller = new AbortController();
  const { signal } = controller;

  // 1. Clone first and last N cards
  const createClone = (node) => {
    const clone = node.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    return clone;
  };

  track.prepend(...originalSlides.slice(-clones).map(createClone));
  track.append(...originalSlides.slice(0, clones).map(createClone));

  const allSlides = Array.from(track.children);
  let currentIndex = clones;
  let isDown = false;
  let isDragging = false;
  let startX = 0;
  let dragDeltaX = 0;

  const getStepWidth = () => allSlides[1].offsetLeft - allSlides[0].offsetLeft;

  const setPosition = (offsetPx, animate = true) => {
    track.style.transition = animate
      ? "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)"
      : "none";
    track.style.transform = `translate3d(${offsetPx}px, 0, 0)`;
  };

  const syncToIndex = (animate = true) => {
    setPosition(-currentIndex * getStepWidth(), animate);
  };

  const normalizeLoopIndex = () => {
    if (currentIndex >= totalReal + clones) {
      currentIndex -= totalReal;
      syncToIndex(false);
      void track.offsetWidth;
    } else if (currentIndex < clones) {
      currentIndex += totalReal;
      syncToIndex(false);
      void track.offsetWidth;
    }
  };

  const stepBy = (delta) => {
    normalizeLoopIndex();
    currentIndex += delta;
    syncToIndex(true);
  };

  // 2. Arrow Controls & Transition Cleanup
  prevBtn?.addEventListener("click", () => stepBy(-1), { signal });
  nextBtn?.addEventListener("click", () => stepBy(1), { signal });
  track.addEventListener("transitionend", normalizeLoopIndex, { signal });

  // 3. Unified Mouse & Touch Swiping
  track.addEventListener(
    "pointerdown",
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;

      normalizeLoopIndex();
      isDown = true;
      isDragging = false;
      startX = e.clientX;
      dragDeltaX = 0;
    },
    { signal },
  );

  track.addEventListener(
    "pointermove",
    (e) => {
      if (!isDown) return;

      dragDeltaX = e.clientX - startX;

      if (!isDragging && Math.abs(dragDeltaX) > 6) {
        isDragging = true;
        track.setPointerCapture(e.pointerId);
      }

      if (isDragging) {
        setPosition(-currentIndex * getStepWidth() + dragDeltaX, false);
      }
    },
    { signal },
  );

  const endSwipe = () => {
    if (!isDown) return;
    isDown = false;

    if (!isDragging) return;

    const stepWidth = getStepWidth();
    if (Math.abs(dragDeltaX) > stepWidth * 0.2) {
      const cardsMoved =
        Math.sign(dragDeltaX) *
        Math.max(1, Math.round(Math.abs(dragDeltaX) / stepWidth));
      currentIndex -= cardsMoved;
    }

    syncToIndex(true);

    requestAnimationFrame(() => {
      isDragging = false;
    });
  };

  track.addEventListener("pointerup", endSwipe, { signal });
  track.addEventListener("pointercancel", endSwipe, { signal });

  track.addEventListener(
    "click",
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    { capture: true, signal },
  );

  // 4. Resize alignment
  window.addEventListener("resize", () => syncToIndex(false), { signal });

  syncToIndex(false);

  // Public control surface
  return {
    next: () => stepBy(1),
    prev: () => stepBy(-1),
    refresh: () => syncToIndex(false),
    destroy: () => controller.abort(),
  };
};

// Initialize all carousels on the page
document
  .querySelectorAll("[data-carousel]")
  .forEach((el) => createCarousel(el));
