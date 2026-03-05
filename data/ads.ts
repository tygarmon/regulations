// ─────────────────────────────────────────────────────────────────────────────
// Ad Configuration
//
// To add ads:
//   1. Drop your image into /public/ads/  (e.g. /public/ads/my-sponsor.jpg)
//   2. Add an entry below with the image path, destination URL, and alt text
//   3. Push — Vercel will rebuild automatically
//
// Supported image formats: .jpg, .png, .webp, .gif
// Recommended dimensions:
//   Top banner    → 1200 × 90 px  (leaderboard, wide)
//   Bottom banner → 1200 × 90 px  (leaderboard, wide)
//   Mobile        → images scale automatically via object-fit: contain
//
// Leave an array empty ([]) to hide that slot entirely.
// ─────────────────────────────────────────────────────────────────────────────

export type Ad = {
  /** Path relative to /public — e.g. "/ads/sponsor.jpg" */
  image: string;
  /** URL opened in a new tab when the ad is clicked */
  href: string;
  /** Accessible description shown to screen readers */
  alt: string;
};

/** Ads shown in the full-width banner below the site header */
export const TOP_ADS: Ad[] = [
  // Example:
  // { image: "/ads/top-sponsor-1.jpg", href: "https://example.com", alt: "Example Sponsor" },
];

/** Ads shown in the sticky bar fixed to the bottom of the viewport */
export const BOTTOM_ADS: Ad[] = [
  // Example:
  // { image: "/ads/bottom-sponsor-1.jpg", href: "https://example.com", alt: "Example Sponsor" },
];
