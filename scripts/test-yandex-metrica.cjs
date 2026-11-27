const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
const code=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src/lib/yandexMetrica.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
function setup(url='https://tekinpower.com/') {
 const scripts=[], timers=[], listeners=[];
 const window={location:new URL(url),setTimeout:fn=>timers.push(fn),addEventListener:(_,fn)=>listeners.push(fn)};
 const document={readyState:'complete',referrer:'https://example.com/?private=secret',title:'Tekin Power',getElementById:id=>scripts.find(s=>s.id===id),createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}};
 const exports={}; new Function('exports','window','document',code)(exports,window,document);
 return {api:exports,window,document,scripts,listeners,flush:()=>{while(timers.length) timers.shift()();},calls:()=>window.ym?.a??[]};
}
test('one init and hit for repeated mount; SPA navigation and back each counted once',()=>{
 const h=setup('https://tekinpower.com/?private=secret#contact');h.api.trackMetricaPage();h.api.trackMetricaPage();h.flush();
 assert.equal(h.scripts.length,1);assert.equal(h.calls().filter(c=>c[1]==='init').length,1);
 h.window.location=new URL('https://tekinpower.com/dewjet-pompa');h.api.trackMetricaPage();
 h.window.location=new URL('https://tekinpower.com/');h.api.trackMetricaPage();h.flush();
 assert.equal(h.calls().filter(c=>c[1]==='hit').length,3);assert.equal(h.scripts.length,1);
 assert.doesNotMatch(JSON.stringify(h.calls()),/secret|private|#contact/);
 const opts=h.calls()[0][2]; assert.equal(opts.webvisor,false);assert.equal(opts.defer,true);assert.equal(opts.trackLinks,false);
});
test('local, preview and private pages do not load or record',()=>{
 for(const url of ['http://localhost:3000/','https://preview.vercel.app/','https://tekinpower.com/admin','https://tekinpower.com/admin/test','https://tekinpower.com/proje-takip','https://tekinpower.com/api/contact']) {
 const h=setup(url);h.api.trackMetricaPage();h.api.trackMetricaContact('phone_click','phone','tel');h.flush();assert.equal(h.scripts.length,0);assert.equal(h.calls().length,0);
 }
});
test('contact goals use current page; opening options and copying are not conversions',()=>{
 const h=setup('https://tekinpower.com/dewjet-pompa');
 for(const [name,ch,method] of [['phone_click','phone','tel'],['whatsapp_click','whatsapp','whatsapp'],['email_click','email','gmail'],['email_options_open','email','dialog'],['email_address_copy','email','clipboard']])h.api.trackMetricaContact(name,ch,method);
 const goals=h.calls().filter(c=>c[1]==='reachGoal');assert.equal(goals.length,3);assert.ok(goals.every(c=>c[3].page_path==='/dewjet-pompa'));assert.equal(h.calls().filter(c=>c[1]==='hit').length,1);
});
test('return from private route before deferred load still loads on public route',()=>{
 const h=setup();h.api.trackMetricaPage();h.window.location=new URL('https://tekinpower.com/admin');h.api.trackMetricaPage();h.flush();assert.equal(h.scripts.length,0);
 h.window.location=new URL('https://tekinpower.com/');h.api.trackMetricaPage();h.flush();assert.equal(h.scripts.length,1);assert.equal(h.calls().filter(c=>c[1]==='init').length,1);
});
test('download waits for page load while early events are queued',()=>{
 const h=setup();h.document.readyState='loading';h.api.trackMetricaContact('phone_click','phone','tel');h.flush();assert.equal(h.scripts.length,0);h.listeners[0]();h.flush();assert.equal(h.scripts.length,1);assert.equal(h.calls().filter(c=>c[1]==='reachGoal').length,1);
});
