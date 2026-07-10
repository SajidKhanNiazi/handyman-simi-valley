const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

// 1. Update services/drywall-repair/index.html
const drywallPath = path.join(projectDir, 'services', 'drywall-repair', 'index.html');
if (fs.existsSync(drywallPath)) {
  let content = fs.readFileSync(drywallPath, 'utf8');
  
  // Replace the plumber question answer
  const targetText = `Yes — if the damage is from an active or recent leak, get the plumbing issue fixed or confirmed resolved before the drywall repair, otherwise you risk repairing the same spot twice. If you're not sure whether the leak is fully resolved, tell us when you call and we can help you figure out next steps before we patch anything.`;
  const replacementText = `Yes — if the damage is from an active or recent plumbing leak, get it resolved first. If the water stain is near a ceiling or outer wall, it is often caused by clogged or leaking gutters rather than plumbing — see our <a href="/services/gutter-cleaning-repair/" class="text-brand hover:underline">gutter cleaning and repair service</a> to stop the water source before patching.`;
  
  if (content.includes(targetText)) {
    content = content.replace(targetText, replacementText);
    fs.writeFileSync(drywallPath, content, 'utf8');
    console.log('Updated services/drywall-repair/index.html');
  }
}

// 2. Update services/general-repairs-punch-list/index.html
const generalPath = path.join(projectDir, 'services', 'general-repairs-punch-list', 'index.html');
if (fs.existsSync(generalPath)) {
  let content = fs.readFileSync(generalPath, 'utf8');
  
  // Find related services grid and replace it
  const gridStart = `<div class="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">`;
  const gridEnd = `</a>\n      </div>`;
  
  const startIdx = content.indexOf(gridStart);
  if (startIdx !== -1) {
    const endIdx = content.indexOf(gridEnd, startIdx);
    if (endIdx !== -1) {
      const fullGridTarget = content.substring(startIdx, endIdx + gridEnd.length);
      
      const newGrid = `<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <!-- Drywall Repair -->
        <a href="/services/drywall-repair/" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="hammer" class="h-4 w-4"></i></div>
            <div>
              <h4 class="font-bold text-ink text-xs group-hover:text-brand transition-colors">Drywall Repair</h4>
              <p class="text-slate-500 text-[10px] mt-0.5">For damage beyond a small ding.</p>
            </div>
          </div>
          <i data-lucide="arrow-right" class="h-3 w-3 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
        </a>

        <!-- Painting Interior -->
        <a href="/services/painting-interior-exterior/" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="paint-bucket" class="h-4 w-4"></i></div>
            <div>
              <h4 class="font-bold text-ink text-xs group-hover:text-brand transition-colors">Painting Interior</h4>
              <p class="text-slate-500 text-[10px] mt-0.5">If the visit uncovers worth freshening up.</p>
            </div>
          </div>
          <i data-lucide="arrow-right" class="h-3 w-3 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
        </a>

        <!-- Electrical Fixture -->
        <a href="/services/electrical-fixture-install/" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="zap" class="h-4 w-4"></i></div>
            <div>
              <h4 class="font-bold text-ink text-xs group-hover:text-brand transition-colors">Electrical Fixture</h4>
              <p class="text-slate-500 text-[10px] mt-0.5">For switches, outlets, and fans.</p>
            </div>
          </div>
          <i data-lucide="arrow-right" class="h-3 w-3 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
        </a>

        <!-- Garage Door Repair -->
        <a href="/services/garage-door-repair/" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="warehouse" class="h-4 w-4"></i></div>
            <div>
              <h4 class="font-bold text-ink text-xs group-hover:text-brand transition-colors">Garage Door Repair</h4>
              <p class="text-slate-500 text-[10px] mt-0.5">For spring, opener, and track issues.</p>
            </div>
          </div>
          <i data-lucide="arrow-right" class="h-3 w-3 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
        </a>

        <!-- TV Mounting & Furniture Assembly -->
        <a href="/services/tv-mounting-furniture-assembly/" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="tv" class="h-4 w-4"></i></div>
            <div>
              <h4 class="font-bold text-ink text-xs group-hover:text-brand transition-colors">TV Mounting &amp; Assembly</h4>
              <p class="text-slate-500 text-[10px] mt-0.5">Secure TV mounts and flat-box builds.</p>
            </div>
          </div>
          <i data-lucide="arrow-right" class="h-3 w-3 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
        </a>
      </div>`;
      
      content = content.replace(fullGridTarget, newGrid);
      fs.writeFileSync(generalPath, content, 'utf8');
      console.log('Updated services/general-repairs-punch-list/index.html');
    }
  }
}

// 3. Update pricing/handyman-cost-simi-valley/index.html
const pricingPath = path.join(projectDir, 'pricing', 'handyman-cost-simi-valley', 'index.html');
if (fs.existsSync(pricingPath)) {
  let content = fs.readFileSync(pricingPath, 'utf8');
  
  // Replace pricing table rows with links
  const targetTbody = `<tbody class="bg-white divide-y divide-slate-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Small fixture swap (faucet, light fixture, switch)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Usually flat-rate</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Ceiling fan install</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Higher if converting an old light box to support fan weight</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Drywall patch (small)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Texture-matching included</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Drywall repair (larger/water damage)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Multi-visit due to drying time between coats</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">TV mounting</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Into studs, standard wall</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Furniture assembly</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per item or hourly</td>
                  <td class="px-6 py-4 text-sm text-slate-500">Varies by complexity</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Interior room painting</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per room</td>
                  <td class="px-6 py-4 text-sm text-slate-500">Depends on room size and prep needed</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Exterior fence/gate painting</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per linear foot</td>
                  <td class="px-6 py-4 text-sm text-slate-500">See our <a href="/services/painting-interior-exterior/" class="text-brand hover:underline">painting page</a></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Garbage disposal replacement</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Plus cost of the unit if we're supplying it</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Toilet rebuild/repair</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Flapper/fill valve replacement is usually the low end</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">General punch-list visit</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X/hour]</code>, <code>[X-hour]</code> minimum</td>
                  <td class="px-6 py-4 text-sm text-slate-500">See our <a href="/services/general-repairs-punch-list/" class="text-brand hover:underline">punch-list page</a></td>
                </tr>
              </tbody>`;

  const newTbody = `<tbody class="bg-white divide-y divide-slate-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Small fixture swap (<a href="/services/plumbing-fixture-repair/" class="text-brand hover:underline">faucet</a>, <a href="/services/electrical-fixture-install/" class="text-brand hover:underline">light fixture</a>, <a href="/services/electrical-fixture-install/" class="text-brand hover:underline">switch</a>)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Usually flat-rate</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/electrical-fixture-install/" class="text-brand hover:underline">Ceiling fan install</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Higher if converting an old light box to support fan weight</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/drywall-repair/" class="text-brand hover:underline">Drywall patch (small)</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Texture-matching included</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/drywall-repair/" class="text-brand hover:underline">Drywall repair (larger/water damage)</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Multi-visit due to drying time between coats</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/tv-mounting-furniture-assembly/" class="text-brand hover:underline">TV mounting</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Into studs, standard wall</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/tv-mounting-furniture-assembly/" class="text-brand hover:underline">Furniture assembly</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per item or hourly</td>
                  <td class="px-6 py-4 text-sm text-slate-500">Varies by complexity</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/painting-interior-exterior/" class="text-brand hover:underline">Interior room painting</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per room</td>
                  <td class="px-6 py-4 text-sm text-slate-500">Depends on room size and prep needed</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/painting-interior-exterior/" class="text-brand hover:underline">Exterior fence/gate painting</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code> per linear foot</td>
                  <td class="px-6 py-4 text-sm text-slate-500">See our <a href="/services/painting-interior-exterior/" class="text-brand hover:underline">painting page</a></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/plumbing-fixture-repair/" class="text-brand hover:underline">Garbage disposal replacement</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Plus cost of the unit if we're supplying it</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/plumbing-fixture-repair/" class="text-brand hover:underline">Toilet rebuild/repair</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X–$X]</code></td>
                  <td class="px-6 py-4 text-sm text-slate-500">Flapper/fill valve replacement is usually the low end</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"><a href="/services/general-repairs-punch-list/" class="text-brand hover:underline">General punch-list visit</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500"><code>[$X/hour]</code>, <code>[X-hour]</code> minimum</td>
                  <td class="px-6 py-4 text-sm text-slate-500">See our <a href="/services/general-repairs-punch-list/" class="text-brand hover:underline">punch-list page</a></td>
                </tr>
              </tbody>`;

  if (content.includes(targetTbody)) {
    content = content.replace(targetTbody, newTbody);
    fs.writeFileSync(pricingPath, content, 'utf8');
    console.log('Updated pricing/handyman-cost-simi-valley/index.html');
  }
}

// 4. Update index.html (the homepage) to list 12 service cards individually
const homePath = path.join(projectDir, 'index.html');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  
  const targetGridStart = `<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">`;
  const startIdx = content.indexOf(targetGridStart);
  if (startIdx !== -1) {
    // Find the closing </div> for this grid. Since the grid contains articles, we can scan forward
    // for the closing tag that aligns with the grid.
    // Let's count open/close divs or look for the unique trailing paragraph:
    // <p class="mt-6"><a href="/handyman-services-simi-valley-ca/"
    const targetEndStr = `<p class="mt-6"><a href="/handyman-services-simi-valley-ca/"`;
    const endIdx = content.indexOf(targetEndStr, startIdx);
    if (endIdx !== -1) {
      // Find the last </div> before this end index
      const lastDivIdx = content.lastIndexOf('</div>', endIdx);
      if (lastDivIdx !== -1 && lastDivIdx > startIdx) {
        const fullGridTarget = content.substring(startIdx, lastDivIdx + 6);
        
        const newGrid = `<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <!-- 1. General Repairs -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="clipboard-list" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">General Repairs &amp; Punch List</h3>
            <p class="mt-2 text-slate-700">Cabinet hardware adjustment, doors that stick or don't latch, drywall dings, shelving, and general punch lists.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/general-repairs-punch-list/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 2. Drywall Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="hammer" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Drywall Repair</h3>
            <p class="mt-2 text-slate-700">Nail pops, water-stain patches, impact holes, settling cracks, and custom texture-matching (orange peel &amp; knockdown).</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/drywall-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 3. Painting Interior & Exterior -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="paint-bucket" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Painting Interior &amp; Exterior</h3>
            <p class="mt-2 text-slate-700">Room painting, baseboards, door trim, deck/fence staining, and exterior surfaces built for California weather.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/painting-interior-exterior/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 4. Plumbing Fixture Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="droplet" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Plumbing Fixture Repair</h3>
            <p class="mt-2 text-slate-700">Faucet drips, running toilet rebuilds, garbage disposal swaps, P-trap drainage fixes, and clean fixture installs.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/plumbing-fixture-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 5. Electrical Fixture Install -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="zap" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Electrical Fixture Install</h3>
            <p class="mt-2 text-slate-700">Swapping light fixtures, ceiling fan installs, converting old light boxes to support fan weight, GFCI, switches.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/electrical-fixture-install/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 6. Smart Home Device Install -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="smartphone" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Smart Home Device Install</h3>
            <p class="mt-2 text-slate-700">Installing smart locks, video doorbells, smart ceiling fans, Wi-Fi switches, and initial app setup.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/smart-home-device-install/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 7. TV Mounting & Furniture Assembly -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="tv" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">TV Mounting &amp; Furniture Assembly</h3>
            <p class="mt-2 text-slate-700">Secure wall mounts into studs, cord concealment, Wayfair builds, IKEA furniture, and gazebo assembly.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/tv-mounting-furniture-assembly/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 8. Fencing, Gates & Pet Doors -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="fence" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Fencing, Gates &amp; Pet Doors</h3>
            <p class="mt-2 text-slate-700">Dog door installs in slider doors, cat-proof fencing extensions, sagging gates, latch adjustment, fence panels.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/fencing-gates-pet-doors/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 9. Garage Door Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="warehouse" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Garage Door Repair</h3>
            <p class="mt-2 text-slate-700">Opener troubleshooting, track and roller adjustments, weatherstripping swaps, and keypad programming.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/garage-door-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 10. Deck & Patio Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="tree-deciduous" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Deck &amp; Patio Repair</h3>
            <p class="mt-2 text-slate-700">Board replacement, wobbly railing stabilization, popped screws, and prep ahead of staining.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/deck-patio-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 11. Gutter Cleaning & Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="cloud-rain" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Gutter Cleaning &amp; Repair</h3>
            <p class="mt-2 text-slate-700">Clearing leaves and debris, downspout flushing, sealing leaks, re-securing sagging gutters, Santa Ana prep.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/gutter-cleaning-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>

        <!-- 12. Sprinkler & Irrigation Repair -->
        <article class="card-leander flex">
          <div class="flex flex-col">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="wrench" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-semibold">Sprinkler &amp; Irrigation Repair</h3>
            <p class="mt-2 text-slate-700">Broken sprinkler head swaps, nozzle adjustments, line leaks, controller setup, and drip system fixes.</p>
            <a class="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-ink transition-colors hover:text-brand" href="/services/sprinkler-irrigation-repair/">View details <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>
      </div>`;
        
        content = content.replace(fullGridTarget, newGrid);
        fs.writeFileSync(homePath, content, 'utf8');
        console.log('Updated index.html successfully!');
      }
    }
  }
}
