# AGENT.md — AI Agent Guidelines

This document provides context and conventions for AI agents working on the New Bridges ABA codebase.

## Project Overview

This is a static website (no build step) for an ABA therapy provider. Pages are plain HTML files served from the project root. There is no bundler, framework CLI, or package manager required.

## Repository Structure

- **HTML pages** live in the project root (e.g., `index.html`, `about.html`).
- **JavaScript files** live in the `js/` directory.
- **Vendor/third-party libraries** live in the `vendor/` directory.
- **Images** live in the `images/` directory.

## Key Conventions

### HTML Pages

- Each page includes shared header and footer components via JavaScript injection.
- Pages load `js/header.js` and `js/footer.js` in the `<head>`, which populate `#header-placeholder` and `#footer-placeholder` divs.
- Tailwind CSS is loaded from `vendor/tailwindcss.js` and configured inline via `tailwind.config`.
- Alpine.js is used for interactive UI components (dropdowns, accordions, modals).
- AOS (Animate On Scroll) is used for scroll-based animations.

### JavaScript

- `js/supabase.js` must be loaded before `js/analytics.js` since analytics depends on the Supabase client.
- The Supabase client is wrapped in a security proxy that only allows access to tables prefixed with `newbridges_`.
- Analytics tracking is automatic — page views, clicks, scroll depth, and page leave events are tracked without additional code.

### Styling

- Use Tailwind CSS utility classes for styling. Custom CSS should be minimal.
- The brand color palette is defined in the Tailwind config:
  - `brandPurple`: `#4A2B7A`
  - `brandOrange`: `#FDBF0F`
  - `brandLightPurple`: `#926BBE`
  - `brandBeige`: `#FDF8F0`
- The primary font is **Onest** (loaded from Google Fonts).

### Adding a New Page

1. Copy an existing page (e.g., `about.html`) as a template.
2. Include the standard `<head>` block with Tailwind, Alpine.js, AOS, `js/header.js`, and `js/footer.js`.
3. Add `#header-placeholder` and `#footer-placeholder` divs for the shared components.
4. Include `js/supabase.js` and `js/analytics.js` scripts before the closing `</body>` tag.
5. Add the new page to `sitemap.xml`.

### Path Conventions

- Most pages use **relative paths** for JS and assets (e.g., `src="js/header.js"`).
- Landing pages (`landing.html`, `landing-ads.html`) and `404.html` use **absolute paths** (e.g., `src="/js/supabase.js"`).

## Testing

There is no automated test suite. Changes should be verified by:
1. Opening affected pages in a browser.
2. Confirming the header and footer render correctly.
3. Checking the browser console for JavaScript errors.

## Deployment

The site is deployed as static files. No build step is required — push changes and they go live.
