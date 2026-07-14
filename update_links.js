const fs = require('fs');

let indexHtml = fs.readFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\index.html', 'utf8');
indexHtml = indexHtml.replace('<h3 class="text-lg font-semibold">Earthquake country</h3>', '<h3 class="text-lg font-semibold"><a href="/blog/earthquake-proofing-your-simi-valley-home/" class="hover:text-brand hover:underline">Earthquake country</a></h3>');
fs.writeFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\index.html', indexHtml);

let blogHtml = fs.readFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\blog\\\\index.html', 'utf8');
const searchStr = `        <!-- Placeholder 2 -->
        <article class="card-leander bg-slate-50 flex flex-col group hover:border-brand overflow-hidden p-0 border-dashed">
          <div class="p-6 flex flex-col flex-grow justify-center items-center text-center opacity-70">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-500"><i data-lucide="activity" class="h-6 w-6"></i></div>
            <h2 class="text-lg font-bold text-ink mb-3">Earthquake Proofing Your Home</h2>
            <p class="text-sm text-slate-600">Coming soon.</p>
          </div>
        </article>`;
const replaceStr = `        <!-- Earthquake Proofing -->
        <article class="card-leander bg-white flex flex-col group hover:border-brand overflow-hidden p-0">
          <a href="/blog/earthquake-proofing-your-simi-valley-home/" class="block aspect-video overflow-hidden">
            <img src="/assets/image/earthquake-proofing-hero.png" alt="Earthquake-Proofing Your Simi Valley Home" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
          </a>
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Safety</span>
            <h2 class="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors"><a href="/blog/earthquake-proofing-your-simi-valley-home/">Earthquake-Proofing Your Simi Valley Home</a></h2>
            <p class="text-sm text-slate-600 mb-6 flex-grow">Practical earthquake prep for Simi Valley homeowners — water heater strapping law, securing furniture, and the free app that gives you seconds of warning.</p>
            <a href="/blog/earthquake-proofing-your-simi-valley-home/" class="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-brand transition-colors mt-auto">Read guide <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>`;
blogHtml = blogHtml.replace(searchStr, replaceStr);
fs.writeFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\blog\\\\index.html', blogHtml);

let sitemap = fs.readFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\public\\\\sitemap.xml', 'utf8');
if(!sitemap.includes('earthquake-proofing-your-simi-valley-home')) {
  sitemap = sitemap.replace('<url><loc>https://simivalleyhandymanco.com/blog/</loc></url>', 
    '<url><loc>https://simivalleyhandymanco.com/blog/</loc></url>\\n  <url><loc>https://simivalleyhandymanco.com/blog/earthquake-proofing-your-simi-valley-home/</loc></url>'
  );
  fs.writeFileSync('c:\\\\laragon\\\\www\\\\Handyman simi valley\\\\public\\\\sitemap.xml', sitemap);
}
