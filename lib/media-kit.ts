// Single source for the media kit page and its PDF export.
// Optional fields (website, audience) stay hidden until filled; re-export the PDF after editing.

export const mediaKit = {
  // Shown on the cover; numbers below are rounded down with "+" so they stay true as he grows.
  updated: "2026",
  email: "hypergym29@icloud.com",
  website: null as string | null, // waiting on the custom domain
  bio: "I'm a pro boxing coach, personal trainer and filmmaker based in New Jersey. My content lives where training, boxing and everyday life meet, and I shoot and edit it myself through Hyper Films. Brands get a creator and a crew in one.",

  platforms: [
    {
      name: "TikTok",
      handle: "@hyperflight",
      stats: [
        { value: "130K+", label: "Followers" },
        { value: "12M+", label: "Likes" },
        { value: "8M+", label: "Top video views" },
      ],
      note: "Account totals",
    },
    {
      name: "Instagram",
      handle: "@hyperfitnessrd",
      stats: [
        { value: "37K+", label: "Followers" },
        { value: "2.7M+", label: "Views" },
        { value: "480K+", label: "Accounts reached" },
        { value: "98K+", label: "Interactions" },
      ],
      note: "Typical 90-day views, reach & interactions",
    },
  ],

  // Waiting on Audience-tab screenshots from Instagram + TikTok Studio.
  audience: null as null | {
    age: string;
    gender: string;
    locations: string;
  },

  offerings: [
    {
      title: "TikTok videos",
      body: "Native, story-driven sponsored TikToks on @hyperflight.",
    },
    {
      title: "Instagram Reels",
      body: "Reels reach 1M+ views in a typical 90 days, built to travel beyond my followers.",
    },
    {
      title: "Story sets",
      body: "Stories pull 1.4M+ views in a typical 90 days. Ideal for links, launches and promo codes.",
    },
    {
      title: "YouTube integrations",
      body: "Shoutouts and segments on my channel, HYPERGANG.",
    },
    {
      title: "Hyper Films production",
      body: "Full video production for your brand: concept, shoot, edit and delivery.",
    },
    {
      title: "Ambassadorships & events",
      body: "Long-term partnerships, product launches and appearances.",
    },
  ],

  brands: ["Celsius", "Gymshark"],

  socials: [
    { label: "TikTok", handle: "@hyperflight" },
    { label: "Instagram", handle: "@hyperfitnessrd" },
    { label: "YouTube", handle: "@Hyperfitness23" },
    { label: "Hyper Films", handle: "@hyperfilmss" },
  ],
} as const;
