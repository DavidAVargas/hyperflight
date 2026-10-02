"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pt-28 pb-10 transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] lg:hidden",
        open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]",
      )}
    >
      <nav aria-label="Mobile">
        <ul className="flex flex-col gap-2">
          {site.navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms" }}
              className={cn(
                "transition-all duration-500 ease-out",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              <a
                href={link.href}
                onClick={onClose}
                className="group flex items-baseline gap-4 py-1"
              >
                <span className="font-mono text-xs text-rec">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-6xl font-black uppercase tracking-tight transition-colors group-hover:text-rec">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{ transitionDelay: open ? "550ms" : "0ms" }}
        className={cn(
          "flex flex-col gap-6 transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        <a
          href={site.cta.href}
          onClick={onClose}
          className="bg-bone py-4 text-center font-display text-xl font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
        >
          {site.cta.label}
        </a>
        <div className="flex justify-between font-mono text-xs tracking-widest text-smoke uppercase">
          {site.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
