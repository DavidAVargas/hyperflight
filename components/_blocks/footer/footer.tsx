import { site } from "@/lib/site";

const { footer } = site;

const label = "font-mono text-[10px] tracking-[0.3em] text-smoke uppercase";
const link =
  "font-display text-xl font-bold tracking-wide uppercase transition-colors hover:text-rec";

// End credits: closing call to action, credit columns, oversized wordmark.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-16 overflow-hidden border-t border-bone/10"
    >
      <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={label}>SC.04 · Contact</p>
            <h2 className="mt-4 font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] font-black uppercase">
              {footer.headline[0]}
              <br />
              <span className="text-rec">{footer.headline[1]}</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col gap-6">
            <p className="text-base leading-relaxed text-bone/70">
              {footer.note}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.hero.primary.href}
                className="group flex items-center justify-center gap-3 bg-bone px-6 py-3.5 font-display text-lg font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
              >
                {site.hero.primary.label}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={site.hero.secondary.href}
                className="flex items-center justify-center border border-bone/40 px-6 py-3.5 font-display text-lg font-bold tracking-wide uppercase transition-colors hover:border-bone hover:bg-bone/5"
              >
                {site.hero.secondary.label}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-bone/10 pt-10 md:grid-cols-4">
          <nav aria-label="Footer">
            <p className={label}>Navigate</p>
            <ul className="mt-4 flex flex-col gap-2">
              {site.navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={label}>Follow</p>
            <ul className="mt-4 flex flex-col gap-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    {s.label} <span className="text-sm text-smoke">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={label}>Based in</p>
            <p className="mt-4 font-display text-xl font-bold tracking-wide uppercase">
              {site.location}
            </p>
            <p className="mt-1 text-sm text-bone/60">
              Training in person locally, online everywhere.
            </p>
          </div>

          <div>
            <p className={label}>Business</p>
            <a href={site.cta.href} className={`${link} mt-4 inline-block`}>
              Partnerships →
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the bottom edge like a closing frame. */}
      <p
        aria-hidden="true"
        className="mt-16 -mb-[0.22em] text-center font-display text-[21vw] leading-[0.8] font-black tracking-tight text-bone/[0.06] uppercase select-none"
      >
        {site.name}
      </p>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 font-mono text-[10px] tracking-[0.25em] text-smoke uppercase sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>
            © {year} {site.name}
          </span>
          <span className="hidden text-rec md:inline">● End of reel</span>
          <span className="flex gap-6">
            <a
              href={footer.builtBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bone"
            >
              Site by {footer.builtBy.label}
            </a>
            <a href="#top" className="hover:text-bone">
              Back to top ↑
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
