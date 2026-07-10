import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function getHtmlFiles(dir, fileList = {}) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getHtmlFiles(name, fileList);
    } else if (file.endsWith('.html')) {
      let key = name.replace('.//', '').replace('./', '').replace('.html', '').replace(/\\/g, '/');
      if (key === 'index') key = 'main';
      fileList[key] = resolve(__dirname, name);
    }
  }
  return fileList;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlFiles('.')
    }
  }
});
