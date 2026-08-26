"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Products", href: "/#products" },
  { label: "Open Source", href: "/#opensource" },
  { label: "Experience", href: "/#experience" },
];

const NavSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-[var(--bg-blur)] backdrop-blur-[12px]">
      <div className="flex items-center justify-between gap-6 px-gutter py-[18px]">
        <Link
          href="/#top"
          className="text-[15px] font-semibold tracking-[0.02em]"
          onClick={() => setOpen(false)}
        >
          SOUNAK<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-[26px] text-[11.5px] uppercase tracking-[0.14em] nav:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted transition-colors hover:text-accent-2"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/#contact"
            className="border border-line-4 px-4 py-[9px] tracking-[0.12em] transition-colors hover:border-accent hover:text-accent-2"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 nav:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-px w-6 bg-fg transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-fg transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex flex-col border-t border-line px-gutter py-2 nav:hidden"
        >
          {[...navItems, { label: "Contact", href: "/#contact" }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center text-[13px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavSection;
