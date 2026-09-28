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
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <div className="brand-main">
                <img src="/icons/Transmute-logo.png" alt="" className="brand-symbol"/>
                <span className="brand-name">TRANSMUTE</span>
            </div>
            <span className="brand-tagline">
                Engineered for Smoother, More Reliable Flow.
            </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="header-cta">
          <span>Talk to an Engineer</span>
          <span className="cta-arrow">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span>→</span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Talk to an Engineer
            <span>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}