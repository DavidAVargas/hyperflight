import { site } from "@/lib/site";
import BrandDetails from "./brand-details";
import EmailButton from "./email-button";
import RatesNote from "./rates-note";

type Service = (typeof site.services)[number];

const label = "font-mono text-[10px] tracking-[0.3em] text-smoke uppercase";

// Body of a service's detail panel. Brand Partnerships gets the full pitch;
// the rest list what's included plus a service-specific email button.
export default function ServiceDetails({ service }: { service: Service }) {
  const { details } = service;
  const isBrand = service.id === "brand-partnerships";

  return (
    <>
      <p className="mt-6 text-lg leading-relaxed text-bone/80">
        {details.lead}
      </p>

      {details.lists.map((list) => (
        <section key={list.title} className="mt-10">
          <p className={label}>{list.title}</p>
          <ul className="mt-3">
            {list.items.map((item) => (
              <li
                key={item}
                className="border-t border-bone/10 py-3 font-display text-xl font-bold uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {isBrand && <BrandDetails />}

      <RatesNote />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <EmailButton label={details.emailLabel} subject={details.subject} />
        {isBrand && (
          <a
            href="/hyperflight-media-kit.pdf"
            download
            className="flex items-center justify-center gap-2 border border-bone/40 px-6 py-3.5 font-display text-lg font-bold tracking-wide uppercase transition-colors hover:border-bone hover:bg-bone/5"
          >
            Download media kit ↓
          </a>
        )}
      </div>
    </>
  );
}
