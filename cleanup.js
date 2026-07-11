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

            content = content.replace(/id="estimate-form"/g, 'id="call-to-action"');

            // Quick check if FAQ page needs fixing from regex issue earlier
            content = content.replace(/fill out the free estimate form/g, 'call or text us');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDir(__dirname);
console.log("Cleanup done.");
