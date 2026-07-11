const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'services/gutter-cleaning-repair/index.html');
const destPath = path.join(__dirname, 'blog/simi-valley-seasonal-home-maintenance-checklist/index.html');

const sourceHTML = fs.readFileSync(sourcePath, 'utf8');

// Extract header and footer
const headerEndIdx = sourceHTML.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const footerStartIdx = sourceHTML.indexOf('<footer class="bg-ink pb-24 text-slate-300 md:pb-8">');

const header = sourceHTML.substring(0, headerEndIdx);
const footer = sourceHTML.substring(footerStartIdx);

// Modify header meta tags and title
let newHeader = header
  .replace(/<title>.*?<\/title>/, '<title>Simi Valley Seasonal Home Maintenance Checklist 2026</title>')
  .replace(/<meta name="description" content=".*?">/, '<meta name="description" content="A season-by-season home maintenance checklist built for Simi Valley\'s actual climate — wet season, dry season, wind season, and year-round basics.">')
  .replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://simivalleyhandymanco.com/blog/simi-valley-seasonal-home-maintenance-checklist/">');

const blogContent = `
    <!-- Article Header -->
    <section class="bg-white px-4 pt-16 pb-12">
      <div class="mx-auto max-w-3xl">
        <nav class="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
          <a href="/" class="hover:text-brand transition-colors text-slate-500">Home</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <a href="/blog/" class="hover:text-brand transition-colors text-slate-500">Blog</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <span class="text-ink font-bold">Simi Valley Seasonal Home Maintenance Checklist</span>
        </nav>
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-ink">Simi Valley Seasonal Home Maintenance Checklist</h1>
        
        <div class="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl">
           <img
            src="/assets/image/seasonal-home-maintenance-hero.png"
            alt="Well-maintained home exterior in Simi Valley"
            class="h-full w-full object-cover"
          >
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="bg-white px-4 pb-16">
      <div class="mx-auto max-w-3xl prose prose-slate prose-lg md:prose-xl text-slate-700">
        
        <p class="lead text-xl md:text-2xl text-slate-800 font-medium">Simi Valley's maintenance calendar doesn't look like a generic "spring cleaning" list — nearly all the year's rain falls in a five-month stretch, wind season brings real wildfire risk, and long dry summers put different wear on a house than a place with year-round rain. Here's what actually matters, organized by the season it matters in.</p>

        <!-- Table of Contents / Jump Links -->
        <div class="my-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 class="text-lg font-bold text-ink mt-0 mb-4">Jump to a Season:</h3>
          <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8 m-0 p-0 list-none text-base">
            <li><a href="#wet-season" class="text-brand font-semibold hover:underline flex items-center gap-2"><i data-lucide="cloud-rain" class="h-4 w-4"></i> Wet Season</a></li>
            <li><a href="#dry-season" class="text-brand font-semibold hover:underline flex items-center gap-2"><i data-lucide="sun" class="h-4 w-4"></i> Dry Season</a></li>
            <li><a href="#wind-season" class="text-brand font-semibold hover:underline flex items-center gap-2"><i data-lucide="wind" class="h-4 w-4"></i> Wind Season</a></li>
            <li><a href="#year-round" class="text-brand font-semibold hover:underline flex items-center gap-2"><i data-lucide="home" class="h-4 w-4"></i> Year-Round</a></li>
          </ul>
        </div>

        <hr class="my-10 border-slate-200">

        <h2 id="wet-season" class="text-2xl font-bold text-ink mt-12 mb-6 scroll-mt-24">Wet Season (Roughly November Through March)</h2>
        <p>Nearly all of Simi Valley's annual rainfall happens in this window. If your gutters, roof, and drainage haven't been checked since last spring, this is when problems show up.</p>
        <ul>
          <li>Clear gutters and downspouts before the rain starts, not after the first storm reveals the problem</li>
          <li>Check for roof leaks — even a small one, left through a full wet season, can turn into a drywall repair</li>
          <li>Walk the yard after a heavy rain and note any spots where water pools instead of draining away from the foundation</li>
          <li>Check deck boards for soft spots or early rot — see our <a href="/services/deck-patio-repair/" class="text-brand font-semibold underline">Deck & Patio Repair</a> page</li>
          <li>If a leak has already caused visible drywall damage, don't wait until it dries out to deal with it — see our <a href="/services/drywall-repair/" class="text-brand font-semibold underline">Drywall Repair</a> page</li>
        </ul>

        <h2 id="dry-season" class="text-2xl font-bold text-ink mt-12 mb-6 scroll-mt-24">Dry Season (Roughly April Through October)</h2>
        <p>Simi Valley gets almost no rain for about seven months of the year. Irrigation carries the load, and heat starts to take a toll on exterior surfaces.</p>
        <ul>
          <li>Check sprinkler heads and irrigation lines for leaks or coverage gaps before the heat sets in — see our <a href="/services/sprinkler-irrigation-repair/" class="text-brand font-semibold underline">Sprinkler & Irrigation Repair</a> page</li>
          <li>Inspect exterior paint and trim for fading, cracking, or peeling from sun exposure — see our <a href="/services/painting-interior-exterior/" class="text-brand font-semibold underline">Painting Interior & Exterior</a> page</li>
          <li>Check weatherstripping around doors and windows to help keep cooling costs down through the hottest stretch</li>
          <li>Ceiling fans get real use this time of year — a good time to check if any rooms could use one installed. See our <a href="/services/electrical-fixture-install/" class="text-brand font-semibold underline">Electrical Fixture Install</a> page</li>
        </ul>

        <h2 id="wind-season" class="text-2xl font-bold text-ink mt-12 mb-6 scroll-mt-24">Fall — Santa Ana Wind Season</h2>
        <p>Red Flag Warning days bring dry, fast wind through the pass, and most of Simi Valley sits in a high wildfire-risk zone. This is the highest-stakes maintenance window of the year.</p>
        <ul>
          <li>Clear gutters and roof debris before wind season, even if you cleared them earlier in the year for wet-season prep — debris accumulates year-round</li>
          <li>Check fence panels and gate hardware for anything loose that wind could turn into debris — see our <a href="/services/fencing-gates-pet-doors/" class="text-brand font-semibold underline">Fencing, Gates & Pet Doors</a> page</li>
          <li>Read our full <a href="/blog/wildfire-home-hardening-simi-valley/" class="text-brand font-semibold underline">Wildfire Home Hardening checklist</a> for a complete walkthrough</li>
          <li><em>Santa Ana Wind Home Prep (link coming soon)</em></li>
        </ul>

        <h2 id="year-round" class="text-2xl font-bold text-ink mt-12 mb-6 scroll-mt-24">Year-Round Basics</h2>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Hard Water Wear</h3>
        <p>Simi Valley's groundwater runs hard, and it wears down faucet cartridges, showerheads, and garbage disposal seals faster than in areas with softer water. If a fixture has failed more than once in a few years, hard water is usually why — not bad luck. See our <a href="/services/plumbing-fixture-repair/" class="text-brand font-semibold underline">Plumbing Fixture Repair</a> page.</p>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Earthquake Readiness</h3>
        <p>The Santa Susana and Simi faults run close by. A few cheap, fast jobs matter more here than in most places: water heater strapping, cabinet latches, and securing top-heavy furniture. <em>Earthquake Proofing (link coming soon)</em></p>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">The General Punch List</h3>
        <p>Beyond the seasonal items above, most homes accumulate a running list of smaller things — a sticking door, loose cabinet hardware, a drywall ding. See our <a href="/services/general-repairs-punch-list/" class="text-brand font-semibold underline">General Repairs & Punch List</a> page for how we handle these in one visit instead of five separate calls.</p>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">A Simple Way to Think About Timing</h2>
        <p>If you only do two maintenance passes a year, make them:</p>
        <ol>
          <li><strong>Late summer / early fall</strong> — before Santa Ana wind season (gutters, fencing, wildfire hardening)</li>
          <li><strong>Late fall / early winter</strong> — before the wet season fully sets in (gutters again, roof check, drainage)</li>
        </ol>
        <p>Everything else on this list can be handled as it comes up, but these two windows are where a little attention goes the furthest.</p>

      </div>
    </article>

    <!-- FAQs Section -->
    <section class="mx-auto max-w-3xl px-4 py-16 bg-slate-50 border-t border-slate-200/60 rounded-t-3xl mb-12">
      <h2 class="text-2xl font-bold text-ink md:text-3xl mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How often should I have my gutters cleaned in Simi Valley? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">At least twice a year — once before wind season in the fall and once before the wet season fully sets in. See our <a href="/services/gutter-cleaning-repair/" class="text-brand underline">Gutter Cleaning & Repair</a> page.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Is this checklist different from what you'd use somewhere else in Southern California? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Yes — coastal areas don't deal with the same wind-driven wildfire risk or the same concentrated rainy season, and inland desert areas don't have Simi Valley's specific hard-water profile. This list is built around Simi Valley's actual conditions, not generic Southern California advice.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Do I need to do all of this myself? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">No — most of what's on this list is exactly what we handle. Bundle several items into one visit rather than tackling them one at a time.</p>
        </details>
      </div>
    </section>

    <!-- Estimate / CTA Section -->
    <section id="estimate-form" class="bg-slate-50 border-t border-slate-200">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>
          <p class="mt-4 text-lg text-slate-700">Whatever's on your list — seasonal or not — we'll take care of it in one visit.</p>
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
                <option>General Repairs &amp; Punch List</option>
                <option>Gutter Cleaning &amp; Repair</option>
                <option>Drywall Repair &amp; Painting</option>
                <option>Plumbing Fixture Repairs</option>
                <option>Electrical &amp; Smart Home Installs</option>
                <option>Fencing, Gates &amp; Pet Doors</option>
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
  "headline": "Simi Valley Seasonal Home Maintenance Checklist 2026",
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
      "url": "https://simivalleyhandymanco.com/assets/image/handyman%20simi%20valley%20logo.webp"
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
      "name": "How often should I have my gutters cleaned in Simi Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least twice a year — once before wind season in the fall and once before the wet season fully sets in. See our Gutter Cleaning & Repair page."
      }
    },
    {
      "@type": "Question",
      "name": "Is this checklist different from what you'd use somewhere else in Southern California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — coastal areas don't deal with the same wind-driven wildfire risk or the same concentrated rainy season, and inland desert areas don't have Simi Valley's specific hard-water profile. This list is built around Simi Valley's actual conditions, not generic Southern California advice."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to do all of this myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — most of what's on this list is exactly what we handle. Bundle several items into one visit rather than tackling them one at a time."
      }
    }
  ]
}
</script>`;

finalHTML = finalHTML.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>[\s\n]*<\/body>/, faqSchemaStr + '\n</body>');


fs.writeFileSync(destPath, finalHTML, 'utf8');
console.log('Blog post generated successfully at', destPath);
