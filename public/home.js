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
