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

walkDir(dirToSearch, function(filePath) {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/handyman in simi valley \(1\)\.webp/g, 'ceiling-fan-smart-switch-install-wood-ranch.webp')
            .replace(/Handyman simi valley \(1\)\.webp/g, 'dog-door-install-slider-east-simi-valley.webp');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
});
