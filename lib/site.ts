import heroPortrait from "@/public/images/hf-hero.jpg";

export const site = {
  name: "Hyperflight",
  location: "New Jersey",
  navLinks: [
    { label: "Partnerships", href: "#partnerships" },
    { label: "Films", href: "#films" },
    { label: "Coaching", href: "#coaching" },
    { label: "The Gym", href: "#gym" },
  ],
  cta: { label: "Work with me", href: "#partnerships" },
  hero: {
    lines: ["Coach.", "Creator.", "Filmmaker."],
    intro:
      "Pro boxing coach, fitness coach and filmmaker based in New Jersey. I train fighters, transform bodies and create content for brands that want to be seen. 1M+ on TikTok.",
    primary: { label: "Work with me", href: "#partnerships", caption: "Brands & companies" },
    secondary: { label: "Train with me", href: "#coaching", caption: "Boxing & fitness" },
    image: {
      src: heroPortrait,
      alt: "Hyperflight smiling in a black cap and tee, tattooed arms crossed, giving a thumbs up",
    },
    // Optional: drop a clip in /public (e.g. "/hero.mp4") to play over the photo.
    video: null as string | null,
  },
  socials: [
    { label: "Instagram", short: "IG", href: "https://www.instagram.com/hyperfitnessrd/" },
    { label: "TikTok", short: "TT", href: "https://www.tiktok.com/@hyperflight" },
  ],
} as const;
