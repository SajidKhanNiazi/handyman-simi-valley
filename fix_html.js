const fs = require('fs');
const path = require('path');
const dir = 'C:\\laragon\\www\\Handyman simi valley';

function fixHtml(d) {
    const files = fs.readdirSync(d);
    for (const f of files) {
        const full = path.join(d, f);
        const stat = fs.statSync(full);
        
        if (stat.isDirectory() && f !== 'node_modules' && f !== '.git' && f !== 'dist') {
            fixHtml(full);
        } else if (full.endsWith('.html')) {
            let content = fs.readFileSync(full, 'utf8');
            let originalContent = content;
            
            // 1. Fix paintbucket typo
            content = content.replace(/data-lucide="paintbucket"/g, 'data-lucide="paint-bucket"');
            
            // 2. Fix script main.js type="module"
            // Find both <script src="./assets/js/main.js" defer></script> and <script src="/assets/js/main.js" defer></script>
            content = content.replace(/<script\s+src="[\.\/]*assets\/js\/main\.js"[^>]*><\/script>/g, '<script type="module" src="/assets/js/main.js"></script>');
            
            // 3. Remove Tailwind CDN scripts
            content = content.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/g, '');
            
            // 4. Remove inline tailwind.config block
            const tailwindConfigRegex = /<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*;\s*<\/script>\s*/;
            content = content.replace(tailwindConfigRegex, '');
            
            if (content !== originalContent) {
                fs.writeFileSync(full, content);
                console.log('Fixed ' + full);
            }
        }
    }
}

fixHtml(dir);
