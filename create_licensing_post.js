const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'blog/wildfire-home-hardening-simi-valley/index.html');
let html = fs.readFileSync(templatePath, 'utf8');

// Replace Title, Description, Canonical
html = html.replace(/<title>.*?<\/title>/, '<title>California Handyman Licensing Laws Explained (2026)</title>');
html = html.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="What can a handyman legally do in California without a license? The real $1,000 rule, what it covers, and how to check if someone\'s actually compliant.">');
html = html.replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://simivalleyhandymanco.com/blog/california-handyman-licensing-explained/">');

// Replace main content
const mainContentStart = html.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const mainContentEnd = html.indexOf('</main>');

const newMainContent = `
    <!-- Article Header -->
    <section class="bg-white px-4 pt-16 pb-12">
      <div class="mx-auto max-w-3xl">
        <nav class="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
          <a href="/" class="hover:text-brand transition-colors text-slate-500">Home</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <a href="/blog/" class="hover:text-brand transition-colors text-slate-500">Blog</a>
          <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
          <span class="text-ink font-bold">California Handyman Licensing Explained</span>
        </nav>
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-ink">California Handyman Licensing Explained</h1>
      </div>
    </section>

    <!-- Article Content -->
    <article class="bg-white px-4 pb-16">
      <div class="mx-auto max-w-3xl prose prose-slate prose-lg md:prose-xl text-slate-700">
        
        <p class="lead text-xl md:text-2xl text-slate-800 font-medium">California doesn't issue a "handyman license." Instead, state law sets a dollar threshold — currently $1,000 — under which someone can legally do paid repair work without holding a contractor's license. Here's exactly what that means, what changed recently, and how to check whether someone you're hiring is actually operating within it.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">The Current Rule: $1,000, Not $500</h2>
        <p>As of <strong>January 1, 2025</strong>, California raised the unlicensed-work threshold from $500 to $1,000 under <strong>Assembly Bill 2622</strong> — the first increase since 1987. If you see a website or article citing $500, it's out of date; that figure hasn't been accurate since the start of 2025.</p>

        <p>Under the current rule, a person can legally perform paid work without a <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" class="text-brand font-semibold hover:underline">CSLB contractor's license</a> if <strong>all</strong> of the following are true:</p>
        <ul>
          <li>The <strong>total project cost</strong> — labor, materials, and any other associated costs combined — is <strong>$1,000 or less</strong></li>
          <li><strong>No building permit is required</strong> for the work</li>
          <li>The person <strong>does not employ anyone else</strong> on the job</li>
        </ul>

        <p>If any one of those three conditions isn't met — the job needs a permit, involves hired help, or the total simply exceeds $1,000 — the work legally requires a licensed contractor, regardless of how small any individual piece of it feels.</p>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">Can a Job Be Split Into Smaller Invoices to Stay Under $1,000?</h3>
        <p>No. The $1,000 threshold applies to the total project as a whole, not to how it's invoiced. The CSLB treats a single project as one project even if it's billed in phases — splitting a $1,800 job into two $900 invoices doesn't make it exempt.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">What This Actually Covers in Practice</h2>
        <p>The $1,000 rule is about <em>dollar value and scope</em>, not a specific list of allowed tasks — meaning a wide range of small jobs can fall within it: minor drywall repair, fixture swaps, small painting jobs, furniture assembly, and similar work. But two things override the dollar amount entirely:</p>

        <ul>
          <li><strong>Permits.</strong> Many types of work — most electrical panel changes, gas line work, and structural modifications — require a permit regardless of cost, which automatically takes them outside the exemption even if the price tag is under $1,000.</li>
          <li><strong>Employees.</strong> The exemption is for a single person working alone. Bringing in help on the job removes the exemption.</li>
        </ul>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">What Happens If Someone Breaks This Rule</h2>
        <p>California treats unlicensed contracting above the threshold seriously. It's a misdemeanor, and the state runs an active enforcement program (an undercover sting operation known as SWIFT) specifically targeting unlicensed contractors. Penalties can include significant fines and, for repeat offenses, mandatory jail time. This isn't a rule that exists on paper only — it's actively enforced, including in Ventura County.</p>

        <h3 class="text-xl font-bold text-ink mt-8 mb-4">How Do I Check If a Handyman or Contractor Is Actually Licensed?</h3>
        <p>Use the CSLB's free public tool at CheckTheLicenseFirst.com, or search directly at <a href="https://www.cslb.ca.gov/" target="_blank" rel="noopener noreferrer" class="text-brand font-semibold hover:underline">cslb.ca.gov</a>, to verify any contractor's license status, bond, and complaint history before hiring. For work that's genuinely within the $1,000 handyman exemption, a license isn't required at all — but it's still reasonable to ask directly whether the person understands and is operating within the rule.</p>

        <hr class="my-10 border-slate-200">

        <h2 class="text-2xl font-bold text-ink mt-12 mb-6">A Few Practical Consumer Tips</h2>
        <ul>
          <li>Down payments on a home improvement project should not exceed 10% of the total contract price — a much larger upfront deposit request is a red flag</li>
          <li>Get a clear, written scope and price before work begins, whether it's a licensed contractor or handyman-exemption work</li>
          <li>If a quote is close to $1,000, ask directly how the final total is being calculated — labor, materials, and any other costs all count toward the limit</li>
        </ul>
      </div>
    </article>

    <!-- FAQs Section -->
    <section class="mx-auto max-w-3xl px-4 py-16 bg-slate-50 border-t border-slate-200/60 rounded-t-3xl mb-12">
      <h2 class="text-2xl font-bold text-ink md:text-3xl mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Is the handyman exemption limit really $1,000, or is it still $500? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">It's $1,000, as of January 1, 2025, under Assembly Bill 2622. The $500 figure is outdated and was the limit from 1987 through the end of 2024.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Does the $1,000 limit apply per job, or per year? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Per project. There's no annual limit — the exemption is about the size and scope of each individual job.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">Can a handyman legally do electrical or plumbing work under this rule? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">Yes, within the dollar limit and as long as no permit is required and no employees are involved — minor fixture-level electrical and plumbing work commonly falls within this. Anything requiring a permit (like new circuits or gas line work) falls outside it regardless of cost.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">What's the closest thing California has to an actual "handyman license"? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">There isn't a dedicated handyman license — someone wanting to legally take on larger jobs would pursue a full CSLB contractor's license (such as a Class B or B-2 classification), which involves experience documentation, exams, bonding, and other requirements well beyond the handyman exemption.</p>
        </details>
        <details class="faq-item group">
          <summary class="flex justify-between items-center font-bold text-ink">How does Simi Valley Handyman Co. handle this? <i data-lucide="chevron-down" class="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform"></i></summary>
          <p class="mt-3 text-slate-700">We operate within the current $1,000 exemption — factoring in labor, materials, permits, and scope — and we tell customers directly if a job needs a licensed contractor instead of taking it on anyway. See our <a href="/faq/" class="text-brand font-semibold hover:underline">FAQ page</a> for more on how we handle this.</p>
        </details>
      </div>
    </section>

    <!-- Estimate / CTA Section -->
    <section id="call-to-action" class="bg-slate-50 border-t border-slate-200">
      <div class="mx-auto max-w-3xl px-4 py-16 text-center">
        <div>
          <h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>
          <p class="mt-4 text-lg text-slate-700">Wondering whether your job is handyman-scope or needs a licensed contractor? Call or text (805) 555-0142 and we'll tell you straight.</p>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:8055550142" class="btn-primary"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>
          </div>
        </div>
      </div>
    </section>
`;

html = html.substring(0, mainContentStart) + newMainContent + html.substring(mainContentEnd);

// Replace schema
const schemas = `
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "California Handyman Licensing Laws Explained (2026)",
      "description": "What can a handyman legally do in California without a license? The real $1,000 rule, what it covers, and how to check if someone's actually compliant.",
      "author": {
        "@type": "Organization",
        "name": "Simi Valley Handyman Co."
      },
      "publisher": {
        "@type": "Organization",
        "name": "Simi Valley Handyman Co.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simivalleyhandymanco.com/assets/image/simi-valley-handyman-co-logo.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://simivalleyhandymanco.com/blog/california-handyman-licensing-explained/"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the handyman exemption limit really $1,000, or is it still $500?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's $1,000, as of January 1, 2025, under Assembly Bill 2622. The $500 figure is outdated and was the limit from 1987 through the end of 2024."
          }
        },
        {
          "@type": "Question",
          "name": "Does the $1,000 limit apply per job, or per year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per project. There's no annual limit — the exemption is about the size and scope of each individual job."
          }
        },
        {
          "@type": "Question",
          "name": "Can a handyman legally do electrical or plumbing work under this rule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, within the dollar limit and as long as no permit is required and no employees are involved — minor fixture-level electrical and plumbing work commonly falls within this. Anything requiring a permit (like new circuits or gas line work) falls outside it regardless of cost."
          }
        },
        {
          "@type": "Question",
          "name": "What's the closest thing California has to an actual 'handyman license'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There isn't a dedicated handyman license — someone wanting to legally take on larger jobs would pursue a full CSLB contractor's license (such as a Class B or B-2 classification), which involves experience documentation, exams, bonding, and other requirements well beyond the handyman exemption."
          }
        },
        {
          "@type": "Question",
          "name": "How does Simi Valley Handyman Co. handle this?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate within the current $1,000 exemption — factoring in labor, materials, permits, and scope — and we tell customers directly if a job needs a licensed contractor instead of taking it on anyway."
          }
        }
      ]
    }
  ]
}
</script>
</body>
</html>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*<\/html>/, schemas);

const outDir = path.join(__dirname, 'blog/california-handyman-licensing-explained');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
console.log('Licensing post generated.');
