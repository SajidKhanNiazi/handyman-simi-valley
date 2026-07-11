const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                processDir(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // 1. Remove the entire <form ...> ... </form> inside the final CTA section
            const formRegex = /<form[\s\S]*?<\/form>/g;
            content = content.replace(formRegex, '');

            // 2. Change buttons that say "Get a Free Estimate" to "Call Now"
            content = content.replace(/Get a Free Estimate(\s*→)?/g, 'Call Now');

            // 3. Update all href="#estimate-form" to href="tel:8055550142"
            content = content.replace(/href="#estimate-form"/g, 'href="tel:8055550142"');

            // 4. In the header, the button has a phone icon for the other link, but this one needs one too?
            // The user said: Match this to the existing button style used for the hero's "Call or Text: (XXX) XXX-XXXX" button
            // Wait, the easiest way is to just let "Call Now" be the text. The prompt: "replace with a 'Call Now' button using a tel: link: <a href="tel:[Phone]" class="[same button styling as before]"><PhoneIcon /> Call Now</a>"
            // So if I just blindly replaced "Get a Free Estimate" with "Call Now", I didn't add the icon. Let's fix that.
            
            // Let's reset and be more precise.
            content = originalContent;
            
            // Remove forms
            content = content.replace(/<form[\s\S]*?<\/form>/g, '');

            // Header CTA
            content = content.replace(/<a href="#estimate-form" class="btn-primary hidden px-4 py-1.5 text-sm sm:inline-flex items-center gap-2">[\s\n]*Get\s+a Free Estimate[\s\n]*<\/a>/, '<a href="tel:8055550142" class="btn-primary hidden px-4 py-1.5 text-sm sm:inline-flex items-center gap-2"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');

            // Mobile menu CTA
            content = content.replace(/<a href="#estimate-form" class="block text-brand font-bold">Get a Free Estimate<\/a>/g, '<a href="tel:8055550142" class="block text-brand font-bold"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');

            // Hero secondary button
            content = content.replace(/<a href="#estimate-form" class="btn-ghost text-base">Get a Free Estimate →<\/a>/g, '<a href="tel:8055550142" class="btn-ghost text-base"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');

            // Final CTA / regular primary buttons
            content = content.replace(/<a href="#estimate-form" class="btn-primary">Get a Free Estimate →<\/a>/g, '<a href="tel:8055550142" class="btn-primary"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');

            // Outline dark button (homepage final CTA secondary button)
            content = content.replace(/<a href="#estimate-form" class="btn-outline-dark">Get a Free Estimate →<\/a>/g, '<a href="tel:8055550142" class="btn-outline-dark"><i data-lucide="phone" class="h-4 w-4"></i> Call Now</a>');

            // Sticky CTA badge
            content = content.replace(/<span class="sticky-cta__badge">Get a Free Estimate<\/span>/g, '<span class="sticky-cta__badge">Call Now</span>');

            // Any leftover href="#estimate-form"
            content = content.replace(/href="#estimate-form"/g, 'href="tel:8055550142"');
            
            // Any leftover "Get a Free Estimate" string that wasn't caught by the exact matches
            content = content.replace(/Get a Free Estimate →/g, 'Call Now');
            content = content.replace(/Get a Free Estimate/g, 'Call Now');

            // Fix the layout of the final CTA section now that the form is gone.
            // Replace `<div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">` with `<div class="mx-auto max-w-3xl px-4 py-16 text-center">`
            content = content.replace(/<div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">/g, '<div class="mx-auto max-w-3xl px-4 py-16 text-center">');
            
            // Center the buttons in the final CTA
            content = content.replace(/<div class="mt-6 flex flex-wrap gap-4">/g, '<div class="mt-6 flex flex-wrap items-center justify-center gap-4">');

            // Update paragraph text
            content = content.replace(/— or send us a few details below and we'll\s*get back to you same day\./g, '— tell us what\'s going on and we\'ll give you a straight answer and a real price.');
            content = content.replace(/Send us a few details and we'll give you a straight estimate before you commit to anything\./g, 'Call or text us with what\'s going on — we\'ll give you a straight answer and a real price.');
            content = content.replace(/send us a few details and we'll give you a straight estimate before you commit to anything\./g, 'call or text us with what\'s going on — we\'ll give you a straight answer and a real price.');

            // Update the FAQ in HTML
            content = content.replace(/, or fill out the estimate form below\./g, '.');
            
            // Update the FAQ in JSON-LD
            content = content.replace(/, or fill out the estimate form below\./g, '.');

            // Write back if changed
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDir(__dirname);
console.log("Done.");
