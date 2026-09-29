"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Applications", href: "/applications" },
  { label: "Insights", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-cream">
      {/* HEADER BAR */}
      <div
        className="
          flex w-full items-center
          px-[clamp(14px,3vw,120px)]
          h-[clamp(64px,5vw,100px)]
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 flex-col"
        >
          <div className="flex items-center gap-[clamp(6px,0.6vw,14px)]">
            {/* Transmute Symbol */}
            <div
              className="
                flex shrink-0 items-center justify-center
                h-[clamp(28px,2.5vw,52px)]
                w-[clamp(28px,2.5vw,52px)]
              "
            >
              <img
                src="/icons/transmute-logo.png"
                alt="Transmute"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Wordmark */}
            <span
              className="
                whitespace-nowrap
                text-[clamp(17px,1.8vw,40px)]
                font-bold
                tracking-[0.18em]
                text-black
              "
            >
              TRANSMUTE
            </span>
          </div>

          {/* Tagline */}
          <span
            className="
              mt-[clamp(2px,0.25vw,5px)]
              hidden
              text-[clamp(10px,0.75vw,15px)]
              font-medium
              tracking-[0.08em]
              text-muted
              sm:block
            "
          >
            Engineered for Smoother, More Reliable Flow.
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="
            ml-auto hidden
            items-center
            gap-[clamp(16px,2vw,42px)]
            lg:flex
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                group relative
                whitespace-nowrap
                py-2
                text-[clamp(15px,0.95vw,20px)]
                font-medium
                text-black
                transition-colors
                duration-200
                hover:text-gold
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gold
                  transition-all
                  duration-200
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="
            ml-[clamp(16px,2.5vw,50px)]
            hidden
            h-[clamp(36px,2.7vw,54px)]
            shrink-0
            items-center
            gap-[clamp(8px,0.8vw,16px)]
            bg-black
            px-[clamp(14px,1.4vw,30px)]
            text-[clamp(10px,0.9vw,20px)]
            font-semibold
            text-white
            transition-colors
            duration-200
            hover:bg-gold
            lg:flex
          "
        >
          <span>Talk to an Engineer</span>

          <span
            className="
              text-[clamp(14px,1vw,21px)]
              leading-none
            "
          >
            →
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            ml-auto
            flex
            h-11
            w-11
            shrink-0
            flex-col
            items-center
            justify-center
            gap-[5px]
            lg:hidden
          "
        >
          <span
            className={`
              block
              h-[1.5px]
              w-6
              bg-black
              transition-transform
              duration-200
              ${
                menuOpen
                  ? "translate-y-[6.5px] rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              block
              h-[1.5px]
              w-6
              bg-black
              transition-opacity
              duration-200
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              block
              h-[1.5px]
              w-6
              bg-black
              transition-transform
              duration-200
              ${
                menuOpen
                  ? "-translate-y-[6.5px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`
          overflow-hidden
          border-t
          border-border
          bg-cream
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="
            w-full
            px-[clamp(14px,3vw,80px)]
            pb-5
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-border
                py-4
                text-sm
                font-medium
                text-black
              "
            >
              <span>{item.label}</span>

              <span className="text-lg text-gold">
                →
              </span>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-5
              flex
              h-12
              items-center
              justify-between
              bg-black
              px-5
              text-sm
              font-semibold
              text-white
            "
          >
            <span>Talk to an Engineer</span>

            <span className="text-lg">
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}