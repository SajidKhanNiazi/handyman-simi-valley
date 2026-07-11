const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToSearch = __dirname;
let updatedFilesCount = 0;

walkDir(dirToSearch, function(filePath) {
    if (filePath.endsWith('.html')) {
        if (filePath.includes('node_modules') || filePath.includes('.git') || filePath.includes('fix_pagespeed.js')) {
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // 1. Add defer to lucide script if not present
        if (content.includes('<script src="https://unpkg.com/lucide@latest"></script>')) {
            content = content.replace(
                '<script src="https://unpkg.com/lucide@latest"></script>',
                '<script defer src="https://unpkg.com/lucide@latest"></script>'
            );
        }

        // 2. Wrap lucide.createIcons() in DOMContentLoaded if it's not already wrapped
        if (content.includes('lucide.createIcons();') && !content.includes('DOMContentLoaded')) {
            content = content.replace(
                /<script>\s*lucide\.createIcons\(\);\s*<\/script>/g,
                `<script>\n    document.addEventListener("DOMContentLoaded", function() {\n      lucide.createIcons();\n    });\n  </script>`
            );
        }

        // 3. Add fetchpriority="high" to the hero image
        // Match <img src="..." class="hero-leander__bg" ...>
        let heroImgRegex = /(<img[^>]*class="hero-leander__bg"[^>]*)loading="eager"/;
        if (heroImgRegex.test(content) && !content.includes('fetchpriority="high"')) {
            content = content.replace(
                heroImgRegex,
                '$1fetchpriority="high" loading="eager"'
            );
            
            // 4. Also add a preload link for the hero image in the <head>
            // Get the src of the hero image
            let srcMatch = content.match(/<img[^>]*class="hero-leander__bg"[^>]*src="([^"]+)"/);
            if (srcMatch && srcMatch[1]) {
                let preloadLink = `<link rel="preload" as="image" href="${srcMatch[1]}">\n  <link rel="stylesheet"`;
                if (!content.includes(`<link rel="preload" as="image" href="${srcMatch[1]}">`)) {
                    content = content.replace('<link rel="stylesheet"', preloadLink);
                }
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
            updatedFilesCount++;
        }
    }
});

console.log(`Done! Updated ${updatedFilesCount} files.`);
