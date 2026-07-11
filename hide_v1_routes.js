const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (f === 'node_modules' || f === '.git' || f === '.gemini') return;
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.html')) {
        callback(dirPath);
      }
    }
  });
}

const desktopNavSearch = `<div class="group relative">
            <button type="button" class="inline-flex items-center gap-1 font-medium text-white hover:text-brand transition-colors">Locations <span aria-hidden="true" class="text-xs">▾</span></button>
            <ul class="nav-dropdown absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg text-slate-900">
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/">Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/wood-ranch/">Wood Ranch</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/central-simi-valley/">Central Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/east-simi-valley/">East Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/big-sky/">Big Sky</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/santa-susana/">Santa Susana</a></li>
            </ul>
          </div>`;
const desktopNavReplace = `<a href="/#neighborhoods" class="font-medium text-white hover:text-brand transition-colors">Locations</a>`;

const mobileNavSearch = `<li><a href="/locations/simi-valley/" class="block hover:text-brand">Locations</a></li>`;
const mobileNavReplace = `<li><a href="/#neighborhoods" class="block hover:text-brand">Locations</a></li>`;

const footerSearch = `<div>
        <h2 class="text-sm font-bold uppercase tracking-wide text-brand">Areas We Serve</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/locations/simi-valley/" class="hover:text-brand">Simi Valley</a></li>
          <li><a href="/locations/simi-valley/wood-ranch/" class="hover:text-brand">Wood Ranch</a></li>
          <li><a href="/locations/simi-valley/central-simi-valley/" class="hover:text-brand">Central Simi Valley</a></li>
          <li><a href="/locations/simi-valley/east-simi-valley/" class="hover:text-brand">East Simi Valley</a></li>
          <li><a href="/locations/simi-valley/big-sky/" class="hover:text-brand">Big Sky</a></li>
          <li><a href="/locations/simi-valley/santa-susana/" class="hover:text-brand">Santa Susana</a></li>
        </ul>
      </div>`;
const footerReplace = `<div>
        <h2 class="text-sm font-bold uppercase tracking-wide text-brand">Areas We Serve</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/#neighborhoods" class="hover:text-brand">Simi Valley</a></li>
          <li><a href="/#neighborhoods" class="hover:text-brand">Wood Ranch</a></li>
          <li><a href="/#neighborhoods" class="hover:text-brand">Central Simi Valley</a></li>
          <li><a href="/#neighborhoods" class="hover:text-brand">East Simi Valley</a></li>
          <li><a href="/#neighborhoods" class="hover:text-brand">Big Sky</a></li>
          <li><a href="/#neighborhoods" class="hover:text-brand">Santa Susana</a></li>
        </ul>
      </div>`;

walkDir(__dirname, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes(desktopNavSearch)) {
    content = content.replace(desktopNavSearch, desktopNavReplace);
    changed = true;
  }
  if (content.includes(mobileNavSearch)) {
    content = content.replace(mobileNavSearch, mobileNavReplace);
    changed = true;
  }
  if (content.includes(footerSearch)) {
    content = content.replace(footerSearch, footerReplace);
    changed = true;
  }

  // Also add noindex nofollow to hidden routes
  const hiddenRoutes = [
    'locations/simi-valley/index.html',
    'locations/simi-valley/wood-ranch/index.html',
    'locations/simi-valley/central-simi-valley/index.html',
    'locations/simi-valley/east-simi-valley/index.html',
    'locations/simi-valley/big-sky/index.html',
    'locations/simi-valley/santa-susana/index.html',
    'reviews/index.html',
    'gallery/index.html'
  ];

  const relPath = path.relative(__dirname, filePath).replace(/\\/g, '/');
  if (hiddenRoutes.includes(relPath)) {
    if (!content.includes('<meta name="robots" content="noindex, nofollow">')) {
      content = content.replace('<head>', '<head>\n  <meta name="robots" content="noindex, nofollow">');
      changed = true;
      console.log('Added noindex to', relPath);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Finished updating HTML files.');

// Update Sitemap
const sitemapPath = path.join(__dirname, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urlsToRemove = [
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/wood-ranch/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/central-simi-valley/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/east-simi-valley/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/big-sky/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/locations/simi-valley/santa-susana/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/reviews/</loc></url>',
    '<url><loc>https://simivalleyhandymanco.com/gallery/</loc></url>'
  ];
  
  urlsToRemove.forEach(url => {
    sitemap = sitemap.replace(new RegExp(`\\s*${url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`), '');
  });
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('Finished updating sitemap.xml.');
}
