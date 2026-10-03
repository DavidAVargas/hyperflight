import { site } from "@/lib/site";

// The address is only assembled at click time so it never appears in the HTML.
export function getEmail() {
  const { user, domain } = site.contact.email;
  return `${user}@${domain}`;
}

export function getMailto(subject: string = site.contact.subject) {
  return `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}`;
}
