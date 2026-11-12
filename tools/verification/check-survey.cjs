const { chromium } = require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const base = process.argv[2] || 'http://127.0.0.1:3000';
const tag = process.argv[3] || 'local';
const dir = 'C:/Users/merto/Desktop/tekin-power-master/artifacts/survey-catalog';
const route = '/hizmetlerimiz/deniz-gol-dibi-arama-tarama';
(async () => {
 const browser = await chromium.launch({ executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
 const results=[];
 try {
  for (const width of [1440,390,360]) {
   const page=await browser.newPage({viewport:{width,height:950},reducedMotion:'reduce'});
   const errors=[]; page.on('pageerror', e=>errors.push(e.message));
   const response=await page.goto(base+route,{waitUntil:'networkidle',timeout:60000});
   assert.equal(response.status(),200);
   await page.locator('h1').waitFor();
   assert.match(await page.locator('h1').innerText(),/Deniz Göl Dibi/);
   assert.equal(await page.locator('#ekipmanlar article').count(),6);
   assert.equal(await page.locator('main h1').count(),1);
   assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://tekinpower.com'+route);
   const anchors=page.locator('nav[aria-label="Tarama sayfası bölümleri"] a');
   for(let i=0;i<await anchors.count();i++) {
    const a=anchors.nth(i); const href=await a.getAttribute('href'); await a.click();
    await page.waitForFunction(href=>Math.abs(document.querySelector(href).getBoundingClientRect().top-160)<3,href,{timeout:10000});
   }
   for(const detail of await page.locator('#ekipmanlar details').all()) {
    const summary=detail.locator('summary'); await summary.click(); assert.equal(await detail.getAttribute('open'),'');
    assert.ok(await detail.locator('dl').isVisible()); await summary.click(); assert.equal(await detail.getAttribute('open'),null);
   }
   for(const img of await page.locator('main img').all()) {
    await img.scrollIntoViewIfNeeded(); await img.evaluate(el=>el.decode());
    assert.ok(await img.evaluate(el=>el.naturalWidth>0));
   }
   assert.ok(await page.locator('nav[aria-label="Ana menü"] img').getAttribute('src').then(src=>src.includes('marin')));
   assert.ok(await page.locator('footer img').first().getAttribute('src').then(src=>src.includes('marin')));
   assert.equal(await page.locator('#tarama-iletisim a').first().getAttribute('href'),'tel:+905323276293');
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
   assert.equal(overflow,false);
   await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
   await page.waitForTimeout(1100);
   await page.screenshot({path:`${dir}/${tag}-${width}-hero.png`});
   await page.addStyleTag({content:'nav[aria-label="Ana menü"],nextjs-portal{visibility:hidden!important}'});
   await page.locator('#kesici-emici').screenshot({path:`${dir}/${tag}-${width}-equipment.png`});
   if(width===1440) {
    await page.locator('#referanslar').screenshot({path:`${dir}/${tag}-${width}-references.png`});
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('link',{name:'Kataloğu indir (PDF)',exact:true}).click()]);
    assert.equal(await download.failure(),null);
    const buffer=fs.readFileSync(await download.path());
    const source=fs.readFileSync('C:/Users/merto/Desktop/Tekin_Power_Tarama_Katalogu_ver1 11-11-2026.pdf');
    assert.equal(crypto.createHash('sha256').update(buffer).digest('hex'),crypto.createHash('sha256').update(source).digest('hex'));
    results.push({pdf:download.suggestedFilename(),bytes:buffer.length,originalIdentical:true});
   }
   assert.deepEqual(errors,[]);
   results.push({width,status:response.status(),equipment:6,details:'open/close passed',anchors:'5 passed',images:'8 decoded',overflow,errors});
   await page.close();
  }
  console.log(JSON.stringify(results,null,2));
  fs.writeFileSync(`${dir}/${tag}-checks.json`,JSON.stringify(results,null,2));
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});

