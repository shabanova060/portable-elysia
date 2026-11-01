import { Html } from "@elysia/html";

export function CategoriesPage() {
  return (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        <title>Perfumes and olfactive families | KILIAN PARIS</title>
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
          <h1>Categories Page</h1>
        </main>
      </body>
    </html>
  );
}
