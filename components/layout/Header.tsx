"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Applications", href: "/applications" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const solutionItems = [
  {
    label: "Flexible Hose Solutions",
    href: "/solutions/flexible-hose",
  },
  {
    label: "Steel Pipeline Solutions",
    href: "/solutions/steel-pipeline",
  },
  {
    label: "Ceramic Lined Solutions",
    href: "/solutions/ceramic-lined",
  },
  {
    label: "Engineered Transfer Systems",
    href: "/solutions/engineered-transfer",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ded9ce] bg-[#f8f5ed]">
      <div className="mx-auto flex h-[82px] w-full items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2">
            <img
              src="/icons/transmute-logo.png"
              alt="Transmute"
              className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            />

            <span className="text-[25px] font-black tracking-[-1.5px] text-[#182027] sm:text-[29px] lg:text-[32px]">
              TRANSMUTE
            </span>
          </div>

          <span className="mt-1 hidden text-[8px] font-medium tracking-[0.2em] text-[#42474a] sm:block">
            ENGINEERED FOR SMOOTHER, MORE RELIABLE FLOW.
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/about"
            className="py-7 text-[13px] font-medium text-[#30363a] hover:text-[#b77a17]"
          >
            About Us
          </Link>

          {/* SOLUTIONS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSolutionsOpen((prev) => !prev)}
              className="flex items-center gap-2 py-7 text-[13px] font-medium text-[#30363a] hover:text-[#b77a17]"
            >
              Solutions

              <span
                className={`text-[11px] transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* DROPDOWN */}
            <div
              className={`absolute left-1/2 top-full w-[290px] -translate-x-1/2 border border-[#ded9ce] bg-[#f8f5ed] shadow-lg transition-all duration-200 ${
                solutionsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="border-b border-[#ded9ce] px-5 py-4">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-[#b77a17]">
                  OUR SOLUTIONS
                </span>
              </div>

              {solutionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-[#ded9ce] px-5 py-4 last:border-b-0 hover:bg-[#eee9df]"
                  onClick={() => setSolutionsOpen(false)}
                >
                  <span className="text-[12px] font-medium text-[#20272c]">
                    {item.label}
                  </span>

                  <span className="text-[#b77a17] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* OTHER NAV */}
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-7 text-[13px] font-medium text-[#30363a] hover:text-[#b77a17]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 bg-[#b77a17] px-6 py-3 text-[12px] font-semibold text-white hover:bg-black lg:flex"
        >
          Talk to an Engineer
          <span className="text-[17px]">→</span>
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#ded9ce] bg-[#f8f5ed] lg:hidden">
          <nav className="px-6 py-4">

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#ded9ce] py-4 text-sm font-medium"
            >
              About Us
            </Link>

            {/* MOBILE SOLUTIONS */}
            <div className="border-b border-[#ded9ce]">
              <button
                type="button"
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-4 text-sm font-medium"
              >
                Solutions

                <span
                  className={`transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {solutionsOpen && (
                <div className="pb-3 pl-4">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between border-t border-[#ded9ce] py-3 text-[12px] text-[#42474a]"
                    >
                      {item.label}
                      <span className="text-[#b77a17]">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[#ded9ce] py-4 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-between bg-[#b77a17] px-5 py-4 text-sm font-semibold text-white"
            >
              Talk to an Engineer
              <span>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}