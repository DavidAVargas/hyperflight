import heroPortrait from "@/public/images/hf-hero.jpg";
import armsCrossed from "@/public/images/hf-arms-crossed.jpg";

export const site = {
  name: "Hyperflight",
  location: "New Jersey",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Work with me", href: "#partnerships" },
  hero: {
    lines: ["Coach.", "Creator.", "Filmmaker."],
    intro:
      "Pro boxing coach, fitness coach and filmmaker based in New Jersey. I train fighters, transform bodies and create content for brands that want to be seen. 1M+ on TikTok.",
    primary: { label: "Work with me", href: "#partnerships", caption: "Brands & companies" },
    secondary: { label: "Train with me", href: "#boxing", caption: "Boxing & fitness" },
    image: {
      src: heroPortrait,
      alt: "Hyperflight smiling in a black cap and tee, tattooed arms crossed, giving a thumbs up",
    },
    // Optional: drop a clip in /public (e.g. "/hero.mp4") to play over the photo.
    video: null as string | null,
  },
  credentials: [
    "1M+ on TikTok",
    "37K on Instagram",
    "Pro boxing coach",
    "Personal trainer",
    "Filmmaker & editor",
    "Based in New Jersey",
  ],
  services: [
    {
      id: "brand-partnerships",
      tag: "For brands",
      title: "Brand Partnerships",
      description:
        "Sponsored content that doesn't feel like an ad. Your product in front of a 1M+ audience that actually trusts me.",
      items: ["Sponsored TikToks & Reels", "YouTube vlog integrations", "Launches & ambassadorships"],
      cta: { label: "Start a partnership", href: "#partnerships" },
      media: { type: "image", src: armsCrossed, alt: "Hyperflight with arms crossed, smiling, in a black cap and tee" },
    },
    {
      id: "video-production",
      tag: "Hyper Films",
      title: "Video Production",
      description:
        "I don't just post content, I shoot and edit it. Creator and crew in one, from concept to final cut.",
      items: ["Business marketing", "Music videos", "Weddings, events & fight nights"],
      cta: { label: "Book a shoot", href: "#contact" },
      media: { type: "video", src: "/videos/films.mp4", poster: "/images/films-poster.jpg" },
    },
    {
      id: "boxing",
      tag: "Pro coach",
      title: "Boxing Coaching",
      description:
        "Technique, conditioning and self-defense for every level, from first-timers to fighters.",
      items: ["1-on-1 & partner sessions", "Pad work & technique", "Self-defense fundamentals"],
      cta: { label: "Book a session", href: "#contact" },
      media: { type: "video", src: "/videos/pads.mp4", poster: "/images/pads-poster.jpg" },
    },
    {
      id: "fitness",
      tag: "Personal training",
      title: "Fitness Training",
      description:
        "Strength, conditioning and the habits that make results stick. In the gym in New Jersey, or online from anywhere.",
      items: ["1-on-1 personal training", "Online coaching programs", "Strength & conditioning"],
      cta: { label: "Start training", href: "#contact" },
      media: { type: "video", src: "/videos/fitness.mp4", poster: "/images/fitness-poster.jpg" },
    },
  ],
  partnerships: {
    intro:
      "Brands don't just get a post. They get a creator who trains the audience, shoots the content and knows what makes people stop scrolling.",
    cta: { label: "Start a partnership", href: "#contact" },
    reasons: [
      {
        title: "An audience that trusts me",
        body: "1M+ followers who come for real training, not ads. When I put something in front of them, it lands as a recommendation.",
      },
      {
        title: "Creator and crew in one",
        body: "I shoot, edit and post it myself through Hyper Films. No agency in the middle, faster turnaround, and content that feels native to my feed.",
      },
      {
        title: "Where fitness meets fight culture",
        body: "My content lives where training, boxing and lifestyle overlap, the space apparel, supplement, wellness and sports brands want to own.",
      },
      {
        title: "Footage that works beyond my feed",
        body: "Shot with production quality, so the content can live on in your ads, your site and your own socials.",
      },
    ],
  },
  socials: [
    { label: "Instagram", short: "IG", href: "https://www.instagram.com/hyperfitnessrd/" },
    { label: "TikTok", short: "TT", href: "https://www.tiktok.com/@hyperflight" },
    { label: "Hyper Films", short: "HF", href: "https://www.instagram.com/hyperfilmss/" },
  ],
  contact: {
    // Stored in parts so the full address never appears in the page source;
    // it's joined in the browser only when a visitor clicks.
    email: { user: "hypergym29", domain: "icloud.com" },
    // Prefilled subject so inquiries are easy to spot in his inbox.
    subject: "Inquiry from hyperflight website",
  },
  footer: {
    headline: ["Let's make", "something."],
    note: "Brand deals, video projects and coaching inquiries. Send me an email and I'll get back to you.",
    builtBy: { label: "David A. Vargas", href: "https://github.com/DavidAVargas" },
  },
} as const;
