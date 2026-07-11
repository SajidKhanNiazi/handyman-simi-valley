const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (f === 'node_modules' || f === '.git' || f === '.gemini' || f === 'dist') return;
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.html') || dirPath.endsWith('.xml') || dirPath.endsWith('.js') || dirPath.endsWith('.txt')) {
        callback(dirPath);
      }
    }
  });
}

walkDir(__dirname, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace canonical links, schema URLs, etc.
  content = content.replace(/www\.example\.com/g, 'simivalleyhandymanco.com');
  
  // Replace email addresses or any other bare simivalleyhandymanco.com references
  content = content.replace(/example\.com/g, 'simivalleyhandymanco.com');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', path.relative(__dirname, filePath));
  }
});
