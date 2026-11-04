# PROJECT: KALAKRITIK — Premium Crochet Brand Website

## YOUR ROLE

Act as a senior frontend engineer, award-winning creative web designer, UI/UX specialist, and interaction designer.

Your task is to design and develop a complete, production-ready, visually distinctive website for **KALAKRITIK**, a handmade crochet brand.

Instagram reference:
https://www.instagram.com/kalakritik/

This must not look like a generic e-commerce template or an AI-generated landing page.

Create an original, warm, premium, artistic digital experience that feels like entering a cozy crochet studio.

The visual experience should communicate:

- Handmade craftsmanship
- Softness and warmth
- Artistic individuality
- Attention to detail
- Playfulness and personality
- Premium boutique aesthetics
- Personal gifting and customization

The result should feel thoughtfully art-directed, with strong typography, refined layouts, beautiful imagery, creative interactions, and consistent visual storytelling.

---

# 1. TECHNOLOGY STACK

Build using:

- Next.js with App Router
- TypeScript with strict typing
- Tailwind CSS
- Framer Motion / Motion for React
- Lucide React for functional icons
- CSS animations and SVG for decorative elements
- Next.js Image for optimized product photography

Prefer lightweight, performant implementations.

Do not introduce unnecessary libraries, server infrastructure, databases, authentication, or payment systems.

Use clean, maintainable, reusable components and a logical project structure.

Support local development and deployment to Vercel.

# 2. BRAND IDENTITY AND DESIGN SYSTEM

Brand name: KALAKRITIK

Brand category: Handmade crochet creations.

Brand personality:
Cozy, charming, youthful, expressive, artisanal, premium, and friendly.

## Color palette

Use the following as the initial design system:

| Color | Hex | Usage |
|---|---|---|
| Warm Vanilla | #F6EFE5 | Primary background |
| Oat Beige | #E8D9C5 | Secondary sections |
| Soft Cream | #FFF9F1 | Cards and surfaces |
| Cocoa Brown | #49382F | Primary typography |
| Muted Mocha | #786557 | Secondary text |
| Honey Yellow | #E9B95B | Bee and accent elements |
| Dusty Rose | #D7A6A0 | Small decorative accents |
| Sage Green | #A5AE91 | Natural supporting accent |

Avoid stark white backgrounds, aggressive gradients, bright neon colors, and excessive dark elements.

The beige and cream palette should dominate the entire experience.

## Typography — VERY IMPORTANT

Use an expressive Ink Trap typeface for major headings.

Preferred:
- Google Fonts: Bricolage Grotesque, with its ink-trap character
- Alternatively, a properly licensed local ink-trap font if supplied

Use:
- ExtraBold / Bold: 700–800 for hero headings
- SemiBold: 600 for section headings and product names
- Regular: 400 for descriptive text
- Medium: 500 for navigation, buttons, and labels

Typography should have visual personality.

Use oversized editorial headings with tight but readable letter spacing.

Combine large, bold display text with elegant, breathable body copy.

Do not use multiple unrelated decorative fonts.

# 3. CUSTOM CROCHET BEE CURSOR — SIGNATURE FEATURE

This is one of the most important features.

Replace the default desktop pointer with a custom, small, adorable, crocheted bee.

The bee should look like a miniature handmade amigurumi toy.

Visual characteristics:
- Rounded yellow yarn body
- Soft black or dark brown crochet stripes
- Visible stitched yarn texture
- Tiny embroidered eyes
- Small cream-colored wings
- Soft handcrafted appearance
- Slightly imperfect organic silhouette

The bee should NOT look like a flat generic emoji or a basic cartoon cursor.

Implement the cursor using a transparent, locally stored graphic or SVG asset. An approved transparent PNG/WebP illustration may be used if it produces a more convincing handmade appearance.

## Cursor interactions

1. Bee follows the actual pointer smoothly.
2. Movement should be responsive, without excessive lag.
3. Add subtle rotational tilting based on movement direction.
4. Add a gentle floating effect when idle.
5. Bee slightly enlarges when hovering over buttons or product cards.
6. On interactive elements, display a clear hover affordance.
7. A tiny dotted yarn-thread trail can briefly follow the cursor.
8. The trail should disappear naturally.
9. Clicking may trigger a subtle bounce.
10. The pointer's interactive hotspot must remain accurate.

IMPORTANT:
- Do not make the cursor excessively large.
- Avoid obstructing text or buttons.
- Do not create excessive DOM elements per mouse movement.
- Use requestAnimationFrame or an efficient animation mechanism.
- Prevent event interception using pointer-events: none.
- Hide the custom cursor on touch devices.
- Respect prefers-reduced-motion.
- Restore the native cursor for unsupported or accessibility-sensitive environments.
- Maintain usable text selection and keyboard navigation.

The bee should become a memorable visual identity of Kalakritik.

# 4. CROCHET-INSPIRED VISUAL LANGUAGE

The entire website should subtly incorporate crochet craftsmanship.

Use:
- Yarn stitch textures
- Thread-inspired dividers
- Soft scalloped borders
- Rounded organic cards
- Delicate knitted patterns
- Yarn-loop decorations
- Soft tactile shadows
- Crochet flower illustrations
- Stitched label graphics
- Handcrafted decorative accents

Use these elements intentionally, not everywhere.

Prefer subtle background texture over excessive decorative clutter.

Create visual hierarchy and generous negative space.

The experience should remain modern and polished.

# 5. WEBSITE STRUCTURE

Build a complete responsive website with the following sections.

## A. NAVIGATION BAR

Create a sticky, minimal navigation bar.

Left:
KALAKRITIK wordmark.

Center desktop navigation:
- Home
- Creations
- Our Story
- Custom Orders
- Reviews

Right:
Instagram icon and a prominent "Let's Create" CTA.

Use a cream/beige background with subtle transparency and backdrop blur.

On mobile, implement a fully accessible animated navigation menu.

The logo should use expressive display typography with a small crochet-inspired decorative symbol.

## B. HERO SECTION

Create a visually stunning, editorial-style hero.

Main headline:

"Little loops.
Big love."

Use bold Ink Trap typography.

Make the phrase large and visually dominant.

Supporting description:

"Thoughtfully crocheted treasures, made with yarn, patience, and a whole lot of love."

Primary CTA:
"Explore Our Creations"

Secondary CTA:
"Request a Custom Piece"

The first CTA should scroll to the collection.

The second should open the customization Google Form.

### Hero visuals

Create an artistic composition showcasing crochet products.

Use authentic, approved Kalakritik product photographs where available.

Arrange images using:
- Organic rounded frames
- Subtle layered depth
- Gentle image rotation
- Cream borders
- Soft shadows
- Small stitched label details

Include the crochet bee as a decorative character in the hero, separate from the cursor.

Add subtle floating crochet flowers, yarn loops, or stitched elements.

Use restrained entrance animations.

The hero must look premium on both desktop and mobile.

## C. HANDMADE MARQUEE

Add a softly animated horizontal text strip.

Example phrases:

"Handmade with Love"
"One Stitch at a Time"
"Little Things, Big Smiles"
"Crafted Just for You"

Separate phrases using tiny crochet flower or yarn icons.

Use a soft beige background with dark brown lettering.

The animation must be smooth, slow, and visually calm.

Pause or disable movement for reduced-motion users.

## D. OUR CREATIONS / COLLECTION

Section heading:

"Made by hand.
Loved by heart."

Create a premium editorial product gallery.

Use a responsive grid with consistent imagery and thoughtfully varied visual composition.

Each product card should support:
- Product photograph
- Product name
- Short description
- Optional category
- Optional price, only when confirmed
- "Enquire on Instagram" CTA

Create the product data in an editable TypeScript configuration file.

Potential category placeholders, only if representative of the actual brand:
- Crochet Flowers
- Plushies & Amigurumi
- Keychains
- Accessories
- Personalized Gifts

Do not present these as verified Kalakritik categories.

Use a small curated collection rather than filling the website with fabricated inventory.

If actual product assets are missing, use clearly labeled local development placeholders and provide instructions for replacing them.

Do not scrape Instagram or hotlink Instagram CDN images.

### Product card interactions

- Gentle hover scale
- Image reveal or subtle zoom
- Smooth image transitions
- Soft background changes
- Small crochet-inspired hover details

Keep the entire card accessible and keyboard navigable.

## E. THE KALAKRITIK STORY

Section heading:

"Every stitch tells a story."

Create a warm brand storytelling section.

Suggested introductory copy:

"Behind every tiny loop is a little piece of creativity. Kalakritik celebrates the joy of handmade crochet — thoughtful creations made to bring warmth to everyday moments."

Treat this as proposed brand copy, not verified founder history.

Use a split layout:
- Left: crochet workspace or authentic maker photography
- Right: brand story and values

Include three visual themes:
- Handmade with Care
- Thoughtfully Created
- Made to Feel Personal

Do not invent founder names, business history, production methods, sustainability certifications, or other unverified facts.

## F. CUSTOM CREATIONS SECTION

This section is extremely important.

Heading:

"Your idea.
Our next creation."

Supporting copy:

"Have a color, character, or special gift in mind? Tell us what you're dreaming of."

Create a visually beautiful customization section with an illustrated yarn ball, crochet flowers, or amigurumi inspiration.

Primary CTA:
"Request Customization"

The button must open the Google Form using a configurable external link.

Do NOT build a fake functional submission form.

Do NOT store user information in the website.

Google Forms will handle the actual submission.

Add a small note:

"Custom requests are subject to confirmation and availability."

Use a placeholder configuration value until the real customization form URL is provided.

## G. HOW CUSTOM ORDERS WORK

Create a visually engaging three-step journey.

Step 01:
"Share Your Idea"
Describe your preferred design using our customization form.

Step 02:
"Let's Plan It"
Connect with Kalakritik on Instagram to discuss the details.

Step 03:
"Made with Love"
Your creation is handmade after the order is confirmed.

Use a connecting yarn-thread illustration between steps on desktop.

On mobile, stack steps vertically.

Avoid claiming automated processing, fixed turnaround times, or guaranteed acceptance.

## H. REVIEWS & LOVE NOTES

Heading:

"Sweet words,
warmer hearts."

Create an aesthetically pleasing review section.

Design:
- Handwritten-note-inspired cards
- Cream backgrounds
- Subtle stitched borders
- Elegant typography
- Small decorative crochet flowers

IMPORTANT:
Do not invent customer reviews, names, ratings, or testimonials.

If verified reviews are supplied later, render them from a local reviews data file.

Until then, create a tasteful review invitation section.

CTA:
"Leave a Little Love"

This opens the Google review form link.

Provide another optional CTA:
"See Our Instagram"

Do not claim that form responses automatically appear on the website.

## I. INSTAGRAM SHOWCASE

Heading:

"Follow the thread."

Description:

"More handmade moments, fresh creations, and behind-the-scenes goodness live on our Instagram."

Create a curated visual gallery with locally supplied approved images.

Include:
- Instagram icon
- @kalakritik
- Instagram CTA

Button text:
"Visit Our Instagram"

Link:
https://www.instagram.com/kalakritik/

Do not attempt unauthorized scraping or imply live Instagram feed synchronization.

## J. FINAL CALL TO ACTION

Create a warm, memorable closing section.

Large headline:

"Something lovely
starts with a stitch."

Subtext:

"Follow along, find a favorite, or dream up something uniquely yours."

Buttons:
"Explore Instagram"
"Create Something Custom"

Use creative typography, organic illustration, and a soft beige or honey-colored background.

## K. FOOTER

Include:
- KALAKRITIK branding
- Short brand description
- Navigation links
- Instagram profile
- Customization form
- Review form
- Copyright with dynamic current year

Footer text:

"Made with yarn, care & creativity."

Use soft borders, subtle stitch patterns, and thoughtful spacing.

# 6. INTERACTIVE DESIGN REQUIREMENTS

The website should feel delightful, not distracting.

Implement:
- Smooth anchor navigation
- Elegant scroll reveal animations
- Subtle parallax on appropriate decorative images
- Carefully timed hero animations
- Soft card hover effects
- Magnetic-inspired buttons where appropriate
- A custom crochet bee cursor
- Gently animated yarn-thread accents
- Refined page transitions only where useful
- Responsive navigation transitions

Use Motion for React selectively.

Prioritize performance over animation quantity.

Avoid excessive scroll-jacking, heavy 3D libraries, aggressive motion, and unnecessary visual effects.

# 7. RESPONSIVE DESIGN

The site must be polished at:

- 320px small mobile
- 375px standard mobile
- 768px tablet
- 1024px small laptop
- 1440px desktop
- 1920px large monitor

Mobile must be designed intentionally, not merely created by stacking desktop content.

Ensure:
- No horizontal overflow
- Readable typography
- Appropriate image crops
- Comfortable touch targets
- Responsive grids
- Accessible navigation
- Consistent spacing
- No custom bee cursor on touch devices

# 8. LINKS AND DATA CONFIGURATION

No custom backend is required.

Use a central configuration file for all external links.

Required configuration values:

INSTAGRAM_URL = "https://www.instagram.com/kalakritik/"

CUSTOMIZATION_FORM_URL = ""

REVIEW_FORM_URL = ""

Until form links are supplied, do not create broken links.

Buttons with missing destinations should be clearly marked as unavailable or temporarily disabled with an appropriate explanation.

Keep product content, collection categories, and reviews separately configurable.

Do not hardcode business data throughout JSX components.

# 9. DESIGN ASSETS

Create a cohesive asset strategy.

Required assets:
- Crochet bee cursor
- Crochet bee hero illustration
- Yarn ball illustration
- Small crochet flower decorations
- Stitch-pattern dividers
- Organic decorative accents
- Product image placeholders if necessary

Use locally stored SVG assets where appropriate.

For crochet textures, prioritize believable handmade detail over generic flat clip art.

If high-quality assets cannot be generated directly, define clear asset specifications and create graceful placeholders rather than pretending finished photography exists.

Do not use copyrighted imagery without permission.

Do not use unrelated brand logos or product photographs.

# 10. PERFORMANCE, SEO AND ACCESSIBILITY

Implement:
- Semantic HTML
- Correct heading hierarchy
- Accessible navigation
- Visible keyboard focus states
- Alt text for meaningful images
- Decorative images hidden from assistive technologies
- Accessible button and link names
- Strong color contrast
- Reduced-motion support
- Optimized local images
- Lazy loading below-the-fold images
- Minimal layout shifts
- Responsive image sizes
- Metadata and Open Graph tags
- Sitemap and robots configuration
- Canonical metadata once production domain is known

Avoid misleading structured data and fabricated business ratings.

Aim for strong Lighthouse performance and accessibility scores.

# 11. EXPECTED PROJECT STRUCTURE

Use a logical structure similar to:

src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Marquee.tsx
      Collection.tsx
      About.tsx
      CustomOrders.tsx
      OrderProcess.tsx
      Reviews.tsx
      InstagramShowcase.tsx
      FinalCTA.tsx
    ui/
      CrochetBeeCursor.tsx
      ProductCard.tsx
      SectionHeading.tsx
      AnimatedButton.tsx
      YarnDivider.tsx
  config/
    site.ts
  data/
    products.ts
    reviews.ts
  lib/
    utils.ts

public/
  images/
  illustrations/
  cursor/

Adjust the structure where a simpler implementation is cleaner.

# 12. QUALITY AND ACCEPTANCE CRITERIA

Before declaring the project complete:

1. Verify the project runs locally.
2. Run TypeScript checks.
3. Run the production build.
4. Run linting.
5. Fix any build or runtime errors.
6. Check responsive layout at specified breakpoints.
7. Verify navigation and section anchors.
8. Verify the Instagram link.
9. Verify correct handling of missing Google Form links.
10. Test cursor interaction on desktop.
11. Verify native cursor restoration on touch devices.
12. Verify reduced-motion behavior.
13. Check keyboard accessibility.
14. Check for image loading errors.
15. Check for horizontal overflow.
16. Remove unused dependencies and dead code.
17. Ensure the website remains usable without JavaScript animations.

If a browser testing tool is available, inspect the actual rendered page, not merely the source code.

# 13. README AND HANDOVER

Create a comprehensive README.md explaining:

- Project overview
- Technology stack
- Installation
- Local development commands
- Production build
- Folder structure
- How to replace product photographs
- How to update product names and descriptions
- How to configure Google Form URLs
- How to replace the bee cursor artwork
- How to deploy to Vercel

# 14. EXECUTION INSTRUCTIONS

If the working directory contains an existing project, inspect its framework and structure before changing anything.

Preserve user files unless modifications are necessary.

If the repository is empty, initialize the project using the recommended stack.

Work in this order:

PHASE 1 — Architecture and design system
- Establish Next.js architecture
- Configure fonts, Tailwind, and design tokens
- Define reusable UI components

PHASE 2 — Visual implementation
- Build the complete responsive layout
- Create all major website sections
- Establish a unified crochet-inspired visual identity

PHASE 3 — Interaction design
- Implement animated elements
- Build the custom crochet bee cursor
- Refine hover, scroll, and navigation interactions

PHASE 4 — Integration
- Connect Instagram
- Configure Google Form destinations
- Structure editable product and review data

PHASE 5 — Quality assurance
- Run checks and fix issues
- Test responsiveness and accessibility
- Optimize performance
- Complete documentation

Do not stop after planning or generating a few components.

Implement the complete website.

Do not ask unnecessary clarification questions. Use sensible design defaults and clearly identify missing brand assets and Google Form URLs.

# FINAL DESIGN DIRECTION

Imagine a blend of:

- Premium handmade lifestyle boutique
- Cozy crochet art studio
- Modern editorial design
- Soft Scandinavian-inspired warmth
- Playful illustrated brand identity
- Carefully curated Instagram-first small business

The website should look distinctive enough to be included in a professional frontend design portfolio.

Prioritize excellent typography, authentic visual storytelling, consistent spacing, polished interactions, and a memorable crochet bee cursor.

The final product should feel handcrafted, just like the products it represents.

Build KALAKRITIK as a complete, beautiful, functional, deployment-ready frontend experience.