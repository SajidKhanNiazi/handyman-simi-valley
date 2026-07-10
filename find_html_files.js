const fs = require('fs');
const path = require('path');

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

const allHtmls = getHtmlFiles(__dirname);
console.log(JSON.stringify(allHtmls, null, 2));
