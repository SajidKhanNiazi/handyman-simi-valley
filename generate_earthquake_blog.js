const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'blog', 'wildfire-home-hardening-simi-valley', 'index.html');
const destDir = path.join(__dirname, 'blog', 'earthquake-proofing-your-simi-valley-home');
const destPath = path.join(destDir, 'index.html');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let html = fs.readFileSync(srcPath, 'utf8');

// Title and Meta
html = html.replace(/<title>.*?<\/title>/, '<title>Earthquake-Proofing Your Simi Valley Home | Checklist</title>');
html = html.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Practical earthquake prep for Simi Valley homeowners — water heater strapping law, securing furniture, and the free app that gives you seconds of warning.">');
html = html.replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://simivalleyhandymanco.com/blog/earthquake-proofing-your-simi-valley-home/">');

// Breadcrumb
html = html.replace(/<span class="text-ink font-bold">.*?<\/span>/, '<span class="text-ink font-bold">Earthquake-Proofing Your Simi Valley Home</span>');

// H1
html = html.replace(/<h1.*?>.*?<\/h1>/, '<h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-ink">Earthquake-Proofing Your Simi Valley Home</h1>');

// Image
html = html.replace(/src="\/assets\/image\/wildfire-home-hardening-hero\.png"/, 'src="/assets/image/earthquake-proofing-hero.png"');
html = html.replace(/alt="California ranch-style home in Simi Valley with clear defensible space"/, 'alt="Simi Valley home interior during earthquake preparation"');

// Replace Article Content section
const articleStart = html.indexOf('<article class="bg-white px-4 pb-16">');
const articleEnd = html.indexOf('<!-- FAQs Section -->');

const newArticleContent = `<article class="bg-white px-4 pb-16">
      <div class="mx-auto max-w-3xl prose prose-slate prose-lg md:prose-xl text-slate-700">
        
        <p class="lead text-xl md:text-2xl text-slate-800 font-medium">The Santa Susana and Simi faults run close to Simi Valley, and most earthquake damage in a home comes from a short list of preventable causes — an unsecured water heater, top-heavy furniture that tips, and items that fall off shelves. None of the fixes below are expensive or complicated, and one of them is actually required by California law.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">Water Heater Strapping — This One Isn't Optional</h2>
        <p>Under <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=19211." target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">California Health and Safety Code 19211</a>, <strong>every residential water heater — new, replacement, or already installed — must be braced, anchored, or strapped</strong> to resist falling or shifting during an earthquake. This isn't a suggestion; it's been state law since 1991, and if you ever sell your home, you're legally required to certify in writing that your water heater complies.</p>
        
        <p>The current standard is a <strong>two-strap method</strong> — one strap in the upper third of the tank, one in the lower third, anchored into wall framing (not just drywall). This standard exists because of real failures: after the 1989 Loma Prieta and 1994 Northridge earthquakes, investigators found that older single-strap and thin plumber's-tape setups frequently failed, letting water heaters tip, shear gas lines, and cause flooding or fire risk. If your straps look old, thin, or like they were installed with basic hardware-store plumber's tape rather than a proper seismic strapping kit, it's worth having them checked.</p>

        <div class="my-8 pl-6 border-l-4 border-slate-300">
          <h3 class="text-lg font-bold text-ink mt-0 mb-2">Is My Water Heater Strapping Actually Up to Code?</h3>
          <p class="text-base text-slate-700 m-0">If you're not sure when your straps were last installed or inspected, a quick way to check is a gentle push on the tank — if it wiggles or shifts, the strapping likely needs to be tightened or replaced. This is a quick, inexpensive fix, and one of the highest-value things you can do for earthquake preparedness in a Simi Valley home.</p>
        </div>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">Securing the Rest of the House</h2>
        <ul>
          <li><strong>Top-heavy furniture</strong> — bookshelves, dressers, and tall cabinets should be anchored to a wall stud, not just resting freely, especially in bedrooms</li>
          <li><strong>Cabinet latches</strong> — kitchen and bathroom cabinets with simple latches keep contents from flying open and spilling glass or heavy items during shaking</li>
          <li><strong>Heavy items on shelves</strong> — move anything heavy or breakable to lower shelves rather than up high, where it has further to fall</li>
          <li><strong>Wall-mounted TVs and mirrors</strong> — confirm these are mounted into studs (see our <a href="/services/tv-mounting-furniture-assembly/" class="text-brand font-semibold underline">TV Mounting & Furniture Assembly</a> page), not just drywall anchors</li>
          <li><strong>Emergency shut-offs</strong> — know where your gas shut-off valve is located and how to use it, in case a leak occurs after a quake</li>
        </ul>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">A Tool Worth Knowing About: Earthquake Early Warning</h2>
        <p>California operates a statewide earthquake early warning system called <strong>MyShake</strong>, built by UC Berkeley's Seismology Lab in partnership with the state's Office of Emergency Services. It's free, works on both iPhone and Android, and can give several seconds of advance warning — sometimes more than ten — before shaking actually arrives, for earthquakes of magnitude 4.5 or greater. Several seconds isn't much, but it's enough time to drop, cover, and hold on, or step away from something that could fall.</p>
        
        <p>If you have an Android phone, earthquake alerts are often already built in automatically through a partnership between the state and Google — worth checking your phone's Settings app under Safety & Emergency to confirm it's turned on, even if you never download a separate app. You can learn more at <a href="https://earthquake.ca.gov/" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline font-semibold">earthquake.ca.gov</a>.</p>

        <div class="my-8 pl-6 border-l-4 border-slate-300">
          <h3 class="text-lg font-bold text-ink mt-0 mb-2">Do I Need to Download an App to Get Earthquake Alerts?</h3>
          <p class="text-base text-slate-700 m-0">Not necessarily — many Android phones have this built in automatically, and Wireless Emergency Alerts (text-message-based warnings for larger earthquakes) work on any modern smartphone without an app. Downloading the MyShake app adds a few extra features, including alerts for smaller earthquakes than the automatic system covers, but isn't strictly required to get a warning.</p>
        </div>

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">What's DIY vs. What Needs a Professional</h2>
        <ul>
          <li><strong>Handyman scope:</strong> water heater strap checks and replacement, furniture anchoring, cabinet latches, securing wall-mounted TVs and shelving</li>
          <li><strong>Bigger projects, outside handyman scope:</strong> structural retrofitting (foundation bolting, cripple wall bracing) is a specialized, often permitted job for a licensed contractor — if you're concerned about your home's structural seismic readiness specifically (common in homes built before the 1980s), that's worth a conversation with a retrofit specialist, not a handyman visit</li>
        </ul>

      </div>
    </article>

    `;

html = html.substring(0, articleStart) + newArticleContent + html.substring(articleEnd);

// Replace FAQs section
const faqStart = html.indexOf('<!-- FAQs Section -->');
const faqEnd = html.indexOf('<!-- Estimate / CTA Section -->');

const newFaqContent = `<!-- FAQs Section -->
    <section class="mx-auto max-w-3xl px-4 py-16 bg-slate-50 border-t border-slate-200/60 rounded-t-3xl mb-12">
      <h2 class="text-2xl font-bold text-ink md:text-3xl mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Is water heater strapping actually required by law, or just recommended? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Required — California Health and Safety Code 19211 mandates it for all residential water heaters, not just new installations, and it's been law since 1991.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How do I know if my water heater strapping is done correctly? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">It should have two straps — one in the upper third of the tank, one in the lower third — anchored into wall studs, not just drywall, and using a proper strapping kit rather than thin plumber's tape.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">What's the MyShake app, and is it actually useful? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">It's California's free earthquake early warning app, and it can give real advance notice — sometimes ten or more seconds — before shaking arrives for larger earthquakes. That's genuinely enough time to take a protective action.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Can Simi Valley Handyman Co. check my water heater strapping? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Yes — this is a quick, common part of our general home safety and repair visits. See our <a href="/services/plumbing-fixture-repair/" class="text-brand font-semibold underline">Plumbing Fixture Repair</a> page.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Does earthquake preparedness affect my home insurance? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Possibly, depending on your provider and policy — we're not insurance advisors, so check directly with your provider, but documented, code-compliant water heater strapping is a common item insurers and home inspectors both look for.</p>
        </details>
      </div>
    </section>

    `;

html = html.substring(0, faqStart) + newFaqContent + html.substring(faqEnd);

// Replace CTA text
html = html.replace(/<h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed\?<\/h2>\s*<p class="mt-4 text-lg text-slate-700">.*?<\/p>/, '<h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>\n          <p class="mt-4 text-lg text-slate-700">Water heater strapping overdue for a check, or furniture that needs anchoring? Call or text us with what\'s going on — we\'ll give you a straight answer and a real price.</p>');

// Ensure CTA pattern uses "Call Now" tel link
html = html.replace(/<a href="tel:8055550142" class="btn-primary">.*?<\/a>/, '<a href="tel:8055550142" class="btn-primary"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');


// Replace JSON-LD schema
const schemaStart = html.indexOf('<script type="application/ld+json">');
const schemaEnd = html.indexOf('</script>', schemaStart) + 9;

const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Earthquake-Proofing Your Simi Valley Home | Checklist",
      "description": "Practical earthquake prep for Simi Valley homeowners — water heater strapping law, securing furniture, and the free app that gives you seconds of warning.",
      "url": "https://simivalleyhandymanco.com/blog/earthquake-proofing-your-simi-valley-home/",
      "publisher": {
        "@type": "LocalBusiness",
        "name": "Simi Valley Handyman Co.",
        "url": "https://simivalleyhandymanco.com",
        "logo": "https://simivalleyhandymanco.com/assets/image/simi-valley-handyman-co-logo.webp"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is water heater strapping actually required by law, or just recommended?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Required — California Health and Safety Code 19211 mandates it for all residential water heaters, not just new installations, and it's been law since 1991."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my water heater strapping is done correctly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It should have two straps — one in the upper third of the tank, one in the lower third — anchored into wall studs, not just drywall, and using a proper strapping kit rather than thin plumber's tape."
          }
        },
        {
          "@type": "Question",
          "name": "What's the MyShake app, and is it actually useful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's California's free earthquake early warning app, and it can give real advance notice — sometimes ten or more seconds — before shaking arrives for larger earthquakes. That's genuinely enough time to take a protective action."
          }
        },
        {
          "@type": "Question",
          "name": "Can Simi Valley Handyman Co. check my water heater strapping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — this is a quick, common part of our general home safety and repair visits. See our Plumbing Fixture Repair page."
          }
        },
        {
          "@type": "Question",
          "name": "Does earthquake preparedness affect my home insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possibly, depending on your provider and policy — we're not insurance advisors, so check directly with your provider, but documented, code-compliant water heater strapping is a common item insurers and home inspectors both look for."
          }
        }
      ]
    }
  ]
}
</script>`;

html = html.substring(0, schemaStart) + newSchema + html.substring(schemaEnd);

fs.writeFileSync(destPath, html);
console.log('Created new blog post at ' + destPath);

