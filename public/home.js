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

(() => {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;

  const track = root.querySelector("[data-carousel-track]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const originalSlides = Array.from(
    track.querySelectorAll("[data-carousel-slide]"),
  );

  const totalReal = originalSlides.length;
  const cloneCount = 4; // Matches max visible cards on desktop
  if (totalReal <= cloneCount) return;

  // 1. Clone first and last N cards for seamless infinite wrapping
  const headClones = originalSlides.slice(0, cloneCount).map((node) => {
    const clone = node.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    return clone;
  });

  const tailClones = originalSlides.slice(-cloneCount).map((node) => {
    const clone = node.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    return clone;
  });

  track.prepend(...tailClones);
  track.append(...headClones);

  const allSlides = Array.from(track.children);
  let currentIndex = cloneCount; // Start at the first real slide
  let isDown = false;
  let isDragging = false;
  let startX = 0;
  let dragDeltaX = 0;

  // Measure the exact distance (card width + grid gap) between two adjacent slides
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

  // If the track sits inside a clone zone, jump invisibly to the real counterpart
  const normalizeLoopIndex = () => {
    if (currentIndex >= totalReal + cloneCount) {
      currentIndex -= totalReal;
      syncToIndex(false);
      void track.offsetWidth; // Force reflow before next animation
    } else if (currentIndex < cloneCount) {
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
  prevBtn?.addEventListener("click", () => stepBy(-1));
  nextBtn?.addEventListener("click", () => stepBy(1));
  track.addEventListener("transitionend", normalizeLoopIndex);

  // 3. Unified Mouse & Touch Swiping (Pointer Events)
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    normalizeLoopIndex();
    isDown = true;
    isDragging = false;
    startX = e.clientX;
    dragDeltaX = 0;
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDown) return;

    dragDeltaX = e.clientX - startX;

    // 6px threshold so clicking "Quick Shop" doesn't trigger a drag
    if (!isDragging && Math.abs(dragDeltaX) > 6) {
      isDragging = true;
      track.setPointerCapture(e.pointerId);
    }

    if (isDragging) {
      const baseOffset = -currentIndex * getStepWidth();
      setPosition(baseOffset + dragDeltaX, false);
    }
  });

  const endSwipe = () => {
    if (!isDown) return;
    isDown = false;

    if (!isDragging) return;

    const stepWidth = getStepWidth();
    const threshold = stepWidth * 0.2;

    if (Math.abs(dragDeltaX) > threshold) {
      // Advance by the number of cards dragged (minimum 1)
      const cardsMoved =
        Math.sign(dragDeltaX) *
        Math.max(1, Math.round(Math.abs(dragDeltaX) / stepWidth));
      currentIndex -= cardsMoved;
    }

    syncToIndex(true);

    // Reset dragging flag on next tick to block accidental button clicks on release
    requestAnimationFrame(() => {
      isDragging = false;
    });
  };

  track.addEventListener("pointerup", endSwipe);
  track.addEventListener("pointercancel", endSwipe);

  // Block click events on child buttons if the user was dragging the track
  track.addEventListener(
    "click",
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true,
  );

  // 4. Keep alignment sharp on viewport resize
  window.addEventListener("resize", () => syncToIndex(false));

  // Initial position
  syncToIndex(false);
})();
