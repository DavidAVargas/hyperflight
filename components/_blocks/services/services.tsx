import { site } from "@/lib/site";
import CredentialsMarquee from "./credentials-marquee";
import ServiceCard from "./service-card";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-16"
    >
      <CredentialsMarquee />

      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
              SC.02 · What I do
            </p>
            <h2
              id="services-title"
              className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] font-black uppercase"
            >
              One creator.
              <br />
              <span className="text-rec">Four ways</span> to work.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-bone/70">
            Whether you&apos;re a brand looking for reach, a business that
            needs video, or someone ready to box or get in shape, start here.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
