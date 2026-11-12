const {chromium}=require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'); const fs=require('node:fs');
const base=process.argv[2]||'http://127.0.0.1:3000'; const tag=process.argv[3]||'local';
const dir='C:/Users/merto/Desktop/tekin-power-master/artifacts/turnkey-home';
(async()=>{
 const b=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const results=[];
 try {
 for(const width of [1440,390,360]){
  const p=await b.newPage({viewport:{width,height:950},reducedMotion:'reduce'}); const errors=[]; p.on('pageerror',e=>errors.push(e.message));
  const response=await p.goto(base+'/',{waitUntil:'domcontentloaded',timeout:60000}); assert.equal(response.status(),200);
  const section=p.locator('#anahtar-teslim'); await section.scrollIntoViewIfNeeded();
  assert.equal(await p.locator('#battery').count(),0);
  assert.equal(await p.locator('#services').evaluate(el=>el.nextElementSibling.id),'anahtar-teslim');
  assert.equal(await section.locator('article').count(),2); assert.equal(await section.locator('ol li').count(),4);
  const copy=await section.innerText(); for(const text of ['anahtar teslim çözümler','420 m³/h','1.200 m³/h','20 kW','25 kg','45 kW','55 kg']) assert.ok(copy.includes(text),text);
  for(const img of await section.locator('img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode()); assert.ok(await img.evaluate(el=>el.naturalWidth>0));}
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.equal(await section.locator('a[href^="tel:"]').getAttribute('href'),'tel:+905323276293');
  await section.locator('a[href="#contact"]').click(); await p.waitForTimeout(1300); assert.ok(await p.locator('#contact').evaluate(el=>el.getBoundingClientRect().top<innerHeight));
  const links=[['/dewjet-pompa','DewJet Elektrikli Su Pompası'],['/dewjet-elektrikli-motor#motor-modelleri','Motorunuzu seçin']];
  for(const [href,label] of links){await section.locator(`a[href="${href}"]`).click();await p.waitForURL(base+href);await p.getByRole('heading',{name:label,exact:true}).waitFor();await p.goto(base+'/',{waitUntil:'domcontentloaded'});}
  await section.scrollIntoViewIfNeeded(); for(const img of await section.locator('img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
  await p.addStyleTag({content:'nav[aria-label="Ana menü"],nextjs-portal{display:none!important}'});
  await section.screenshot({path:`${dir}/${tag}-${width}-section.png`});
  if(width===390){await section.locator('article').first().screenshot({path:`${dir}/${tag}-390-pumps.png`}); await section.locator('article').nth(1).screenshot({path:`${dir}/${tag}-390-motors.png`});}
  assert.deepEqual(errors,[]);results.push({width,status:response.status(),afterServices:true,products:2,images:2,steps:4,links:'pump, motor, contact passed',overflow:false,errors});await p.close();
 }
 fs.writeFileSync(`${dir}/${tag}-checks.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});


