"use client";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import Wordmark from "./wordmark";
import Timecode from "./timecode";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-bone transition-all duration-500",
          scrolled && !menuOpen
            ? "border-b border-bone/10 bg-ink/75 py-3 backdrop-blur-md"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 lg:px-10">
          <Wordmark onClick={closeMenu} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {site.navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative flex items-baseline gap-2 py-1"
                  >
                    <span className="font-mono text-[10px] text-smoke transition-colors group-hover:text-rec">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-bold tracking-wide uppercase">
                      {link.label}
                    </span>
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-rec transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden xl:block">
              <Timecode />
            </div>
            <a
              href={site.cta.href}
              className="group hidden items-center gap-2 border border-bone/80 px-5 py-2.5 font-display text-base font-bold tracking-wide uppercase transition-colors hover:border-rec hover:bg-rec sm:flex"
            >
              {site.cta.label}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase lg:hidden"
            >
              {menuOpen ? "Close" : "Menu"}
              <span className="relative block h-2.5 w-6">
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-px bg-bone transition-transform duration-300",
                    menuOpen && "translate-y-[4.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px bg-bone transition-transform duration-300",
                    menuOpen && "-translate-y-[4.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
