"use client";
import { getMailto } from "@/lib/contact";

// Opens the visitor's mail app with a service-specific subject. The address
// is built at click time so it never lands in the page source.
export default function EmailButton({
  label,
  subject,
}: {
  label: string;
  subject: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = getMailto(subject);
      }}
      className="group flex items-center justify-center gap-3 bg-bone px-6 py-3.5 font-display text-lg font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}
