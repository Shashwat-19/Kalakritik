# Kalakritik

A warm, editorial crochet boutique frontend. Built with Next.js App Router, strict TypeScript, Tailwind CSS 4, Motion, Lucide React, and locally served Bricolage Grotesque via Fontsource. No database, checkout, authentication, or submission backend.

## Start locally

Use Node.js 22 LTS or newer and npm:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Other commands:

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

`npm start` requires a successful build. Commit the generated package-lock.json after the first successful install to keep subsequent installs reproducible.

## Content and configuration

- `src/config/site.ts`: Instagram URL, customization and review form URLs, navigation, and production origin.
- `src/data/products.ts`: editable inspiration cards and category labels.
- `src/data/reviews.ts`: approved customer testimonials; intentionally empty.
- `src/components`: navigation, gallery, shared UI, progressive reveal, and bee cursor.
- `src/app/page.tsx`: remaining editorial sections and proposed brand copy.
- `src/app/globals.css`: design tokens, typography, textures, layout, and responsive rules.
- `public/illustrations`: original local SVG concept illustrations.
- `public/cursor/bee.svg`: transparent stitched bee artwork.
- `public/images/og.png`: social sharing preview.

The story is proposed brand copy, not a verified founder history. The collection categories describe illustration inspiration, not verified brand inventory. There are no prices, ratings, fabricated reviews, or claimed live social feeds.

### Replace the previews

No approved product or maker photography was supplied. Every product visual and the Instagram moodboard are clearly identified as illustrated previews. These locally authored SVGs are placeholders, not product photographs.

1. Place approved JPG, PNG, or WebP images in `public/images/` (ideally 1200–1600px wide, with consistent crops).
2. Update each product's `image`, descriptive `alt`, `name`, `description`, and `category` in `src/data/products.ts`.
3. Update `categories` in the same file to match the confirmed collection.
4. In `Collection.tsx`, remove the preview badge and replace the inspiration disclaimer only once every displayed asset and product is verified.
5. Replace hero/story/moodboard image sources in `page.tsx`, supply accurate alt text, and remove preview captions when approved photos are present.
6. Keep Next.js Image `sizes` accurate and preserve the fixed aspect-ratio containers to prevent layout shifts. Below-fold images lazy-load by default; the hero image has priority.

### Google Forms

Set `customizationFormUrl` and `reviewFormUrl` in `src/config/site.ts` to their real public HTTPS Google Form URLs. Shared Action components automatically switch from disabled buttons with an explanation to external links. The footer uses the same configuration. Until then, users can contact the brand through Instagram. Nothing is submitted or stored by the website. Review responses never automatically publish; add only approved, verified entries in `src/data/reviews.ts`.

### Bee artwork and motion

Replace `public/cursor/bee.svg` with your approved transparent art, preserving its filename and tightly cropped viewBox. The cursor displays at 38px; its pointer hotspot is anchored near the bee's upper left. Replace `public/illustrations/bee.svg` for the larger decorative bee independently.

The cursor uses one animation loop and three reusable trail elements. It enlarges over interactive controls, tilts with movement, floats gently, and bounces on click. It requires a fine pointer and hover support, independently of viewport width. It restores native pointers on blur, exit, touch input, reduced motion, and forced colors, and native text selection over headings/body text. It never intercepts clicks. Native controls and visible keyboard focus remain available.

Motion adds a modest viewport reveal without initially hiding content. Content remains readable without JavaScript. The marquee, floating art, and smooth scrolling respect reduced motion. The mobile menu uses a disclosure button; Escape closes it and restores toggle focus.

## Deployment

1. Install dependencies and run all checks above on an internet-connected machine.
2. Add approved brand assets and final Google Form destinations.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin (no trailing slash). Add the same variable in Vercel.
4. Push to your Git repository, import into Vercel, select Next.js, and deploy with the default build settings. No secrets or backend setup required.
5. Check the deployed navigation, form links, keyboard navigation, images, metadata, `/robots.txt`, and `/sitemap.xml`.

Canonical metadata and sitemap URLs are emitted only when a production origin is configured. Open Graph uses a local PNG, not an unsupported SVG social preview.

## Verification status

TypeScript, ESLint, and the production build pass. The build script uses Next.js's webpack builder for compatibility with restricted development environments.

Responsive CSS targets 320, 375, 390, 430, 600, 768, 1024, 1280, 1440, and 1920px. The gallery uses one column up to 640px, two through 1100px, and three above that. Main sections stack on mobile; tablet grids use shrinkable columns. The mobile hero artwork has a stable aspect ratio and the footnote remains in document flow. Touch targets are at least 44px where practical. Mobile navigation locks background scrolling, cycles keyboard focus, closes with Escape or link activation, and resets above 800px. Its scrollable panel uses dynamic viewport height with a legacy fallback and bottom safe-area padding.

Lint, TypeScript, and the production build were rerun after the responsive fixes. Rendered testing is still outstanding: the local development server failed to bind its port with `EPERM`, and the browser-control service timed out. These checks do not establish cross-browser or device validation. Before launch, inspect all widths above, portrait/landscape and 200% zoom in iOS Safari, Android Chrome, desktop Chrome, Safari, Firefox, and Edge. Check overflow, image crops, filtering, menu scrolling and focus, cursor behavior, reduced motion, loading shifts, and final external destinations.
