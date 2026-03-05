# Ad Images

Drop banner images here. Then add an entry in `/data/ads.ts`.

## Recommended dimensions
- **Top leaderboard:** 1200 × 90 px
- **Bottom sticky:** 1200 × 90 px
- **Mobile:** images scale automatically (object-fit: contain)

## Supported formats
.jpg, .png, .webp, .gif

## Example
1. Add `my-sponsor.jpg` to this folder
2. In `data/ads.ts`, add:
   ```ts
   { image: "/ads/my-sponsor.jpg", href: "https://sponsor.com", alt: "Sponsor Name" }
   ```
3. Push → Vercel redeploys automatically
