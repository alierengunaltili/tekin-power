const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const manifest = require('../src/data/videoAssets.json');
const expected = [
  'landing-page/marin', 'landing-page/enerjidepolamasistemleri', 'landing-page/askerisistemuygulamalari',
  'landing-page/dewjet-motor-deniz-v1', 'landing-page/dewjet-pompa-v3',
  'service/marin', 'service/askeri-sistem', 'service/drone', 'service/ebus', 'service/forklift',
  'service/golfaraclari', 'service/konut-cozumleri', 'service/mobil-solar', 'service/enerjidepolama',
  'service/dewjet-pompa-showcase-v1', 'service/dewjet-twin-marine-v2',
];
assert.deepEqual(Object.keys(manifest).sort(), expected.sort(), 'Every active video must have a delivery record.');
const checked = new Set();
for (const [key, asset] of Object.entries(manifest)) {
  assert.ok(fs.existsSync(path.join(root, 'public', asset.poster)), `${key}: poster missing`);
  assert.ok(asset.balanced.width >= Math.min(1920, asset.full.width), `${key}: unexpectedly low resolution`);
  for (const rendition of [asset.full, asset.balanced]) {
    for (const format of ['mp4', 'webm']) {
      const url = rendition[format];
      if (checked.has(url)) continue;
      checked.add(url);
      const file = path.join(root, 'public', url);
      const bytes = fs.readFileSync(file);
      assert.equal(bytes.length, rendition[`${format}Bytes`]);
      if (format === 'mp4') {
        assert.ok(bytes.indexOf(Buffer.from('moov')) < bytes.indexOf(Buffer.from('mdat')), `${url}: faststart`);
      }
      const info = JSON.parse(execFileSync('C:/Program Files/Shotcut/ffprobe.exe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:format=duration', '-of', 'json', file], { encoding: 'utf8' }));
      assert.equal(info.streams[0].width, rendition.width);
      assert.equal(info.streams[0].height, rendition.height);
      assert.ok(Math.abs(Number(info.format.duration) - asset.duration) < 0.2, `${url}: duration mismatch`);
    }
  }
}
assert.equal(manifest['landing-page/enerjidepolamasistemleri'].full.width, 3840);
assert.equal(manifest['service/askeri-sistem'].full.height, 2160);
console.log(`PASS ${expected.length} video references, ${checked.size} encoded files, posters, native dimensions, duration and faststart.`);
