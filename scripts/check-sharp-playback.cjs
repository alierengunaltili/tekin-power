const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const output = path.resolve(__dirname, '../../artifacts/sharp-media');
const cases = [
  { id: 'desktop-4k', width: 1920, ratio: 1, speed: 30, route: '/', slide: 'Enerji Depolama Sistemleri slaydını göster', widthExpected: 3840 },
  { id: 'mobile-sharp', width: 390, ratio: 3, speed: 15, route: '/', slide: 'Enerji Depolama Sistemleri slaydını göster', widthExpected: 1920 },
  { id: 'slow-poster', width: 390, ratio: 3, speed: 0.6, route: '/dewjet-elektrikli-motor', posterOnly: true },
  { id: 'mp4-compatible', width: 1440, ratio: 1, speed: 30, route: '/dewjet-pompa', noVp9: true, widthExpected: 1344 },
  { id: 'codec-recovery', width: 1440, ratio: 1, speed: 30, route: '/dewjet-elektrikli-motor', rejectWebm: true, widthExpected: 1600 },
];
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const results = [];
  try {
    for (const item of cases) {
      const page = await browser.newPage({ viewport: { width: item.width, height: 1000 }, deviceScaleFactor: item.ratio });
      const errors = [], requests = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => { if (/\.(mp4|webm)(\?|$)/.test(r.url())) requests.push(r.url()); });
      await page.addInitScript(({ speed, noVp9 }) => {
        const connection = new EventTarget();
        Object.assign(connection, { downlink: speed, effectiveType: speed < 1.5 ? '3g' : '4g', saveData: false });
        Object.defineProperty(navigator, 'connection', { configurable: true, value: connection });
        if (noVp9) {
          const original = HTMLMediaElement.prototype.canPlayType;
          HTMLMediaElement.prototype.canPlayType = function(type) { return type.includes('webm') ? '' : original.call(this, type); };
        }
      }, { speed: item.speed, noVp9: item.noVp9 });
      if (item.rejectWebm) await page.route('**/media/sharp-v2/*.webm', r => r.abort());
      const response = await page.goto(base + item.route, { waitUntil: 'domcontentloaded', timeout: 90000 });
      assert.equal(response.status(), 200);
      await page.waitForTimeout(2000);
      if (item.slide) await page.locator('#hero').getByRole('button', { name: item.slide, exact: true }).click();
      const region = page.locator(item.route === '/' ? '#hero' : 'main > header');
      if (item.posterOnly) {
        await page.waitForTimeout(1200);
        assert.equal(await region.locator('video').count(), 0);
        assert.equal(requests.length, 0);
        const poster = await region.evaluate(el => Array.from(el.querySelectorAll('div')).map(x => x.style.backgroundImage).find(x => x.includes('/media/sharp-v2/')));
        assert.ok(poster, 'A high-resolution poster must remain visible.');
        assert.equal(await region.locator('[class*="blur-"]').count(), 0);
        results.push({ id: item.id, poster, mediaRequests: 0 });
      } else {
        await page.waitForFunction(selector => {
          const video = document.querySelector(`${selector} video`);
          return video?.currentSrc.includes('/media/sharp-v2/') && video.currentTime > 0.5 && !video.paused;
        }, item.route === '/' ? '#hero' : 'main > header', { timeout: 30000 });
        const video = region.locator('video');
        const start = await video.evaluate(v => v.currentTime);
        await page.waitForTimeout(1200);
        const state = await video.evaluate(v => ({ width: v.videoWidth, height: v.videoHeight, time: v.currentTime,
          source: v.currentSrc, codec: v.dataset.codec, tier: v.dataset.quality,
          frames: v.getVideoPlaybackQuality().totalVideoFrames, dropped: v.getVideoPlaybackQuality().droppedVideoFrames }));
        assert.equal(state.width, item.widthExpected);
        assert.ok(state.time > start);
        if (item.noVp9 || item.rejectWebm) assert.equal(state.codec, 'h264');
        assert.ok(!requests.some(url => /videos-(lite|medium)/.test(url)), 'No low-resolution legacy sources may load.');
        results.push({ id: item.id, ...state });
      }
      assert.deepEqual(errors, []);
      await page.screenshot({ path: path.join(output, `${item.id}.png`) });
      console.log('PASS', JSON.stringify(results.at(-1)));
      await page.close();
    }
    fs.writeFileSync(path.join(output, 'browser-checks.json'), JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
