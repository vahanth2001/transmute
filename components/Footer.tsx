"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8d2c6] bg-[#f7f4ec]">
      <div className="mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
  <img
    src="/icons/Transmute-logo.png"
    alt="Transmute"
    className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
  />

  <span className="text-[25px] font-black tracking-[-1.5px] text-[#182027] sm:text-[29px] lg:text-[32px]">
    TRANSMUTE
  </span>
</div>

        <nav className="hidden items-center gap-8 text-[12px] text-[#30363a] md:flex">
          <Link href="/about">About Us</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/applications">Applications</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-[#a66b10] sm:block">
          Engineered for Smoother, More Reliable Flow.
        </span>
      </div>
    </footer>
  );
}