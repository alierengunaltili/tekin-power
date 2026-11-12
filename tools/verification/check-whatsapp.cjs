const {chromium}=require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'); const fs=require('node:fs');
const base=process.argv[2]||'http://127.0.0.1:3000'; const tag=process.argv[3]||'local';
const dir='C:/Users/merto/Desktop/tekin-power-master/artifacts/whatsapp-home';
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});const results=[];
try{for(const width of [1440,390,360]){
 const context=await browser.newContext({viewport:{width,height:844},reducedMotion:'reduce'});
 let handoff=null;
 await context.route('https://wa.me/**',async route=>{handoff=route.request().url();await route.fulfill({status:200,contentType:'text/html',body:'<title>WhatsApp handoff test</title>'})});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 assert.equal((await page.goto(base+'/',{waitUntil:'domcontentloaded',timeout:60000})).status(),200);
 const link=page.locator('a[href^="https://wa.me/"]');await link.waitFor();assert.equal(await link.count(),1);
 const url=new URL(await link.getAttribute('href'));assert.equal(url.pathname,'/905323276293');assert.equal(url.searchParams.get('text'),'Merhaba, Tekin Power ürün ve çözümleri hakkında bilgi almak istiyorum.');
 assert.equal(await link.getAttribute('target'),'_blank');assert.match(await link.getAttribute('rel'),/noopener/);
 await link.focus();assert.equal(await link.evaluate(el=>document.activeElement===el),true);
 for(const scroll of [0,2500]){await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),scroll);await page.waitForTimeout(300);const box=await link.boundingBox();assert.ok(box.width>=44&&box.height>=44);assert.ok(box.x>=0&&box.x+box.width<=width);assert.ok(box.y+box.height<=844-15);assert.ok(await link.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2))}));}
 await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(1000);await page.screenshot({path:`${dir}/${tag}-${width}.png`});
 const [popup]=await Promise.all([context.waitForEvent('page'),link.click()]);await popup.waitForLoadState('domcontentloaded');assert.equal(handoff,url.href);await popup.close();
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 await page.goto(base+'/dewjet-pompa',{waitUntil:'domcontentloaded'});assert.equal(await page.locator('a[href^="https://wa.me/"]').count(),0);
 results.push({width,number:url.pathname.slice(1),visibleAtTopAndScroll:true,touchTarget:true,keyboardFocus:true,controlledNewTabHandoff:true,homeOnly:true,errors});await context.close();
}console.log(JSON.stringify(results,null,2));fs.writeFileSync(`${dir}/${tag}-checks.json`,JSON.stringify(results,null,2));}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
