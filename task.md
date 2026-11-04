# TASK: Make Kalakritik Fully Responsive Across All Devices

Act as a senior frontend engineer specializing in responsive web design, mobile-first development, UI/UX, accessibility, and cross-browser compatibility.

## PROJECT CONTEXT

The Kalakritik crochet brand website is already developed and its current desktop design is approved.

Your task is to **audit, fix, and optimize the existing website for all screen sizes and devices**.

IMPORTANT: Do not redesign the website, change its visual identity, or remove existing functionality.

Preserve:
- Beige and cream color palette
- Ink Trap typography
- Bold and regular heading styles
- Crochet-inspired visual elements
- Existing animations and transitions
- Custom crochet bee cursor
- Product cards and image compositions
- Current section content and ordering
- Instagram and Google Forms integrations

## 1. RESPONSIVE BREAKPOINTS

Ensure the website works correctly at the following viewport widths:

- 320px — Small mobile devices
- 375px — iPhone SE / compact phones
- 390px — Modern iPhones
- 430px — Large phones
- 600px — Large mobile / small tablet
- 768px — Tablets in portrait
- 1024px — Tablets in landscape
- 1280px — Laptops
- 1440px — Desktop
- 1920px — Large desktop

Use a mobile-first approach.

Do not rely exclusively on fixed breakpoint values. Prefer fluid sizing with CSS clamp(), minmax(), flexible containers, and responsive grids.

## 2. MOBILE NAVIGATION

- Convert desktop navigation into a clean hamburger menu on smaller screens.
- Keep the Kalakritik logo properly aligned.
- Make the mobile menu visually consistent with the beige theme.
- Ensure the menu opens and closes smoothly.
- Close the menu when a navigation link is clicked.
- Support keyboard navigation and Escape to close.
- Prevent background scrolling when the menu is open.
- Ensure the navigation does not overlap other elements.

## 3. HERO SECTION

Optimize the hero for mobile and tablet layouts.

- Scale large headings using clamp().
- Prevent oversized text from overflowing.
- Maintain the visual hierarchy of bold typography.
- Reposition decorative crochet illustrations appropriately.
- Ensure the hero photographs remain visible and properly cropped.
- Stack text and images on mobile where necessary.
- Maintain comfortable spacing between headings, text, and buttons.
- Prevent overlapping elements.
- Ensure both CTA buttons remain accessible.
- Use a responsive image layout instead of rigid absolute positioning.

Do not sacrifice the desktop hero composition.

## 4. PRODUCT COLLECTION

Make the product gallery adaptive:

Mobile: 1–2 columns depending on available space.

Tablet: 2 columns.

Desktop: 3–4 columns where appropriate.

Requirements:
- Consistent card spacing
- No cropped product names
- Proper image aspect ratios
- No horizontal overflow
- Readable descriptions
- Accessible CTA buttons
- Smooth hover interactions on desktop
- Suitable touch interactions on mobile

Do not rely on hover for essential actions.

## 5. CROCHET BEE CURSOR

Preserve the existing custom bee cursor on pointer-based desktop devices.

- Display the bee cursor only on devices supporting a fine pointer and hover.
- Disable it on touch-only devices.
- Restore the system cursor on mobile.
- Avoid cursor-related animation or scrolling performance issues.
- Ensure all buttons and links remain clickable.
- Support prefers-reduced-motion.
- Do not use viewport width alone to determine whether a device has a mouse.

## 6. RESPONSIVE TYPOGRAPHY

Use fluid typography throughout the website.

Example:

font-size: clamp(2.5rem, 6vw, 6rem);

Adjust values for the existing design rather than applying this example universally.

Ensure:
- Hero headings are balanced on smaller screens.
- Paragraphs remain comfortably readable.
- Text does not overflow.
- Buttons do not wrap awkwardly.
- Headings retain the intended bold/regular contrast.
- Line heights and letter spacing work at all breakpoints.

Do not replace the existing fonts.

## 7. CROCHET DECORATIONS AND ANIMATIONS

Preserve the handcrafted aesthetic while preventing decorations from interfering with content.

- Reposition yarn illustrations responsively.
- Scale decorative flowers according to screen size.
- Keep animated elements within appropriate containers.
- Avoid clipped or overlapping content.
- Reduce excessive motion on mobile where needed.
- Preserve smooth scrolling.
- Disable nonessential animations for reduced-motion users.
- Avoid expensive animations that cause dropped frames.

## 8. OTHER WEBSITE SECTIONS

Audit every existing section, including:

- Brand story
- Product gallery
- Customization
- Custom order process
- Customer reviews
- Instagram showcase
- Final CTA
- Footer

Convert multi-column layouts into appropriate stacked layouts on smaller screens.

Ensure images, text, decorative elements, and CTAs remain balanced.

Do not remove content simply to make the layout fit.

## 9. MOBILE TOUCH AND ACCESSIBILITY

Ensure:
- Interactive targets are at least 44×44 CSS pixels where practical.
- Buttons and links have sufficient spacing.
- No hover-only navigation.
- Forms and external links remain usable.
- Focus indicators remain visible.
- Text contrast meets WCAG AA requirements.
- Zooming to 200% does not break essential functionality.
- Screen reader semantics are preserved.
- Safe-area insets are respected where needed.

## 10. CROSS-BROWSER COMPATIBILITY

Verify the website on:

- Safari on iOS
- Chrome on Android
- Chrome desktop
- Safari on macOS
- Firefox desktop
- Edge desktop

Check for:
- Font rendering differences
- Viewport height issues
- Sticky navigation behavior
- CSS layout inconsistencies
- Image rendering issues
- Touch interaction problems

Use modern viewport units where appropriate, with sensible fallbacks.

## 11. PERFORMANCE OPTIMIZATION

Optimize the mobile experience.

- Prevent cumulative layout shifts.
- Use responsive images and appropriate sizes.
- Avoid loading unnecessarily large images.
- Lazy-load below-the-fold images.
- Minimize unnecessary animation re-renders.
- Avoid heavy scroll event handlers.
- Ensure animations use transform and opacity where possible.
- Reduce unnecessary client-side JavaScript.

Target strong Lighthouse scores without sacrificing the existing visual design.

## 12. TESTING AND FIXING

Do not simply add media queries and assume the task is finished.

First inspect the current components and CSS to identify responsive problems.

Then fix the root causes.

If browser testing tools are available, test the actual website at all specified viewport widths.

Check for:
1. Horizontal scrolling
2. Broken grids
3. Overlapping elements
4. Clipped text
5. Misaligned buttons
6. Oversized images
7. Broken navigation
8. Touch interaction issues
9. Decorative elements covering content
10. Inconsistent spacing
11. Layout shifts during loading
12. Viewport-related Safari issues

Test both portrait and landscape layouts where relevant.

Run available lint, type-check, and production build commands.

## 13. STRICT CONSTRAINTS

DO NOT:
- Rebuild the website from scratch.
- Change the established visual identity.
- Replace the color palette.
- Change typography unnecessarily.
- Remove existing sections.
- Remove the crochet bee cursor.
- Break existing animations.
- Modify Instagram or Google Forms destinations.
- Install unnecessary dependencies.
- Use arbitrary fixed widths that break smaller screens.
- Hide meaningful content as a shortcut.
- Make desktop layouts worse while fixing mobile.

## 14. FINAL DELIVERABLES

Implement the responsive fixes directly in the existing codebase.

After completing the changes, provide:

1. Summary of responsive issues identified.
2. Components and files modified.
3. Breakpoints and layout changes implemented.
4. Mobile navigation and cursor behavior.
5. Accessibility and performance improvements.
6. Results of tests and build checks.
7. Any remaining limitations.

## FINAL OBJECTIVE

Make Kalakritik feel like a professionally designed, premium, crochet-inspired website on every screen.

A mobile visitor should experience the same visual quality, craftsmanship, personality, and usability as a desktop visitor.

**Preserve the existing design. Improve responsiveness, adaptability, accessibility, and performance.**

Do not stop at recommendations. Inspect the codebase, implement the fixes, and validate the results.