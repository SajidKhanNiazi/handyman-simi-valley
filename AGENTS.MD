# Project Brief & Agent Guidelines

## Design Pattern
- **CSS Framework**: Tailwind CSS
- **Icon Library**: Lucide Icons
- **Brand Colors**: Ink (`#0f172a`), Brand/Blue (`#2563eb`), Slate for neutrals.
- **Tone**: Practical, calm, no-drama, answering questions directly.

## CTA Pattern
- **Primary CTA**: "Call Now" using a `tel:8055550142` link.
- Do **NOT** use "Get a Free Estimate" forms or CTAs. The site is phone-first. All future page builds (Contact, About, Gallery, Remaining Blog Posts) should use the "Call Now" pattern from the start.
- **Button Styling**: `<a href="tel:8055550142" class="btn-primary"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>` (or similar standard button classes).

## Architecture
- Standalone HTML files per page/route.
- No JavaScript frameworks (Vite is used just for bundling/dev server).
- Clean, semantic HTML.
- **Schema**: Include appropriate JSON-LD schema (e.g., LocalBusiness, Service, Article, FAQPage).
