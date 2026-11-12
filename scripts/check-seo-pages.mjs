// Check actual rendered HTML, not the content configuration.
import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://127.0.0.1:3000';
const canonicalBase = 'https://tekinpower.com';
const paths = ['/', '/hakkimizda', '/hizmetlerimiz', '/hizmetlerimiz/marin', '/hizmetlerimiz/enerji-depolama', '/dewjet-elektrikli-motor', '/dewjet-pompa', '/tekne-hmi', '/lifepo4', '/dewjet', '/hizmetlerimiz/askeri-sistem-uygulamalari', '/hizmetlerimiz/deniz-gol-dibi-arama-tarama'];

async function main() {
  const titles = new Set();
  for (const path of paths) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && title.includes('Tekin Power'), `Missing title: ${path}`);
    assert.ok(!titles.has(title), `Duplicate page title: ${path}`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+"/, `Description: ${path}`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(canonical?.replace(/\/$/, ''), (canonicalBase + path).replace(/\/$/, ''), `Canonical: ${path}`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `H1 count: ${path}`);
    // Do not introduce the brand the owner explicitly excluded.
    assert.ok(!/Unisun/i.test(html), `Excluded brand: ${path}`);
    if (path === '/dewjet-elektrikli-motor') {
      for (const power of [16, 18, 20, 45]) assert.ok(html.includes(`${power} kW`), `Missing approved power ${power}`);
      assert.ok(!/DWE OB-80|DWE OB-30|DWE IB-30|96V|40 kW|7 kW|15 kW/.test(html), 'Unconfirmed model mapping');
    }
    if (path === '/dewjet-elektrikli-motor' || path === '/hizmetlerimiz/marin') {
      // The owner's current line differs from the manual's two example models.
      assert.doesNotMatch(html, /DWE-OB-(?:15|40)\b|\b(?:1[. ]?800|4[. ]?500)\s*(?:N\b|newton)/i, 'Archived model or thrust rating on a current product page');
    }
    if (path === '/tekne-hmi') {
      assert.ok(html.includes('Tekne HMI Ekranı'), 'HMI content not server-rendered');
      assert.ok(html.includes('<details'), 'FAQ not server-rendered');
    }
    console.log(`OK ${path}`);
  }
  const sitemap = await fetch(base + '/sitemap.xml').then(r => r.text());
  assert.ok(sitemap.includes(canonicalBase + '/tekne-hmi'));
  assert.ok(!sitemap.includes('tekinpower.com.tr') && !sitemap.includes('https://tekinpower.com/'));
  const robots = await fetch(base + '/robots.txt').then(r => r.text());
  assert.ok(robots.includes(canonicalBase + '/sitemap.xml'));
  console.log('OK sitemap and robots');
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });

