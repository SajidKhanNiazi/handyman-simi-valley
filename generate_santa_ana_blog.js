const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'services/gutter-cleaning-repair/index.html');
const destPath = path.join(__dirname, 'blog/santa-ana-wind-home-prep-simi-valley/index.html');

const sourceHTML = fs.readFileSync(sourcePath, 'utf8');

// Extract header and footer
const headerEndIdx = sourceHTML.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const footerStartIdx = sourceHTML.indexOf('<footer class="bg-ink pb-24 text-slate-300 md:pb-8">');

const header = sourceHTML.substring(0, headerEndIdx);
const footer = sourceHTML.substring(footerStartIdx);

// Modify header meta tags and title
let newHeader = header
  .replace(/<title>.*?<\/title>/, '<title>Santa Ana Wind Season Home Prep in Simi Valley, CA</title>')
  .replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Get your Simi Valley home ready for Santa Ana wind season — securing your property and preparing for possible SCE power shutoffs (PSPS).">')
  .replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://simivalleyhandymanco.com/blog/santa-ana-wind-home-prep-simi-valley/">');

const blogContent = `
    <!-- Article Header -->
    <section class="bg-white px-4 pt-16 pb-12">
      <div class="mx-auto max-w-3xl">
        <nav class="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
          <a href="/" class="hover:text-brand transition-colors text-slate-500">Home</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <a href="/blog/" class="hover:text-brand transition-colors text-slate-500">Blog</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <span class="text-ink font-bold">Santa Ana Wind Season Home Prep</span>
        </nav>
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-ink">Santa Ana Wind Season Home Prep in Simi Valley, CA</h1>
        
        <div class="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl">
           <img
            src="/assets/image/santa-ana-wind-home-prep-hero.png"
            alt="Well-maintained home exterior in Simi Valley showing Santa Ana wind season prep"
            class="h-full w-full object-cover"
          >
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="bg-white px-4 pb-16">
      <div class="mx-auto max-w-3xl prose prose-slate prose-lg md:prose-xl text-slate-700">
        
        <p class="lead text-xl md:text-2xl text-slate-800 font-medium">Santa Ana wind season in Simi Valley means more than just a breezy week — it means securing anything loose around your property, and increasingly, preparing for the possibility that Southern California Edison shuts off power in advance as a wildfire-prevention measure. Here's what to actually do about both.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">What Makes Santa Ana Wind Season Different Here</h2>
        <p>Wind moving through the pass in fall brings dry, fast conditions, and Red Flag Warning days are treated seriously by both fire agencies and the local utility. Southern California Edison has confirmed Simi Valley is within its Public Safety Power Shutoff coverage area — meaning power can be intentionally shut off during high-wind, high-fire-risk conditions to reduce the chance of utility equipment sparking a fire.</p>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">Physical Home Prep Before Wind Season</h2>
        <ul>
          <li><strong>Secure or store loose outdoor items</strong> — patio furniture, planters, trash cans, anything that could become wind-blown debris</li>
          <li><strong>Check fence panels and gate hardware</strong> for anything loose — see our <a href="/services/fencing-gates-pet-doors/" class="text-brand font-semibold underline">Fencing, Gates & Pet Doors</a> page</li>
          <li><strong>Clear gutters and roof debris</strong> before wind picks up — see our <a href="/services/gutter-cleaning-repair/" class="text-brand font-semibold underline">Gutter Cleaning & Repair</a> page</li>
          <li><strong>Trim overhanging or dead tree branches</strong> near the house and power lines (larger tree work is outside handyman scope — this is a good job for an arborist if it involves significant branches or anything near power lines)</li>
          <li><strong>Check your garage door</strong> for anything loose in the track or opener — see our <a href="/services/garage-door-repair/" class="text-brand font-semibold underline">Garage Door Repair</a> page, and see below for what to know if the power goes out</li>
        </ul>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">Public Safety Power Shutoffs (PSPS) — What Simi Valley Homeowners Need to Know</h2>
        <p>SCE considers several factors before calling a PSPS event, including high winds and Red Flag Warnings from the National Weather Service, low humidity, dry vegetation, and on-the-ground fire risk conditions. As of late 2025, SCE has indicated it expects PSPS events to become more frequent and potentially longer, and now provides about three days' notice before a planned shutoff where possible — up from two days previously.</p>
        
        <p>Outages tied to a PSPS event can last multiple days once weather conditions are factored in alongside the time needed to inspect equipment before power is restored — official guidance suggests planning to be without power for <strong>3 to 5 days</strong> during a significant event.</p>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">How Do I Get Notified Before a Power Shutoff in Simi Valley?</h3>
        <p>Sign up directly with Southern California Edison for outage alerts at <a href="https://www.sce.com/PSPS" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">sce.com/PSPS</a>, and separately register for Ventura County's own emergency alert system at <a href="https://vcalert.org/" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">VCAlert.org</a> (or text "VCALERT" to 313131) — these are two different systems and it's worth being signed up for both, since VC Alert covers broader emergency notifications beyond just power events.</p>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">How to Prepare for a Multi-Day Power Outage</h2>
        <ul>
          <li>Keep phones and any backup battery packs charged ahead of forecasted high-wind days</li>
          <li>Have a flashlight, batteries, and a small cash reserve on hand (card readers don't work without power)</li>
          <li>Plan ahead for anything requiring refrigeration — medication, in particular</li>
          <li>Know your garage door's manual release lever location — if the opener loses power, most garage doors can still be opened manually from inside</li>
          <li>Check that any battery backups on smoke detectors are current, since those still need to function during an outage</li>
        </ul>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">A Few Things Worth Knowing</h2>
        <ul>
          <li><strong>A PSPS is not the same as a wildfire evacuation order</strong> — it's a preventive utility measure, not a signal that a fire is imminent, though it's reasonable to stay alert to both types of alerts during high-wind conditions</li>
          <li><strong>Not every windy day triggers a PSPS</strong> — SCE weighs multiple conditions together, not wind alone</li>
          <li>The City of <a href="https://www.simivalley.org/" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">Simi Valley</a> does not control PSPS timing — SCE makes these decisions directly, and the City's role is mainly relaying information</li>
        </ul>

      </div>
    </article>

    <!-- FAQs Section -->
    <section class="mx-auto max-w-3xl px-4 py-16 bg-slate-50 border-t border-slate-200/60 rounded-t-3xl mb-12">
      <h2 class="text-2xl font-bold text-ink md:text-3xl mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">What is a Public Safety Power Shutoff (PSPS)? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">A planned, temporary power shutoff that Southern California Edison uses during high-wind, high-fire-risk conditions to reduce the chance that utility equipment sparks a wildfire.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How long do PSPS outages typically last? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Official guidance suggests preparing for 3 to 5 days, since the outage duration depends on both how long the risky weather conditions persist and the time needed to inspect equipment before restoring power.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How do I know if my home will be affected by a PSPS? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Check SCE's outage map and PSPS weather dashboard directly, and sign up for both SCE alerts and Ventura County's VC Alert system for advance notice.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Does every Santa Ana wind event trigger a power shutoff? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">No — SCE weighs multiple factors (wind, humidity, dry vegetation, on-the-ground conditions) together, not wind speed alone.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">What should I do with my garage door if the power goes out? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Most garage door openers have a manual release you can use from inside the garage — it's worth locating this before you actually need it during an outage.</p>
        </details>
      </div>
    </section>

    <!-- Estimate / CTA Section -->
    <section id="estimate-form" class="bg-slate-50 border-t border-slate-200">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>
          <p class="mt-4 text-lg text-slate-700">Fence, gutters, or garage door due for a check before wind season picks up? Send us a few details and we'll give you a straight estimate before you commit to anything.</p>
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
  "headline": "Santa Ana Wind Season Home Prep in Simi Valley, CA",
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
      "name": "What is a Public Safety Power Shutoff (PSPS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A planned, temporary power shutoff that Southern California Edison uses during high-wind, high-fire-risk conditions to reduce the chance that utility equipment sparks a wildfire."
      }
    },
    {
      "@type": "Question",
      "name": "How long do PSPS outages typically last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Official guidance suggests preparing for 3 to 5 days, since the outage duration depends on both how long the risky weather conditions persist and the time needed to inspect equipment before restoring power."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my home will be affected by a PSPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check SCE's outage map and PSPS weather dashboard directly, and sign up for both SCE alerts and Ventura County's VC Alert system for advance notice."
      }
    },
    {
      "@type": "Question",
      "name": "Does every Santa Ana wind event trigger a power shutoff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — SCE weighs multiple factors (wind, humidity, dry vegetation, on-the-ground conditions) together, not wind speed alone."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do with my garage door if the power goes out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most garage door openers have a manual release you can use from inside the garage — it's worth locating this before you actually need it during an outage."
      }
    }
  ]
}
</script>`;

finalHTML = finalHTML.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>[\s\n]*<\/body>/, faqSchemaStr + '\n</body>');


fs.writeFileSync(destPath, finalHTML, 'utf8');
console.log('Blog post generated successfully at', destPath);
