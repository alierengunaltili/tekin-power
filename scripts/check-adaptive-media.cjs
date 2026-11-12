const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const probe = 'C:/Program Files/Shotcut/ffprobe.exe';
const publicDir = path.join(__dirname, '../public');
let count = 0;
for (const prefix of ['landing-page', 'service']) {
  const names = fs.readdirSync(path.join(publicDir, `${prefix}-videos-hd`));
  assert.equal(names.length, prefix === 'landing-page' ? 10 : 9);
  for (const name of names) {
    for (const [quality, maxWidth, fps] of [['hd',1280,30],['medium',960,30],['lite',640,24]]) {
      const file = path.join(publicDir, `${prefix}-videos-${quality}`, name);
      const info = JSON.parse(execFileSync(probe, ['-v','error','-select_streams','v:0','-show_entries','stream=width,height,r_frame_rate','-of','json',file], { encoding:'utf8' }));
      assert.ok(info.streams[0].width <= maxWidth, file);
      assert.equal(info.streams[0].r_frame_rate, `${fps}/1`, file);
      const bytes = fs.readFileSync(file);
      assert.ok(bytes.indexOf(Buffer.from('moov')) < bytes.indexOf(Buffer.from('mdat')), `faststart: ${file}`);
      count++;
    }
    assert.ok(fs.existsSync(path.join(publicDir, `${prefix}-posters`, name.replace('.mp4','.jpg'))));
  }
}
console.log(`${count} videos: resolution, frame rate, faststart and 19 posters verified.`);
(async () => {
  const [removed, sitemap] = await Promise.all([fetch('http://127.0.0.1:3000/hizmetlerimiz/telekomunikasyon'), fetch('http://127.0.0.1:3000/sitemap.xml')]);
  assert.equal(removed.status, 404);
  assert.ok(!(await sitemap.text()).includes('telekomunikasyon'));
  const range = await fetch('http://127.0.0.1:3000/landing-page-videos-hd/marin.mp4', { headers: { Range: 'bytes=0-1023' } });
  assert.equal(range.status, 206);
  assert.equal((await range.arrayBuffer()).byteLength, 1024);
  console.log('Removed route: 404; sitemap clean; video byte-range streaming: 206.');
})().catch(error => { console.error(error); process.exitCode = 1; });
