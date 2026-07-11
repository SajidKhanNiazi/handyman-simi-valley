const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'services/gutter-cleaning-repair/index.html');
const destPath = path.join(__dirname, 'blog/wildfire-home-hardening-simi-valley/index.html');

const sourceHTML = fs.readFileSync(sourcePath, 'utf8');

// Extract header and footer
const headerEndIdx = sourceHTML.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const footerStartIdx = sourceHTML.indexOf('<footer class="bg-ink pb-24 text-slate-300 md:pb-8">');

const header = sourceHTML.substring(0, headerEndIdx);
const footer = sourceHTML.substring(footerStartIdx);

// Modify header meta tags and title
let newHeader = header
  .replace(/<title>.*?<\/title>/, '<title>Wildfire Home Hardening in Simi Valley, CA | Checklist</title>')
  .replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Practical wildfire prep for Simi Valley homeowners — gutters, vents, decks, and defensible space, before Santa Ana wind season hits. Free checklist.">')
  .replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://www.simivalleyhandymanco.com/blog/wildfire-home-hardening-simi-valley/">');

const blogContent = `
    <!-- Article Header -->
    <section class="bg-white px-4 pt-16 pb-12">
      <div class="mx-auto max-w-3xl">
        <nav class="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
          <a href="/" class="hover:text-brand transition-colors text-slate-500">Home</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <a href="/blog/" class="hover:text-brand transition-colors text-slate-500">Blog</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <span class="text-ink font-bold">Wildfire Home Hardening in Simi Valley</span>
        </nav>
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-ink">Wildfire Home Hardening in Simi Valley, CA</h1>
        
        <div class="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl">
           <img
            src="/assets/image/wildfire-home-hardening-hero.png"
            alt="California ranch-style home in Simi Valley with clear defensible space"
            class="h-full w-full object-cover"
          >
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="bg-white px-4 pb-16">
      <div class="mx-auto max-w-3xl prose prose-slate prose-lg md:prose-xl text-slate-700">
        
        <p class="lead text-xl md:text-2xl text-slate-800 font-medium">Most of Simi Valley sits in a high wildfire-risk zone, and the fixes that actually matter during a Santa Ana wind event are small, cheap, and mostly maintenance — not a major renovation. This is a practical, no-drama walkthrough of what to check and clear before wind season, not a scare piece.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">Why Wildfire Risk Is Different in Simi Valley</h2>
        <p>Santa Ana winds pick up through the pass in fall, and Red Flag Warning days bring dry, fast wind through the area. In a wind-driven event like that, embers landing on or near a structure — not direct flame contact — are what ignite most homes. That's why the checklist below focuses heavily on gutters, vents, and anything combustible sitting close to the house, not just general yard cleanup.</p>

        <!-- Regulatory / Authority Callout -->
        <div class="my-10 rounded-xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
          <div class="flex items-center gap-3 mb-4 text-ink">
            <i data-lucide="shield-check" class="h-6 w-6 text-brand"></i>
            <h2 class="text-xl font-bold m-0">Understanding Defensible Space Zones</h2>
          </div>
          <p class="text-base text-slate-700 mt-0 mb-4">California law (Public Resources Code 4291) requires homeowners in fire hazard severity zones to maintain defensible space, broken into zones by distance from the structure:</p>
          <ul class="text-base text-slate-700 space-y-3 mb-0">
            <li><strong>Zone 0 (0–5 feet from the house):</strong> the "ember-resistant zone" — closest to your home and the most important. State guidance calls for hardscape (gravel, pavers, concrete) instead of bark or mulch, and removal of dead vegetation and debris from roofs, gutters, decks, and porches. As of 2026, the state is still finalizing formal Zone 0 regulations, so specifics may continue to be refined — check current guidance at <a href="https://www.readyforwildfire.org/" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">readyforwildfire.org</a> or with your local fire department before treating any specific number as final.</li>
            <li><strong>Zone 1 (5–30 feet):</strong> dead vegetation removal, spacing between shrubs and trees, and clearing branches that overhang the roof.</li>
            <li><strong>Zone 2 (30–100 feet, or to your property line):</strong> reduced fuel load — mowed grass, spaced-out vegetation, and cleared dead material.</li>
          </ul>
          <p class="text-base text-slate-700 mt-4 mb-0">Local requirements can be stricter than the state minimum, so it's worth checking with the Ventura County Fire Protection District for anything specific to your property, especially if you've received a compliance notice.</p>
        </div>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">The Home-Hardening Checklist</h2>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Roof & Gutters</h3>
        <ul>
          <li>Clear gutters and roof valleys of leaves and debris — this is one of the single highest-value, lowest-cost things you can do</li>
          <li>Repair or replace damaged or missing roof tiles/shingles where embers could get underneath</li>
          <li>See our <a href="/services/gutter-cleaning-repair/" class="text-brand font-semibold underline">Gutter Cleaning & Repair service</a></li>
        </ul>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Vents & Eaves</h3>
        <ul>
          <li>Check attic, foundation, and soffit vents — state guidance recommends fine mesh screening to help block ember entry</li>
          <li>Seal visible gaps where eaves meet the roofline</li>
        </ul>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Decks, Fences & Gates</h3>
        <ul>
          <li>Check for loose or damaged fence panels and gate hardware — wind-driven debris and loose materials are exactly what state guidance flags for removal near the structure</li>
          <li>Clear anything stored underneath a deck (Zone 0 guidance specifically calls this out)</li>
          <li>See our <a href="/services/fencing-gates-pet-doors/" class="text-brand font-semibold underline">Fencing, Gates & Pet Doors</a> and <a href="/services/deck-patio-repair/" class="text-brand font-semibold underline">Deck & Patio Repair</a> pages</li>
        </ul>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Windows & Doors</h3>
        <ul>
          <li>Check weatherstripping and door/window seals for gaps</li>
          <li>Full ember-resistant window replacement is a larger project outside standard handyman scope — worth knowing about, but not something we'd oversell as a quick fix</li>
        </ul>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Defensible Space (Yard)</h3>
        <ul>
          <li>Move firewood, planters, and anything else combustible away from the house (Zone 0)</li>
          <li>Keep dead vegetation, leaves, and debris cleared from around the structure (Zone 0 and Zone 1)</li>
          <li>Maintain spacing between shrubs and trees further out (Zone 1 and Zone 2)</li>
        </ul>

        <div class="my-8 pl-6 border-l-4 border-slate-300">
          <h3 class="text-lg font-bold text-ink mt-0 mb-2">How Do I Know If My Home Is in a High-Risk Fire Zone?</h3>
          <p class="text-base text-slate-700 m-0">Check your property against California's official Fire Hazard Severity Zone maps, available through Cal Fire, or contact the Ventura County Fire Protection District directly — this is the authoritative source rather than a general estimate, since zone designations are mapped and periodically updated.</p>
        </div>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">When to Do This — Timing Matters</h2>
        <p>Late summer and early fall, before Santa Ana wind season typically ramps up, is the best window. Defensible space isn't a one-time project, though — state guidance treats it as an ongoing responsibility, worth revisiting each year as conditions change.</p>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">What's DIY vs. What Needs a Professional</h2>
        <ul>
          <li><strong>Handyman scope:</strong> gutter clearing, minor fence and gate repair, weatherstripping, general debris removal near the structure</li>
          <li><strong>Better suited to a specialist:</strong> significant tree pruning or removal (an arborist), roof tile/shingle replacement (a roofer), and anything involving power line clearance (the utility company) — we'll tell you plainly if what you're describing is outside what we handle, rather than take on a job we're not the right fit for</li>
        </ul>

        <!-- Interactive Checklist Component -->
        <div class="my-12 rounded-xl bg-white border-2 border-brand/20 p-8 shadow-sm">
          <div class="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <i data-lucide="list-checks" class="h-7 w-7 text-brand"></i>
            <h2 class="text-2xl font-bold text-ink m-0">Quick Pre-Season Checklist</h2>
          </div>
          <div class="space-y-4">
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Gutters and roof valleys cleared of debris</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Vents checked for fine mesh screening</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Nothing combustible stored within 5 feet of the house</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Fence panels and gate hardware checked and secured</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Deck cleared underneath</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Weatherstripping checked on doors and windows</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-brand focus:ring-brand accent-brand">
              <span class="text-slate-700 group-hover:text-ink transition-colors font-medium">Dead vegetation cleared within 30 feet of the structure</span>
            </label>
          </div>
        </div>
      </div>
    </article>

    <!-- FAQs Section -->
    <section class="mx-auto max-w-3xl px-4 py-16 bg-slate-50 border-t border-slate-200/60 rounded-t-3xl mb-12">
      <h2 class="text-2xl font-bold text-ink md:text-3xl mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How often should I redo wildfire home hardening prep? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">At least once a year, ideally before fall wind season — but it's worth a quick check anytime after a major storm or windy stretch that could have shifted debris back into place.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Is my home actually in a high-risk zone? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Check California's official Fire Hazard Severity Zone maps through Cal Fire, or contact the Ventura County Fire Protection District directly for your specific property.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Does clearing gutters really make a meaningful difference? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Yes — debris-clogged gutters are exactly the kind of fuel state fire agencies flag as a priority in Zone 0 guidance, since they sit directly against the structure.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Can Simi Valley Handyman Co. help with all of this, or just some of it? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">We handle the maintenance-level work — gutters, fencing, gate hardware, weatherstripping, general debris clearing. Vegetation management, tree work, and roofing are outside our scope, and we'll point you toward the right specialist for those.</p>
        </details>
      </div>
    </section>

    <!-- Estimate / CTA Section -->
    <section id="estimate-form" class="bg-slate-50 border-t border-slate-200">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>
          <p class="mt-4 text-lg text-slate-700">Gutters, fencing, or weatherstripping overdue for a check before wind season? Send us a few details and we'll give you a straight estimate before you commit to anything.</p>
          <div class="mt-6 flex flex-wrap gap-4">
            <a href="tel:8055550142" class="btn-primary">Call or Text (805) 555-0142</a>
          </div>
        </div>

        <form class="card-leander bg-white">
          <h3 class="text-xl font-bold text-ink">Get a Free Estimate</h3>
          <div class="mt-4 space-y-4">
            <label class="block">Name<input type="text" name="name" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Phone<input type="tel" name="phone" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Email<input type="email" name="email" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Service Needed
              <select name="service" class="mt-1 w-full rounded border border-slate-300 px-3 py-2">
                <option>Gutter Cleaning &amp; Repair</option>
                <option>Fencing, Gates &amp; Pet Doors</option>
                <option>General Repairs &amp; Punch List</option>
                <option>Drywall Repair &amp; Painting</option>
                <option>Plumbing Fixture Repairs</option>
                <option>Electrical &amp; Smart Home Installs</option>
                <option>Garage Doors, Decks &amp; General Repairs</option>
              </select>
            </label>
            <label class="block">Neighborhood
              <select name="neighborhood" class="mt-1 w-full rounded border border-slate-300 px-3 py-2">
                <option>Wood Ranch</option>
                <option>Central Simi Valley</option>
                <option>East Simi Valley</option>
                <option>Big Sky</option>
                <option>Santa Susana</option>
              </select>
            </label>
            <label class="block">Message<textarea name="message" rows="4" class="mt-1 w-full rounded border border-slate-300 px-3 py-2"></textarea></label>
            <button type="submit" class="btn-primary w-full">Get a Free Estimate →</button>
          </div>
        </form>
      </div>
    </section>
`;

let finalHTML = newHeader + '\n' + blogContent + '\n' + footer;

// update schema
finalHTML = finalHTML.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wildfire Home Hardening in Simi Valley, CA",
  "datePublished": "2026-07-11",
  "dateModified": "2026-07-11",
  "author": {
    "@type": "Organization",
    "name": "Simi Valley Handyman Co."
  },
  "publisher": {
    "@type": "Organization",
    "name": "Simi Valley Handyman Co.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.simivalleyhandymanco.com/assets/image/handyman%20simi%20valley%20logo.webp"
    }
  }
}
</script>`);

const faqSchemaStr = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I redo wildfire home hardening prep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least once a year, ideally before fall wind season — but it's worth a quick check anytime after a major storm or windy stretch that could have shifted debris back into place."
      }
    },
    {
      "@type": "Question",
      "name": "Is my home actually in a high-risk zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check California's official Fire Hazard Severity Zone maps through Cal Fire, or contact the Ventura County Fire Protection District directly for your specific property."
      }
    },
    {
      "@type": "Question",
      "name": "Does clearing gutters really make a meaningful difference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — debris-clogged gutters are exactly the kind of fuel state fire agencies flag as a priority in Zone 0 guidance, since they sit directly against the structure."
      }
    },
    {
      "@type": "Question",
      "name": "Can Simi Valley Handyman Co. help with all of this, or just some of it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle the maintenance-level work — gutters, fencing, gate hardware, weatherstripping, general debris clearing. Vegetation management, tree work, and roofing are outside our scope, and we'll point you toward the right specialist for those."
      }
    }
  ]
}
</script>`;

finalHTML = finalHTML.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>[\s\n]*<\/body>/, faqSchemaStr + '\n</body>');


fs.writeFileSync(destPath, finalHTML, 'utf8');
console.log('Blog post generated successfully at', destPath);
