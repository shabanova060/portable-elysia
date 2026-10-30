import { Html } from "@elysia/html";

export function HomePage() {
  const editorialCards = [
    {
      title: "THE KILIAN BAR",
      description: "Inspired by the finest spirits and iconic cocktails",
      ctaText: "DISCOVER PERFUMES",
      href: "/the-liquors",
      image: "/public/kilian_bar.webp",
      alt: "The Kilian Bar perfume flacon with coffee beans and cocktail shaker",
    },
    {
      title: "KILIAN PARIS REFILLS",
      description: "The pleasure never ends",
      ctaText: "DISCOVER REFILLS",
      href: "/refills",
      image: "/public/kilian_refills.webp",
      alt: "Kilian Paris refillable perfume flacon alongside refill bottle",
    },
    {
      title: "SMALL FORMAT, FULL INTENSITY",
      description: "A precious format. Made to choose.",
      ctaText: "THE 30 ML COLLECTION",
      href: "/30ml-collection",
      image: "/public/kilian_small_format.webp",
      alt: "Kilian Paris 30ml perfume collection displayed on pedestals",
    },
  ];

  return (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        <title>
          KILIAN PARIS | Discover KILIAN PARIS exclusive perfumes | Buy now on
          official e-shop
        </title>
        <meta
          name="description"
          content="Discover Luxury French Perfume Online. Buy your favourite KILIAN exclusive and sensual fragrance. Complimentary standard shipping on all orders."
        />
        <meta
          name="keywords"
          content="kilian paris, by kilian, french luxury perfume, niche fragrance house, refillable perfume flacon, angels share perfume, apple brandy on the rocks, roses on ice, old fashioned perfume, cognac accords, straight to heaven white christiane, black phantom momento mori, sacred wood, intoxicated, dark rum and coffee perfume, good girl gone bad by kilian, love don't be shy, rolling in love, can't stop loving you, marshmallow orange blossom perfume, smoke for the soul, smoking hot perfume, back to black aphrodisiac, tobacco and honey fragrance, vodka on the rocks, bamboo harmony, moonlight in heaven"
        />
        <link
          sizes="180x180"
          href="https://www.bykilian.com/sites/kilian/themes/kilian_base/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link
          sizes="32x32"
          href="https://www.bykilian.com/sites/kilian/themes/kilian_base/favicon-32x32.png"
          rel="icon"
        />
        <link
          sizes="16x16"
          href="https://www.bykilian.com/sites/kilian/themes/kilian_base/favicon-16x16.png"
          rel="icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />
        <link rel="stylesheet" href="/public/globals.css" />
        <script src="/public/home.js" defer />
      </head>
      <body class="antialiased bg-white text-neutral-950">
        <aside
          class="bg-black text-neutral-200 text-xs tracking-wide py-2.5 text-center border-b border-neutral-900"
          aria-label="Promotional announcement"
        >
          <p>Enjoy 2 samples and complimentary shipping with every order.</p>
        </aside>

        <header
          id="header"
          class="bg-neutral-950/75 mt-8 border-b border-neutral-900/80 w-full fixed top-0 z-50 transition-colors hover:bg-neutral-950"
        >
          <div class="max-w-6xl mx-auto px-8 pt-6 pb-4 flex flex-col gap-y-7">
            <div class="grid grid-cols-3 items-center">
              <div class="flex items-center gap-x-6 justify-self-start text-neutral-200">
                <button
                  type="button"
                  class="flex items-center gap-x-1.5 text-xs tracking-wider uppercase hover:text-white transition-colors cursor-pointer"
                  aria-label="Select currency or region"
                >
                  <span>$ US</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3.5 text-neutral-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Search"
                  class="hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.25"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="justify-self-center text-center">
                <a
                  href="/"
                  class="inline-flex flex-col items-center group"
                  aria-label="KILIAN PARIS Home"
                >
                  <span class="font-serif italic text-3xl tracking-tight text-white leading-none">
                    Kilian
                  </span>
                  <span class="text-[9px] tracking-[0.35em] uppercase text-neutral-300 mt-1">
                    Paris
                  </span>
                </a>
              </div>
              <div class="flex items-center justify-self-end text-neutral-200">
                <a
                  href="/stores"
                  aria-label="Search for stores"
                  class="px-3.5 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.25"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </a>
                <span class="h-4 w-px bg-neutral-700" aria-hidden="true"></span>
                <a
                  href="/account"
                  aria-label="Your account"
                  class="px-3.5 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.25"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </a>
                <span class="h-4 w-px bg-neutral-700" aria-hidden="true"></span>
                <a
                  href="/cart"
                  aria-label="Shopping Bag (0 items)"
                  class="pl-3.5 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.25"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <nav aria-label="Main navigation" class="flex justify-center">
              <ul class="flex items-center gap-x-11 text-[11px] font-semibold tracking-[0.16em] text-neutral-100">
                <li>
                  <a
                    class="uppercase hover:text-neutral-400 transition-colors"
                    href="/discover"
                  >
                    Discover
                  </a>
                </li>
                <li>
                  <a
                    class="uppercase hover:text-neutral-400 transition-colors"
                    href="/perfumes"
                  >
                    Perfumes
                  </a>
                </li>
                <li>
                  <a
                    class="uppercase hover:text-neutral-400 transition-colors"
                    href="/gift"
                  >
                    Gift Edit
                  </a>
                </li>
                <li>
                  <a
                    class="uppercase hover:text-neutral-400 transition-colors"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    class="uppercase hover:text-neutral-400 transition-colors"
                    href="/brand"
                  >
                    The Brand
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section
            aria-label="Angels' Share Collection Highlight"
            class="relative w-full h-[96vh] min-h-[540px] bg-black overflow-hidden"
          >
            <img
              class="h-full w-full object-cover object-center"
              src="/public/angels_share_hero.webp"
              alt="Angels' Share perfumes on an oak barrel"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              aria-hidden="true"
            />
            <div class="absolute inset-x-0 bottom-10 md:bottom-12 flex flex-col items-center text-center px-6 text-white">
              <h1 class="text-lg md:text-xl font-normal uppercase tracking-[0.06em]">
                A Shared Indulgence of Cognac
              </h1>
              <p class="mt-2 text-xs text-neutral-200 tracking-normal">
                Taste the Kilian Paris Angels' Share Collection
              </p>
              <a
                href="/perfumes/angels-share"
                class="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white underline underline-offset-6 decoration-1 hover:text-neutral-300 transition-colors"
              >
                Discover
              </a>
            </div>
          </section>
          <section
            aria-labelledby="discover-more-heading"
            class="px-6 md:px-10 py-14 md:py-20"
          >
            <h2
              id="discover-more-heading"
              class="text-center text-lg md:text-xl font-normal tracking-[-0.01em] text-neutral-900 mb-10 md:mb-12"
            >
              Discover more
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-12">
              {editorialCards.map((card) => (
                <article class="flex flex-col items-center text-center group">
                  <a
                    href={card.href}
                    class="w-full aspect-square overflow-hidden bg-neutral-100"
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </a>

                  <h3 class="mt-6 text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-950">
                    {card.title}
                  </h3>

                  <p class="mt-1.5 text-xs text-neutral-600">
                    {card.description}
                  </p>

                  <a
                    href={card.href}
                    class="mt-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-950 underline underline-offset-6 decoration-1 hover:text-neutral-600 transition-colors"
                  >
                    {card.ctaText}
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
