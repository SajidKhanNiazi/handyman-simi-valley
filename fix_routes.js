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

walkDir(__dirname, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Desktop Nav Dropdown
  const desktopNavRegex = /<div class="group relative">\s*<button type="button"[^>]*>\s*Locations[\s\S]*?<\/ul>\s*<\/div>/g;
  content = content.replace(desktopNavRegex, `<a href="/#neighborhoods" class="font-medium text-white hover:text-brand transition-colors">Locations</a>`);

  // 2. Mobile Nav Link
  const mobileNavRegex = /<li><a href="\/locations\/simi-valley\/" class="block hover:text-brand">Locations<\/a><\/li>/g;
  content = content.replace(mobileNavRegex, `<li><a href="/#neighborhoods" class="block hover:text-brand">Locations</a></li>`);

  // 3. Footer Areas We Serve (replaces all hrefs inside)
  const footerRegex = /(<h2[^>]*>Areas We Serve<\/h2>\s*<ul[^>]*>)([\s\S]*?)<\/ul>/g;
  content = content.replace(footerRegex, (match, p1, p2) => {
    const newP2 = p2.replace(/href="\/locations\/simi-valley\/[^"]*"/g, 'href="/#neighborhoods"');
    return p1 + newP2 + '</ul>';
  });
  
  // 4. Just to be safe, globally replace any remaining location links
  content = content.replace(/href="\/locations\/simi-valley\/[^"]*"/g, 'href="/#neighborhoods"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', path.relative(__dirname, filePath));
  }
});
