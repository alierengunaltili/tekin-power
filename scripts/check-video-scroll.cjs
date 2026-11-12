const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base = process.argv[2] || 'http://127.0.0.1:3000';
const cases = [
  { route: '/' },
  { route: '/', slide: 'DewJet Elektrikli Tekne Motorları slaydını göster' },
  { route: '/', slide: 'Enerji Depolama Sistemleri slaydını göster' },
  { route: '/dewjet-elektrikli-motor' },
  { route: '/dewjet-pompa' },
  { route: '/hizmetlerimiz/marin' },
];
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const results = [];
  try {
    for (const width of [1440, 390]) for (const item of cases) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.addInitScript(() => {
        const connection = new EventTarget();
        Object.assign(connection, { downlink: 30, effectiveType: '4g', saveData: false });
        Object.defineProperty(navigator, 'connection', { value: connection });
      });
      assert.equal((await page.goto(base + item.route)).status(), 200);
      if (item.slide) await page.getByRole('button', { name: item.slide, exact: true }).click();
      await page.waitForFunction(() => document.querySelector('video')?.currentTime > 0.5);
      const video = page.locator('video');
      const before = await video.evaluate(v => {
        window.scrollVideo = v;
        window.scrollVideoEvents = [];
        for (const event of ['emptied', 'loadstart', 'seeking', 'error']) {
          v.addEventListener(event, () => window.scrollVideoEvents.push(event));
        }
        return { src: v.getAttribute('src'), width: v.videoWidth, height: v.videoHeight };
      });
      for (let cycle = 0; cycle < 3; cycle++) {
        await page.evaluate(() => window.scrollTo({ top: 1800, behavior: 'instant' }));
        await page.waitForFunction(() => window.scrollVideo.paused);
        const pausedAt = await video.evaluate(v => v.currentTime);
        await page.waitForTimeout(180);
        const paused = await video.evaluate(v => ({ time: v.currentTime, src: v.getAttribute('src'), ready: v.readyState }));
        assert.equal(paused.src, before.src, 'Scroll must retain the source');
        assert.ok(Math.abs(paused.time - pausedAt) < 0.06, 'Offscreen video must pause');
        assert.ok(paused.ready >= 2, 'Decoded frame must remain available');
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        await page.waitForFunction(time => !window.scrollVideo.paused && window.scrollVideo.currentTime > time + 0.1, pausedAt);
      }
      // Rapid reversals should not start a new media load or seek either.
      for (const top of [1800, 0, 1800, 0]) {
        await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), top);
        await page.waitForTimeout(50);
      }
      await page.waitForFunction(() => !window.scrollVideo.paused);
      const after = await video.evaluate(v => ({ same: v === window.scrollVideo, width: v.videoWidth, height: v.videoHeight, opacity: getComputedStyle(v).opacity, events: window.scrollVideoEvents }));
      assert.equal(after.same, true);
      assert.equal(after.width, before.width);
      assert.equal(after.height, before.height);
      assert.equal(after.opacity, '1');
      assert.deepEqual(after.events, [], 'Scroll must not reload, seek or produce media errors');
      assert.deepEqual(errors, []);
      results.push({ route: item.route, slide: item.slide, viewport: width, ...after });
      console.log('PASS', width, item.route, item.slide || '', before.width, 'no reload/seek');
      await page.close();
    }
    const output = path.resolve(__dirname, '../../artifacts/sharp-media/scroll-checks.json');
    fs.writeFileSync(output, JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
