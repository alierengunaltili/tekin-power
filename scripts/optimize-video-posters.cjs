const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'src/data/videoAssets.json');
(async () => {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const replacements = new Map();
  let before = 0, after = 0;
  for (const asset of Object.values(manifest)) {
    const originalUrl = asset.poster;
    if (replacements.has(originalUrl)) { asset.poster = replacements.get(originalUrl); continue; }
    if (!originalUrl.endsWith('.jpg')) continue;
    const original = path.join(root, 'public', originalUrl);
    const targetUrl = originalUrl.replace(/\.jpg$/, '.webp');
    const target = path.join(root, 'public', targetUrl);
    await sharp(original).webp({ quality: 90, effort: 6 }).toFile(target);
    const originalSize = fs.statSync(original).size, targetSize = fs.statSync(target).size;
    before += originalSize;
    after += Math.min(originalSize, targetSize);
    const selected = targetSize < originalSize ? targetUrl : originalUrl;
    replacements.set(originalUrl, selected);
    asset.poster = selected;
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Posters retain native dimensions: ${before} -> ${after} bytes (${replacements.size} distinct images).`);
})().catch(error => { console.error(error); process.exitCode = 1; });
