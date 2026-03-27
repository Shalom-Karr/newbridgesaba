# New Bridges ABA

New Bridges ABA is a static website for an Applied Behavior Analysis (ABA) therapy provider servicing New Jersey and Ohio.

## Project Structure

```
├── index.html          # Homepage
├── about.html          # Our Approach page
├── services.html       # Services page
├── locations.html      # Locations page
├── contact.html        # Contact page
├── careers.html        # Careers page
├── blog.html           # Blog listing page
├── post.html           # Individual blog post page
├── faq.html            # FAQ page
├── admin.html          # Admin portal
├── landing.html        # Landing page
├── landing-ads.html    # Ads landing page
├── 404.html            # Custom 404 page
├── js/                 # JavaScript files
│   ├── header.js       # Shared header component
│   ├── footer.js       # Shared footer component
│   ├── supabase.js     # Supabase client configuration
│   └── analytics.js    # Analytics/tracking integration
├── images/             # Image assets
├── vendor/             # Third-party libraries (Tailwind CSS, Alpine.js, AOS)
├── robots.txt          # Search engine crawling rules
└── sitemap.xml         # Sitemap for SEO
```

## Tech Stack

- **HTML/CSS** — Static HTML pages
- **Tailwind CSS** — Utility-first CSS framework (loaded via CDN/vendor)
- **Alpine.js** — Lightweight JavaScript framework for interactivity
- **AOS (Animate On Scroll)** — Scroll animation library
- **Supabase** — Backend-as-a-service for blog content, admin portal, and analytics

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Shalom-Karr/newbridgesaba.git
   cd newbridgesaba
   ```

2. Open `index.html` in a browser, or serve the project with any static file server:
   ```bash
   npx serve .
   ```

3. To enable blog content and analytics, configure the Supabase credentials in `js/supabase.js`.

## JavaScript Modules

| File | Purpose |
|------|---------|
| `js/header.js` | Injects the shared site header into pages via `#header-placeholder` |
| `js/footer.js` | Injects the shared site footer into pages via `#footer-placeholder` |
| `js/supabase.js` | Initializes the Supabase client with a security proxy to restrict table access |
| `js/analytics.js` | Tracks page views, clicks, scroll depth, and session data via Supabase |

## License

© 2026 New Bridges ABA. All rights reserved.
