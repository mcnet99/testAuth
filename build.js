// build.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate a random filename
const hash = crypto.randomBytes(4).toString('hex');
const filename = `app-${hash}.js`;

// Create a simple output (replace with your real build logic)
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);

fs.writeFileSync(path.join(distPath, filename), `console.log("Hello, random file: ${filename}");`);

console.log(`✅ Build complete: dist/${filename}`);
