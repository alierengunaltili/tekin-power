import assert from 'node:assert/strict';
import http from 'node:http';

const base = process.argv[2] || 'http://127.0.0.1:3000';
const local = new URL(base).hostname === '127.0.0.1';
const canonical = 'https://tekinpower.com';
const redirects = [
  ['/dewjet', '/dewjet-elektrikli-motor'],
  ['/hizmetlerimiz/telekomunikasyon', '/hizmetlerimiz/enerji-depolama'],
  ['/hizmetlerimiz/konut-cozumleri', '/hizmetlerimiz/enerji-depolama'],
  ['/hizmetlerimiz/car-port', '/gunespaneli'],
  ['/hizmetlerimiz/mobil-solar', '/gunespaneli'],
  ['/hizmetlerimiz/solar-pole', '/gunespaneli'],
  ['/hizmetlerimiz/e-bus', '/lifepo4'],
  ['/hizmetlerimiz/forklift', '/lifepo4'],
  ['/hizmetlerimiz/golf-araclari', '/lifepo4'],
  ['/hizmetlerimiz/drone', '/lifepo4'],
  ['/afad', '/dewjet-pompa#tasinabilirlik'],
  ['/sahadan-gorseller', '/hizmetlerimiz'],
  ['/sahadan-gorseller/marin-cozumler', '/hizmetlerimiz/marin'],
  ['/sahadan-gorseller/elektrikli-pompa-cozumleri', '/dewjet-pompa'],
];
const pages = [
  ['/', 'Tekin Power'], ['/hakkimizda', 'Tekin Power Hakkında'],
  ['/hizmetlerimiz', 'Tekin Power Çözümleri'], ['/dewjet-elektrikli-motor', 'Elektrikli Tekne Motorları'],
  ['/dewjet-pompa', 'Elektrikli Su Pompası'], ['/lifepo4', 'LiFePO4 Batarya'],
  ['/tekne-hmi', 'Tekne HMI'], ['/gunespaneli', 'Güneş Paneli Sistemleri'],
  ['/dalyan', 'DALYAN'], ['/arsimet-burgusu', 'Arşimet Burgusu'],
  ['/hizmetlerimiz/marin', 'Elektrikli Marin'],
  ['/hizmetlerimiz/enerji-depolama', 'Unisun Enerji Depolama'],
  ['/hizmetlerimiz/askeri-sistem-uygulamalari', 'Askeri Sistem'],
  ['/hizmetlerimiz/deniz-gol-dibi-arama-tarama', 'Tarama ve Temizleme'],
];
function request(path, www = false) {
  if (local && www) return new Promise((resolve, reject) => {
    const req = http.get(base + path, { headers: { host: 'www.tekinpower.com' } }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(new Response(Buffer.concat(chunks), { status: res.statusCode, headers: res.headers })));
    });
    req.setTimeout(60000, () => req.destroy(new Error('Request timed out')));
    req.on('error', reject);
  });
  return fetch((www ? 'https://www.tekinpower.com' : base) + path, { redirect: 'manual', signal: AbortSignal.timeout(60000) });
}
for (const [source, destination] of redirects) {
  for (const www of [false, true]) {
    const res = await request(source + '?utm_source=google&kontrol=1', www);
    assert.equal(res.status, 308, source + ' permanent redirect');
    const expected = new URL(destination, canonical);
    expected.search = '?utm_source=google&kontrol=1';
    assert.equal(new URL(res.headers.get('location'), canonical).href, expected.href, source + ' direct destination with query/anchor');
  }
}
for (const [path, title] of pages) {
  const res = await request(path);
  assert.equal(res.status, 200, path + ' current page');
  const html = await res.text();
  assert.ok(html.match(/<title>(.*?)<\/title>/)?.[1].includes(title), path + ' relevant title');
  assert.equal(new URL(html.match(/rel="canonical" href="([^"]+)"/)?.[1]).href, canonical + path, path + ' canonical');
  assert.ok(html.includes('https://tekinpower.com/tekinpower-icon.png'), path + ' brand icon');
  if (path === '/dewjet-pompa') {
    assert.ok(html.includes('id="tasinabilirlik"'));
    assert.ok(html.includes('AFAD Ortak Tatbikat'));
  }
  const www = await request(path, true);
  assert.equal(www.status, 308);
  assert.equal(new URL(www.headers.get('location')).href, canonical + path);
}
const sitemap = await (await request('/sitemap.xml')).text();
for (const [source] of redirects) assert.ok(!sitemap.includes(`<loc>${canonical}${source}</loc>`), source + ' not in sitemap');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Sitemap has no duplicates');
for (const [path] of pages) assert.ok(urls.some(url => new URL(url).href === canonical + path), path + ' in sitemap');
assert.equal((await request('/hizmetlerimiz/olmayan-hizmet-kontrol')).status, 404, 'Unknown service must not redirect to unrelated content');
console.log('PASS: 14 legacy redirects on both hosts, queries and AFAD anchor, 14 current pages and canonical titles/icons, sitemap, unknown-route 404.');
