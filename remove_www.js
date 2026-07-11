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
    if (filePath.endsWith('.html') || filePath.endsWith('.xml') || filePath.endsWith('.txt') || filePath.endsWith('.js')) {
        // Exclude this script itself and node_modules or .git
        if (filePath.includes('node_modules') || filePath.includes('.git') || filePath.includes('remove_www.js')) {
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/www\.simivalleyhandymanco\.com/g, 'simivalleyhandymanco.com');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated: ${filePath}`);
            updatedFilesCount++;
        }
    }
});

console.log(`Done! Updated ${updatedFilesCount} files.`);
