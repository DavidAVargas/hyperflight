import heroPortrait from "@/public/images/hf-hero.jpg";
import armsCrossed from "@/public/images/hf-arms-crossed.jpg";
import aboutJump from "@/public/images/about-jump.jpg";
import aboutSprint from "@/public/images/about-sprint.jpg";
import aboutStretch from "@/public/images/about-stretch.jpg";
import aboutAgility from "@/public/images/about-agility.jpg";

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
      "Pro boxing coach, fitness coach and filmmaker based in New Jersey. I train fighters, transform bodies and create content for brands that want to be seen. 140K on TikTok.",
    primary: { label: "Work with me", href: "#partnerships", caption: "Brands & companies" },
    secondary: { label: "Train with me", href: "#boxing", caption: "Boxing & fitness" },
    image: {
      src: heroPortrait,
      alt: "Hyperflight smiling in a black cap and tee, tattooed arms crossed, giving a thumbs up",
    },
    // Optional: drop a clip in /public (e.g. "/hero.mp4") to play over the photo.
    video: null as string | null,
  },
  about: {
    headline: ["Built from", "the floor up."],
    intro:
      "I didn't start with a following. I started on a gym floor, one client at a time, and built everything else from there.",
    chapters: [
      {
        title: "The trainer",
        body: "I earned my personal training certification and went to work on the floor at a local gym. Early mornings, packed schedules and one rule: every client leaves better than they came in.",
      },
      {
        title: "The gym",
        body: "The results spoke for themselves. My client list kept growing until I outgrew the gym, so I opened my own training space and started coaching on my own terms.",
      },
      {
        title: "The camera",
        body: "Running my own business meant learning to market it. I picked up a camera and taught myself everything, from TikToks and Reels to full marketing videos. That became Hyper Films, and brands started reaching out.",
      },
      {
        title: "The corner",
        body: "Today I train everyday people and professional boxers, and I bring the same work ethic to every brand I partner with.",
      },
    ],
    closing: "Same energy in the gym, in the ring and behind the camera.",
    facts: [
      "Certified personal trainer",
      "Pro boxing coach",
      "Own training space · NJ",
      "Founder, Hyper Films",
    ],
    photos: [
      { src: aboutJump, label: "Power", alt: "Hyperflight mid-air in a high-knee jump on a turf field" },
      { src: aboutSprint, label: "Speed", alt: "Hyperflight exploding into a sprint on a turf field" },
      { src: aboutStretch, label: "Recovery", alt: "Close-up of a quad stretch on the field, tattooed leg and pink running shoes" },
      { src: aboutAgility, label: "Agility", alt: "Hyperflight shirtless in sunglasses, bounding across a turf field against a blue sky" },
    ],
  },
  credentials: [
    "140K on TikTok",
    "40K on Instagram",
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
        "Sponsored content that doesn't feel like an ad. Your product in front of 180K followers who actually trust me.",
      items: ["Sponsored TikToks & Reels", "YouTube vlog integrations", "Launches & ambassadorships"],
      details: {
        lead: "Content that doesn't feel like an ad. I make it, shoot it and post it to an audience that trusts me, so your brand shows up the way people actually want to see it.",
        lists: [],
        subject: "Brand partnership inquiry",
        emailLabel: "Email about a partnership",
      },
      media: { type: "image", src: armsCrossed, alt: "Hyperflight with arms crossed, smiling, in a black cap and tee" },
    },
    {
      id: "video-production",
      tag: "Hyper Films",
      title: "Video Production",
      description:
        "I don't just post content, I shoot and edit it. Creator and crew in one, from concept to final cut.",
      items: ["Business marketing", "Music videos", "Weddings, events & fight nights"],
      details: {
        lead: "Hyper Films is my production side. I shoot, edit and deliver video and photo for businesses, artists and events, with the same eye I use for my own content.",
        lists: [
          {
            title: "What I shoot",
            items: [
              "Business marketing videos",
              "Music videos",
              "Weddings & sweet 16s",
              "Events & fight nights",
              "Photography & editing",
            ],
          },
          {
            title: "How it works",
            items: [
              "Concept: we plan the story and the shots",
              "Shoot: on location, with my own gear",
              "Edit: cut, color and sound",
              "Deliver: ready to post or run as ads",
            ],
          },
        ],
        subject: "Video production inquiry",
        emailLabel: "Book a shoot",
      },
      media: {
        type: "video",
        sources: [
          // Order: vp-1, vp-4, vp-6, vp-2, vp-3, vp-5 (mixes boxing with other productions)
          { src: "/videos/films-2.mp4", poster: "/images/films-2-poster.jpg" },
          { src: "/videos/films-5.mp4", poster: "/images/films-5-poster.jpg" },
          { src: "/videos/films-6.mp4", poster: "/images/films-6-poster.jpg" },
          { src: "/videos/films-3.mp4", poster: "/images/films-3-poster.jpg" },
          { src: "/videos/films-4.mp4", poster: "/images/films-4-poster.jpg" },
          { src: "/videos/films-7.mp4", poster: "/images/films-7-poster.jpg" },
        ],
      },
    },
    {
      id: "boxing",
      tag: "Pro coach",
      title: "Boxing Coaching",
      description:
        "Technique, conditioning and self-defense for every level, from first-timers to fighters.",
      items: ["1-on-1 & partner sessions", "Pad work & technique", "Self-defense fundamentals"],
      details: {
        lead: "I coach boxing for every level, from first-timers learning their stance to professional fighters getting ready for camp.",
        lists: [
          {
            title: "Sessions",
            items: [
              "1-on-1 coaching",
              "Partner sessions",
              "Pad work & technique",
              "Boxing conditioning",
              "Self-defense fundamentals",
            ],
          },
          {
            title: "Where",
            items: ["In person in New Jersey"],
          },
        ],
        subject: "Boxing coaching inquiry",
        emailLabel: "Email about boxing",
      },
      media: {
        type: "video",
        sources: [
          { src: "/videos/pads.mp4", poster: "/images/pads-poster.jpg" },
          { src: "/videos/boxing-2.mp4", poster: "/images/boxing-2-poster.jpg" },
          { src: "/videos/boxing-3.mp4", poster: "/images/boxing-3-poster.jpg" },
          { src: "/videos/boxing-4.mp4", poster: "/images/boxing-4-poster.jpg" },
          { src: "/videos/boxing-5.mp4", poster: "/images/boxing-5-poster.jpg" },
          { src: "/videos/boxing-6.mp4", poster: "/images/boxing-6-poster.jpg" },
        ],
      },
    },
    {
      id: "fitness",
      tag: "Personal training",
      title: "Fitness Training",
      description:
        "Strength, conditioning and the habits that make results stick. In the gym in New Jersey, or online from anywhere.",
      items: ["1-on-1 personal training", "Online coaching programs", "Strength & conditioning"],
      details: {
        lead: "Training built around real results: getting stronger, moving better and building habits that last long after the session ends.",
        lists: [
          {
            title: "Training",
            items: [
              "1-on-1 personal training",
              "Online coaching programs",
              "Athletic performance coaching",
              "Strength & conditioning",
            ],
          },
          {
            title: "Where",
            items: ["In person in New Jersey", "Online, from anywhere"],
          },
        ],
        subject: "Personal training inquiry",
        emailLabel: "Email about training",
      },
      media: {
        type: "video",
        sources: [
          { src: "/videos/fitness.mp4", poster: "/images/fitness-poster.jpg" },
          { src: "/videos/fitness-3.mp4", poster: "/images/fitness-3-poster.jpg" },
          { src: "/videos/fitness-4.mp4", poster: "/images/fitness-4-poster.jpg" },
          { src: "/videos/fitness-5.mp4", poster: "/images/fitness-5-poster.jpg" },
          { src: "/videos/fitness-6.mp4", poster: "/images/fitness-6-poster.jpg" },
        ],
      },
    },
  ],
  partnerships: {
    intro:
      "Brands don't just get a post. They get a creator who trains the audience, shoots the content and knows what makes people stop scrolling.",
    cta: { label: "Start a partnership", href: "#contact" },
    reasons: [
      {
        title: "An audience that trusts me",
        body: "180K followers across TikTok and Instagram who come for real training, not ads. When I put something in front of them, it lands as a recommendation.",
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
