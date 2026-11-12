const { chromium } = require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.argv[2] || 'http://127.0.0.1:3000';
const output = path.resolve(__dirname, '../../artifacts/sharp-media');
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const results = [];
  try {
    for (const [width, height] of [[360, 800], [390, 844], [430, 932], [844, 390]]) {
      if (process.env.MOBILE_VIEWPORT_WIDTH && width !== Number(process.env.MOBILE_VIEWPORT_WIDTH)) continue;
      const page = await browser.newPage({ viewport: { width, height } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.addInitScript(() => {
        const connection = new EventTarget();
        Object.assign(connection, { downlink: 30, effectiveType: '4g', saveData: false });
        Object.defineProperty(navigator, 'connection', { value: connection });
      });
      async function check(label) {
        await page.waitForFunction(() => document.querySelector('.mobile-video-hero video')?.currentTime > 0.1);
        const state = await page.locator('.mobile-video-hero').evaluate(el => {
          const v = el.querySelector('video'); v.pause();
          const rect = v.getBoundingClientRect(), copy = el.querySelector('.mobile-video-content'), text = copy.getBoundingClientRect();
          return { fit: getComputedStyle(v).objectFit, left: rect.left, right: rect.right, width: rect.width, height: rect.height,
            frameBottom: rect.bottom, textTop: text.top + parseFloat(getComputedStyle(copy).paddingTop), sourceWidth: v.videoWidth, opacity: getComputedStyle(v).opacity,
            overflow: document.documentElement.scrollWidth > innerWidth,
            shade: getComputedStyle(el.querySelector('.mobile-video-shade')).backgroundImage };
        });
        assert.equal(state.fit, 'contain');
        assert.ok(state.left >= -1 && state.right <= width + 1);
        assert.ok(Math.abs(state.width - width) <= 1);
        if (width < height) assert.ok(Math.abs(state.width / state.height - 16 / 9) < 0.02);
        else assert.ok(state.frameBottom <= height + 1, 'Landscape video must fit below navigation');
        assert.ok(state.textTop >= state.frameBottom - 5, 'Copy must not cover the product area');
        assert.equal(state.overflow, false);
        assert.ok(state.shade.includes('0.94'));
        if (width === 390 || width === 844) await page.screenshot({ path: path.join(output, `framing-${width}-${label}.png`), fullPage: false });
        results.push({ label, viewport: `${width}x${height}`, ...state });
      }
      await page.goto(base);
      await page.waitForTimeout(6000); // Wait for the existing entrance timeline.
      for (let index = 0; index < 5; index++) {
        await page.locator('#hero button[aria-label$="slaydını göster"]').nth(index).click();
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        await check(`home-${index}`);
      }
      for (const route of ['/dewjet-elektrikli-motor', '/dewjet-pompa', '/hizmetlerimiz/marin']) {
        await page.goto(base + route);
        await page.waitForTimeout(1200); // Service entrance animation translates the entire hero.
        await check(route.split('/').at(-1));
      }
      assert.deepEqual(errors, []);
      console.log(`PASS ${width}x${height}: 8 layouts, full frame, clear product area, no horizontal overflow`);
      await page.close();
    }
    fs.writeFileSync(path.join(output, 'mobile-framing-checks.json'), JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
