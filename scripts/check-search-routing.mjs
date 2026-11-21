import assert from 'node:assert/strict';
import http from 'node:http';

const base = process.argv[2] || 'http://127.0.0.1:3000';
const local = new URL(base).hostname === '127.0.0.1';
const canonical = 'https://tekinpower.com';
async function request(path, www = false) {
  if (local && www) {
    return new Promise((resolve, reject) => {
      const req = http.get(base + path, { headers: { host: 'www.tekinpower.com' } }, res => {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(new Response(Buffer.concat(chunks), {
          status: res.statusCode, headers: res.headers,
        })));
      });
      req.setTimeout(60000, () => req.destroy(new Error('Request timed out')));
      req.on('error', reject);
    });
  }
  const origin = www && !local ? 'https://www.tekinpower.com' : base;
  return fetch(origin + path, {
    redirect: 'manual',
    headers: www && local ? { host: 'www.tekinpower.com' } : {},
    signal: AbortSignal.timeout(60000),
  });
}
for (const www of [false, true]) {
  const result = await request('/dewjet?utm_source=google', www);
  assert.equal(result.status, 308, 'Permanent legacy redirect');
  assert.equal(result.headers.get('location'), canonical + '/dewjet-elektrikli-motor?utm_source=google');
}
for (const path of ['/', '/dewjet-pompa?utm_source=google', '/dewjet-elektrikli-motor', '/hizmetlerimiz/marin']) {
  const result = await request(path, true);
  assert.equal(result.status, 308, 'Canonical host redirect');
  assert.equal(new URL(result.headers.get('location')).href, canonical + path, 'Keep path and query');
}
for (const path of ['/', '/dewjet-elektrikli-motor', '/dewjet-pompa']) {
  const result = await request(path);
  assert.equal(result.status, 200, 'Destination has no redirect loop');
  const html = await result.text();
  const icons = [...html.matchAll(/<link\b[^>]*rel="(?:icon|shortcut icon|apple-touch-icon)"[^>]*>/g)].map(m => m[0]);
  assert.ok(icons.length >= 1);
  for (const icon of icons) assert.ok(icon.includes(canonical + '/tekinpower-icon.png'), 'Consistent brand icon');
  const pageCanonical = html.match(/rel="canonical" href="([^"]+)"/);
  assert.ok(pageCanonical, 'Canonical is present');
  assert.equal(new URL(pageCanonical[1]).href, canonical + path, 'Canonical page address');
  if (path.includes('motor')) assert.ok(html.includes('DewJet Elektrikli Tekne Motorları'));
}
const icon = await request('/tekinpower-icon.png');
assert.equal(icon.status, 200);
const png = Buffer.from(await icon.arrayBuffer());
assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
assert.equal(png.readUInt32BE(16), 256);
assert.equal(png.readUInt32BE(20), 256);
const sitemap = await (await request('/sitemap.xml')).text();
assert.ok(!sitemap.includes('<loc>' + canonical + '/dewjet</loc>'));
assert.ok(sitemap.includes('<loc>' + canonical + '/dewjet-elektrikli-motor</loc>'));
assert.ok(sitemap.includes('<loc>' + canonical + '/dewjet-pompa</loc>'));
console.log('PASS: direct permanent DewJet redirect, www canonicalization, preserved paths/queries, destination pages, shared square favicon, sitemap.');
