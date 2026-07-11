const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'services/gutter-cleaning-repair/index.html');
const destPath = path.join(__dirname, 'blog/index.html');

const sourceHTML = fs.readFileSync(sourcePath, 'utf8');

// Extract header and footer
const headerEndIdx = sourceHTML.indexOf('<main id="main-content">') + '<main id="main-content">'.length;
const footerStartIdx = sourceHTML.indexOf('<footer class="bg-ink pb-24 text-slate-300 md:pb-8">');

const header = sourceHTML.substring(0, headerEndIdx);
const footer = sourceHTML.substring(footerStartIdx);

// Modify header meta tags and title
let newHeader = header
  .replace(/<title>.*?<\/title>/, '<title>Simi Valley Handyman Blog | Home Maintenance Tips</title>')
  .replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Practical home maintenance tips, seasonal checklists, and advice specifically for Simi Valley, CA homeowners.">')
  .replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://www.simivalleyhandymanco.com/blog/">');

const blogContent = `
    <section class="bg-slate-50 border-b border-slate-200/60 py-16">
      <div class="mx-auto max-w-5xl px-4 text-center">
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl text-ink">Simi Valley Home Maintenance Blog</h1>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-700">Practical advice, seasonal checklists, and home repair guides specifically tailored for Simi Valley's climate and housing.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 bg-white">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- Pillar Post -->
        <article class="card-leander bg-white flex flex-col group hover:border-brand overflow-hidden p-0">
          <a href="/blog/simi-valley-seasonal-home-maintenance-checklist/" class="block aspect-video overflow-hidden">
            <img src="/assets/image/seasonal-home-maintenance-hero.png" alt="Simi Valley Seasonal Home Maintenance" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
          </a>
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold uppercase tracking-wider text-brand mb-2">Pillar Guide</span>
            <h2 class="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors"><a href="/blog/simi-valley-seasonal-home-maintenance-checklist/">Simi Valley Seasonal Home Maintenance Checklist</a></h2>
            <p class="text-sm text-slate-600 mb-6 flex-grow">A season-by-season home maintenance checklist built for Simi Valley's actual climate — wet season, dry season, wind season, and year-round basics.</p>
            <a href="/blog/simi-valley-seasonal-home-maintenance-checklist/" class="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-brand transition-colors mt-auto">Read guide <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- Wildfire Hardening -->
        <article class="card-leander bg-white flex flex-col group hover:border-brand overflow-hidden p-0">
          <a href="/blog/wildfire-home-hardening-simi-valley/" class="block aspect-video overflow-hidden">
            <img src="/assets/image/wildfire-home-hardening-hero.png" alt="Wildfire Home Hardening" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
          </a>
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Safety</span>
            <h2 class="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors"><a href="/blog/wildfire-home-hardening-simi-valley/">Wildfire Home Hardening in Simi Valley, CA</a></h2>
            <p class="text-sm text-slate-600 mb-6 flex-grow">Practical wildfire prep for Simi Valley homeowners — gutters, vents, decks, and defensible space, before Santa Ana wind season hits. Free checklist.</p>
            <a href="/blog/wildfire-home-hardening-simi-valley/" class="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-brand transition-colors mt-auto">Read guide <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- Placeholder 1 -->
        <article class="card-leander bg-slate-50 flex flex-col group hover:border-brand overflow-hidden p-0 border-dashed">
          <div class="p-6 flex flex-col flex-grow justify-center items-center text-center opacity-70">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-500"><i data-lucide="wind" class="h-6 w-6"></i></div>
            <h2 class="text-lg font-bold text-ink mb-3">Santa Ana Wind Home Prep</h2>
            <p class="text-sm text-slate-600">Coming soon.</p>
          </div>
        </article>

        <!-- Placeholder 2 -->
        <article class="card-leander bg-slate-50 flex flex-col group hover:border-brand overflow-hidden p-0 border-dashed">
          <div class="p-6 flex flex-col flex-grow justify-center items-center text-center opacity-70">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-500"><i data-lucide="activity" class="h-6 w-6"></i></div>
            <h2 class="text-lg font-bold text-ink mb-3">Earthquake Proofing Your Home</h2>
            <p class="text-sm text-slate-600">Coming soon.</p>
          </div>
        </article>

        <!-- Placeholder 3 -->
        <article class="card-leander bg-slate-50 flex flex-col group hover:border-brand overflow-hidden p-0 border-dashed">
          <div class="p-6 flex flex-col flex-grow justify-center items-center text-center opacity-70">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-500"><i data-lucide="shield-alert" class="h-6 w-6"></i></div>
            <h2 class="text-lg font-bold text-ink mb-3">Avoiding Unlicensed Contractor Scams</h2>
            <p class="text-sm text-slate-600">Coming soon.</p>
          </div>
        </article>

        <!-- Placeholder 4 -->
        <article class="card-leander bg-slate-50 flex flex-col group hover:border-brand overflow-hidden p-0 border-dashed">
          <div class="p-6 flex flex-col flex-grow justify-center items-center text-center opacity-70">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-500"><i data-lucide="file-check-2" class="h-6 w-6"></i></div>
            <h2 class="text-lg font-bold text-ink mb-3">California Handyman Licensing Explained</h2>
            <p class="text-sm text-slate-600">Coming soon.</p>
          </div>
        </article>

      </div>
    </section>
`;

let finalHTML = newHeader + '\n' + blogContent + '\n' + footer;

// Remove the specific gutter FAQ schema and replace with generic WebPage schema
finalHTML = finalHTML.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

finalHTML = finalHTML.replace('</body>', `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Simi Valley Handyman Blog",
  "url": "https://www.simivalleyhandymanco.com/blog/",
  "description": "Practical advice, seasonal checklists, and home repair guides specifically tailored for Simi Valley's climate and housing.",
  "publisher": {
    "@type": "Organization",
    "name": "Simi Valley Handyman Co."
  }
}
</script>
</body>`);


fs.writeFileSync(destPath, finalHTML, 'utf8');
console.log('Blog index generated successfully at', destPath);
