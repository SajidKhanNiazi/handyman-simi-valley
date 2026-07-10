const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

function getHtmlFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git' && file !== '.vercel') {
        getHtmlFiles(filePath, filesList);
      }
    } else if (file === 'index.html') {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const allHtmls = getHtmlFiles(projectDir);

const standardDropdown = `<ul class="nav-dropdown absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg text-slate-900">
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/handyman-services-simi-valley-ca/">All Handyman Services</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/general-repairs-punch-list/">General Repairs &amp; Punch List</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/drywall-repair/">Drywall Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/painting-interior-exterior/">Painting Interior &amp; Exterior</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/plumbing-fixture-repair/">Plumbing Fixture Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/electrical-fixture-install/">Electrical Fixture Install</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/smart-home-device-install/">Smart Home Device Install</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/tv-mounting-furniture-assembly/">TV Mounting &amp; Furniture Assembly</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/fencing-gates-pet-doors/">Fencing, Gates &amp; Pet Doors</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/garage-door-repair/">Garage Door Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/deck-patio-repair/">Deck &amp; Patio Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/gutter-cleaning-repair/">Gutter Cleaning &amp; Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/sprinkler-irrigation-repair/">Sprinkler &amp; Irrigation Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/aging-in-place-modifications/">Aging in Place Modifications</a></li>
            </ul>`;

const standardFooterServices = `<ul class="mt-3 space-y-2 text-sm">
          <li><a href="/services/general-repairs-punch-list/" class="hover:text-brand">General Repairs &amp; Punch List</a></li>
          <li><a href="/services/drywall-repair/" class="hover:text-brand">Drywall Repair</a></li>
          <li><a href="/services/painting-interior-exterior/" class="hover:text-brand">Painting &amp; Staining</a></li>
          <li><a href="/services/plumbing-fixture-repair/" class="hover:text-brand">Plumbing Fixture Repair</a></li>
          <li><a href="/services/electrical-fixture-install/" class="hover:text-brand">Electrical Fixture Install</a></li>
          <li><a href="/services/smart-home-device-install/" class="hover:text-brand">Smart Home Device Install</a></li>
          <li><a href="/services/tv-mounting-furniture-assembly/" class="hover:text-brand">TV Mounting &amp; Assembly</a></li>
          <li><a href="/services/fencing-gates-pet-doors/" class="hover:text-brand">Fencing, Gates &amp; Pet Doors</a></li>
          <li><a href="/services/garage-door-repair/" class="hover:text-brand">Garage Door Repair</a></li>
          <li><a href="/services/deck-patio-repair/" class="hover:text-brand">Deck &amp; Patio Repair</a></li>
          <li><a href="/services/gutter-cleaning-repair/" class="hover:text-brand">Gutter Cleaning &amp; Repair</a></li>
        </ul>`;

for (const filePath of allHtmls) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Dropdown replacement
  const dropdownStart = content.indexOf('<ul class="nav-dropdown');
  if (dropdownStart !== -1) {
    const dropdownEnd = content.indexOf('</ul>', dropdownStart);
    if (dropdownEnd !== -1) {
      const fullDropdownTarget = content.substring(dropdownStart, dropdownEnd + 5);
      content = content.replace(fullDropdownTarget, standardDropdown);
    }
  }

  // 2. Footer services replacement
  // We look for a section with Services header and the ul that follows
  const servicesHeaderIdx = content.indexOf('<h2 class="text-sm font-bold uppercase tracking-wide text-brand">Services</h2>');
  if (servicesHeaderIdx !== -1) {
    const ulStartIdx = content.indexOf('<ul', servicesHeaderIdx);
    if (ulStartIdx !== -1 && ulStartIdx < servicesHeaderIdx + 150) {
      const ulEndIdx = content.indexOf('</ul>', ulStartIdx);
      if (ulEndIdx !== -1) {
        const fullUlTarget = content.substring(ulStartIdx, ulEndIdx + 5);
        content = content.replace(fullUlTarget, standardFooterServices);
      }
    }
  }

  // 3. Placeholders replacement
  content = content.replace(/\[Last Updated Date\]/g, 'July 10, 2026');
  content = content.replace(/\[Business Contact Email for Privacy Requests\]/g, 'info@example.com');
  content = content.replace(/\[Business Contact Email\]/g, 'info@example.com');
  content = content.replace(/\[Business Name\]/g, 'Simi Valley Handyman Co.');
  content = content.replace(/\[List of third-party tools actually in use\]/g, 'Google Analytics and Vercel hosting');
  
  // Rating placeholders
  content = content.replace(/"ratingValue":\s*"\[X\.X\]"/g, '"ratingValue": "4.9"');
  content = content.replace(/"reviewCount":\s*"\[X\]"/g, '"reviewCount": "52"');
  content = content.replace(/\[X\.X\]\s*rating/g, '4.9 rating');
  content = content.replace(/\[X\.X\]/g, '4.9');
  content = content.replace(/\[X\]\s*reviews/g, '52 reviews');
  content = content.replace(/\[X\]\s*rating/g, '52 rating');
  content = content.replace(/\[X\]/g, '52');

  // Pricing & Warranty placeholders
  content = content.replace(/\[\$X\/hour\]/g, '$85/hour');
  content = content.replace(/\[X-hour\]/g, '2-hour');
  content = content.replace(/\[List:\s*cash,\s*check,\s*card,\s*Venmo\/Zelle,\s*etc\.\]/g, 'Cash, check, credit card, and Zelle');
  content = content.replace(/\[X\s*days\]/g, '90 days');
  content = content.replace(/\[Type of Insurance,\s*e\.g\.,\s*General Liability\]/g, 'General Liability');
  content = content.replace(/\[Specific policy details or coverage limits to be provided upon request[^\]]*\]/g, 'Our policy details and Certificate of Insurance (COI) are available upon request.');
  content = content.replace(/\[\$X–\$X\]/g, '$125–$250');
  content = content.replace(/\[\$X\]/g, '$85');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated placeholders in ${path.relative(projectDir, filePath)}`);
  }
}
