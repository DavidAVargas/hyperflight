"use client";
import { useEffect, useState } from "react";
import { getEmail, getMailto } from "@/lib/contact";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers / non-secure contexts: fall back to a hidden textarea.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

// Click-to-reveal email. "Email me" opens the visitor's default mail app;
// "Copy email" covers desktop users on webmail with no mail app set up.
export default function EmailActions() {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  const reveal = () => setEmail(getEmail());

  const openMail = () => {
    reveal();
    window.location.href = getMailto();
  };

  const copy = async () => {
    reveal();
    setCopied(await copyText(getEmail()));
  };

  return (
    <div className="flex flex-col gap-5">
      {email ? (
        <a
          href={getMailto()}
          className="w-fit font-display text-2xl font-bold tracking-wide [overflow-wrap:anywhere] transition-colors hover:text-rec motion-safe:animate-[fade-up_0.4s_ease-out] sm:text-3xl"
        >
          {email}
        </a>
      ) : (
        <button
          type="button"
          onClick={reveal}
          className="group flex w-fit items-center gap-3 border-b border-dashed border-bone/40 pb-1 font-display text-2xl font-bold tracking-wide transition-colors hover:border-rec hover:text-rec sm:text-3xl"
        >
          Click to reveal email
          <span className="font-mono text-xs tracking-[0.2em] text-smoke uppercase transition-colors group-hover:text-rec">
            Show
          </span>
        </button>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={openMail}
          className="group flex items-center justify-center gap-3 bg-bone px-6 py-3.5 font-display text-lg font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
        >
          Email me
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
        <button
          type="button"
          onClick={copy}
          className="flex items-center justify-center gap-2 border border-bone/40 px-6 py-3.5 font-display text-lg font-bold tracking-wide uppercase transition-colors hover:border-bone hover:bg-bone/5"
        >
          {copied ? (
            <>
              Copied <span className="text-rec">✓</span>
            </>
          ) : (
            "Copy email"
          )}
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {copied
          ? "Email address copied to clipboard"
          : email
            ? `Email address: ${email}`
            : ""}
      </p>
    </div>
  );
}
