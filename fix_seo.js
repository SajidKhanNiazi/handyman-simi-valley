const fs = require('fs');
const path = require('path');

const imageMappings = [
  {
    old: 'handyman simi valley logo.webp',
    new: 'simi-valley-handyman-co-logo.webp',
    alt: 'Simi Valley Handyman Co. logo'
  },
  {
    old: 'handyman simi valley Ca Hero.webp',
    new: 'handyman-technician-hero.webp',
    alt: 'Handyman technician working on a home repair in Simi Valley, CA'
  },
  {
    old: 'handyman in simi valley (1).webp',
    new: 'ceiling-fan-smart-switch-install-wood-ranch.webp',
    alt: 'Ceiling fan and smart switch installed in a Wood Ranch home'
  },
  {
    old: 'handyman in simi valley Ca.webp',
    new: 'drywall-patch-repaint-central-simi-valley.webp',
    alt: 'Drywall patch and repaint after a pipe leak in a Central Simi Valley home'
  },
  {
    old: 'Handyman simi valley (1).webp',
    new: 'dog-door-install-slider-east-simi-valley.webp',
    alt: 'Dog door installed in a slider door in an East Simi Valley home'
  },
  {
    old: 'handyman simi valley ca.webp',
    new: 'gate-latch-fence-repair-big-sky.webp',
    alt: 'Gate latch and fence repair completed before Santa Ana winds in Big Sky'
  }
];

// Rename images
const imgDir = path.join(__dirname, 'assets', 'image');
for (const map of imageMappings) {
  const oldPath = path.join(imgDir, map.old);
  const newPath = path.join(imgDir, map.new);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
}

// Process HTML files and sitemap
function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.xml')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // 1. Update image src
            for (const map of imageMappings) {
                let oldEncoded = map.old.replace(/ /g, '%20');
                content = content.replace(new RegExp(`src="(/|\\./)assets/image/${oldEncoded}"`, 'g'), `src="/assets/image/${map.new}"`);
                content = content.replace(new RegExp(`src="(/|\\./)assets/image/${map.old}"`, 'g'), `src="/assets/image/${map.new}"`);
                
                content = content.replace(new RegExp(`href="(/|\\./)assets/image/${oldEncoded}"`, 'g'), `href="/assets/image/${map.new}"`);
                content = content.replace(new RegExp(`href="(/|\\./)assets/image/${map.old}"`, 'g'), `href="/assets/image/${map.new}"`);

                content = content.replace(new RegExp(`"url":\\s*"https://(www\\.)?simivalleyhandymanco\\.com/assets/image/${oldEncoded}"`, 'g'), `"url": "https://simivalleyhandymanco.com/assets/image/${map.new}"`);
                content = content.replace(new RegExp(`"url":\\s*"https://(www\\.)?simivalleyhandymanco\\.com/assets/image/${map.old}"`, 'g'), `"url": "https://simivalleyhandymanco.com/assets/image/${map.new}"`);
            }
            
            // 1b. Fix alt and title tags
            for (const map of imageMappings) {
                 const imgTagRegex = new RegExp(`<img([^>]+)src="/assets/image/${map.new}"([^>]*)>`, 'g');
                 content = content.replace(imgTagRegex, (match, p1, p2) => {
                     let newTags = (p1 + ' ' + p2).replace(/\s*alt="[^"]*"/g, '').replace(/\s*title="[^"]*"/g, '');
                     newTags = newTags.replace(/\s+/g, ' ');
                     return `<img src="/assets/image/${map.new}" alt="${map.alt}" title="${map.alt}"${newTags}>`;
                 });
            }

            // 2. Canonical Tags and Sitemap (www enforcement)
            if (fullPath.endsWith('.html')) {
                content = content.replace(/<link rel="canonical" href="https:\/\/(www\.)?simivalleyhandymanco\.com([^"]*)">/g, (match, www, pathPart) => {
                    if (!pathPart.endsWith('/') && !pathPart.endsWith('.html') && pathPart !== '') {
                        pathPart += '/';
                    } else if (pathPart === '') {
                        pathPart = '/';
                    }
                    return `<link rel="canonical" href="https://simivalleyhandymanco.com${pathPart}">`;
                });
                content = content.replace(/href="https:\/\/simivalleyhandymanco\.com/g, 'href="https://simivalleyhandymanco.com');
            } else if (fullPath.endsWith('.xml')) {
                content = content.replace(/https:\/\/simivalleyhandymanco\.com/g, 'https://simivalleyhandymanco.com');
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDir(__dirname);
console.log("SEO fix done.");
