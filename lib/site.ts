export const site = {
  name: "HandySam Engineering",
  shortName: "HandySam",
  tagline: "Built with precision. Delivered with pride.",
  description:
    "HandySam Engineering supplies and installs hospital doors, medical gas pipeline systems (MGPS), nurse call systems, X-ray radiation shielding and stainless steel hospital equipment across Kenya and the region.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.handysamworks.co.ke",
  phone: "+254 787 315 910",
  phoneHref: "tel:+254787315910",
  whatsappHref: "https://wa.me/254787315910",
  email: "info@handysamworks.co.ke",
  emailAlt: "handysamworks@gmail.com",
  address: {
    line1: "Charleston House, Ruiru, Eastern Bypass",
    line2: "Adjacent to Kidani Mabati Factory",
    locality: "Ruiru",
    region: "Kiambu County",
    country: "Kenya",
  },
  social: {
    instagram: "https://instagram.com/handysamworkske",
    facebook: "https://facebook.com/handysamworkske",
    twitter: "https://twitter.com/handysamworkske",
  },
  keywords: [
    "medical gas pipeline system Kenya",
    "MGPS installation Kenya",
    "hospital doors Kenya",
    "hermetically sealed doors hospital",
    "nurse call system Kenya",
    "X-ray radiation shielding Kenya",
    "lead lining hospital doors",
    "stainless steel hospital equipment",
    "biomedical engineering services Kenya",
    "hospital design consultancy Kenya",
  ],
};

export type Site = typeof site;
