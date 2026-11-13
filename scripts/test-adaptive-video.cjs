const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
// Exercise the actual TS helpers with the installed compiler; no test dependency needed.
function load(name) {
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib', name + '.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const module = { exports: {} };
  new Function('exports', 'module', code)(module.exports, module);
  return module.exports;
}
const { chooseVideoQuality, lowerVideoQuality, shouldPlayVideo, canSustainVideo } = load('videoQuality');
const { startVideoPlayback } = load('videoPlayback');
class Video extends EventTarget {
  currentTime = 3;
  duration = 12;
  paused = true;
  readyState = 2;
  play() { this.paused = false; return Promise.resolve(); }
  pause() { this.paused = true; }
}
test('large and high-density screens get native detail; mobile keeps a sharp balanced rendition', () => {
  assert.equal(chooseVideoQuality({ effectiveType: '4g', downlink: 10 }, 1920), 'full');
  assert.equal(chooseVideoQuality({ effectiveType: '4g', downlink: 10 }, 1440, 2), 'full');
  assert.equal(chooseVideoQuality({ effectiveType: '4g', downlink: 10 }, 390, 3), 'balanced');
  assert.equal(chooseVideoQuality(undefined, 1440), 'balanced');
  assert.equal(chooseVideoQuality(undefined, 3840), 'full');
  assert.equal(chooseVideoQuality({ downlink: 3 }, 3840), 'balanced');
});
test('very slow and data-saving connections retain a sharp poster, never a 360p video', () => {
  assert.equal(shouldPlayVideo({ effectiveType: '4g', downlink: 10 }), true);
  assert.equal(shouldPlayVideo(undefined), true);
  assert.equal(shouldPlayVideo({ effectiveType: '3g' }), false);
  assert.equal(shouldPlayVideo({ effectiveType: '2g', downlink: 2 }), false);
  assert.equal(shouldPlayVideo({ downlink: 0.8 }), false);
  assert.equal(shouldPlayVideo({ saveData: true }), false);
});
test('fallback terminates at the poster rather than cycling qualities forever', () => {
  assert.equal(lowerVideoQuality('full'), 'balanced');
  assert.equal(lowerVideoQuality('balanced'), null);
});
test('a file exceeding the connection budget uses the sharp poster instead of starting and stalling', () => {
  assert.equal(canSustainVideo(8_000_000, 10, { downlink: 3 }), false);
  assert.equal(canSustainVideo(8_000_000, 10, { downlink: 10 }), true);
  assert.equal(canSustainVideo(2_000_000, 10, { downlink: 3 }), true);
  assert.equal(canSustainVideo(8_000_000, 10, undefined), true);
});
test('initial load timeout requests a lower quality and preserves playback position', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  const times = [];
  const stop = startVideoPlayback(video, 0, time => times.push(time), () => {});
  t.mock.timers.tick(5000);
  assert.deepEqual(times, [3]);
  stop();
});

test('manual-capable playback allows initial buffering without the short rebuffer timeout', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  let fallback = 0;
  const stop = startVideoPlayback(video, 0, () => fallback++, () => {}, undefined, { startupTimeoutMs: 20000, bufferTimeoutMs: 6000 });
  video.dispatchEvent(new Event('waiting'));
  t.mock.timers.tick(10000);
  assert.equal(fallback, 0);
  video.dispatchEvent(new Event('playing'));
  video.dispatchEvent(new Event('waiting'));
  t.mock.timers.tick(5999);
  assert.equal(fallback, 0);
  t.mock.timers.tick(1);
  assert.equal(fallback, 1);
  stop();
});
test('brief buffering recovers; sustained buffering falls back', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  let fallback = 0;
  const stop = startVideoPlayback(video, 0, () => fallback++, () => {});
  video.dispatchEvent(new Event('playing'));
  video.dispatchEvent(new Event('waiting'));
  t.mock.timers.tick(1000);
  video.dispatchEvent(new Event('playing'));
  t.mock.timers.tick(5000);
  assert.equal(fallback, 0);
  video.dispatchEvent(new Event('waiting'));
  t.mock.timers.tick(2500);
  assert.equal(fallback, 1);
  stop();
});
test('hidden/unmounted videos pause and cannot trigger stale fallbacks', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  let fallback = 0;
  const stop = startVideoPlayback(video, 0, () => fallback++, () => {});
  stop();
  video.dispatchEvent(new Event('waiting'));
  t.mock.timers.tick(10000);
  assert.equal(fallback, 0);
  assert.equal(video.paused, true);
});
test('network inactivity does not lower quality while buffered playback continues', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  let fallback = 0;
  const stop = startVideoPlayback(video, 0, () => fallback++, () => {});
  video.readyState = 4;
  video.dispatchEvent(new Event('playing'));
  video.dispatchEvent(new Event('stalled'));
  t.mock.timers.tick(10000);
  assert.equal(fallback, 0);
  stop();
});
test('quality change restores position after metadata loads', () => {
  const video = new Video();
  const stop = startVideoPlayback(video, 7, () => {}, () => {});
  video.dispatchEvent(new Event('loadedmetadata'));
  assert.equal(video.currentTime, 7);
  stop();
});
test('autoplay refusal leaves a poster and cancels the timeout', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  video.play = () => Promise.reject(new DOMException('blocked', 'NotAllowedError'));
  let blocked = 0;
  let fallback = 0;
  const stop = startVideoPlayback(video, 0, () => fallback++, () => blocked++);
  await Promise.resolve();
  t.mock.timers.tick(10000);
  assert.equal(blocked, 1);
  assert.equal(fallback, 0);
  stop();
});
test('cached metadata restores a replaced source, but scroll resume does not seek', () => {
  const video = new Video();
  let position = 7, seeks = 0;
  Object.defineProperty(video, 'currentTime', { get: () => position, set: time => { position = time; seeks++; } });
  const stop = startVideoPlayback(video, 7, () => {}, () => {});
  assert.equal(seeks, 0);
  stop();
  assert.equal(video.currentTime, 7);
  const resume = startVideoPlayback(video, 7, () => {}, () => {});
  assert.equal(seeks, 0);
  resume();
  position = 0;
  const replace = startVideoPlayback(video, 7, () => {}, () => {});
  assert.equal(position, 7);
  assert.equal(seeks, 1);
  replace();
});
test('decoder failures can retry a compatible codec without immediately reducing resolution', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const video = new Video();
  let codecFallback = 0, qualityFallback = 0;
  const stop = startVideoPlayback(video, 0, () => qualityFallback++, () => {}, () => codecFallback++);
  video.dispatchEvent(new Event('error'));
  t.mock.timers.tick(6000);
  assert.equal(codecFallback, 1);
  assert.equal(qualityFallback, 0);
  stop();
});
