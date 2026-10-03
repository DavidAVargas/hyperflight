// Highlighted callout so "rates on request" doesn't blend into the lists.
export default function RatesNote() {
  return (
    <div className="mt-12 border border-rec/60 bg-rec/10 p-5 sm:p-6">
      <p className="flex items-center gap-3 font-display text-2xl leading-none font-black uppercase sm:text-3xl">
        <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-rec" />
        Rates available on request
      </p>
      <p className="mt-3 text-sm leading-relaxed text-bone/75 sm:text-base">
        Every project is quoted to fit your goals. Send me an email with what
        you have in mind and I&apos;ll get back to you with a custom quote.
      </p>
    </div>
  );
}
