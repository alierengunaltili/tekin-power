const ts=require('typescript'),fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('node:assert/strict');
const cache=new Map();function load(file){if(cache.has(file))return cache.get(file);const m={exports:{}};cache.set(file,m.exports);const src=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;new Function('module','exports','require',src)(m,m.exports,p=>p==='server-only'?{}:p.startsWith('@/')?load(path.resolve('src',p.slice(2))+'.ts'):require(p));return m.exports;}
const {calculatePumpDetail:calc,defaultPumpDetailInput:defaults,validPumpDetailInput:valid,calculatePumpSavings:basic}=load(path.resolve('src/lib/pumpSavings.server.ts'));
const d=defaults();const r=calc(d);const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-5,`${a} != ${b}`);
for(let i=0;i<2;i++)close(r.scenarios[i].monthlySavings,basic(d.pump).scenarios[i].monthlySavings);
const changed=structuredClone(d);changed.schedules[0]={day:2,peak:3,night:4,days:20,mode:'timed'};changed.tariffs[1].active=8;
const c=calc(changed);const prices=changed.tariffs.map(t=>t.active*(1+t.tax)+t.distribution);
close(c.scenarios[0].monthlySavings,205*20*(2*prices[0]+3*prices[1]+4*prices[2]));
changed.pump.competitorPower=10;const negative=calc(changed);assert.ok(negative.savedPower<0&&negative.scenarios[0].fiveYearSavings<0&&negative.scenarios[1].yearlyCarbon<0);
changed.pump.competitorPower=45;close(calc(changed).scenarios[0].monthlySavings,0);
for (const power of [19,21,44,46]) { const v=structuredClone(d);v.pump.dewjetPower=power;assert.equal(valid(v),false); }
for (const power of [20,45]) { const v=structuredClone(d);v.pump.dewjetPower=power;assert.equal(valid(v),true); }
const zero=structuredClone(d);zero.emissionFactor=0;zero.tariffs.forEach(t=>{t.active=0;t.distribution=0});close(calc(zero).scenarios[1].fiveYearSavings,0);close(calc(zero).scenarios[0].monthlyCarbon,0);
for(const mut of [v=>v.schedules[0].day=12,v=>v.schedules[1].days=32,v=>v.schedules[0]={day:0,peak:0,night:0,days:22,mode:'timed'},v=>v.tariffs[0].tax=2,v=>v.tariffs[0].active=NaN,v=>v.tariffs.push(v.tariffs[0]),v=>v.emissionFactor=-1,v=>v.pump.water=0,v=>v.schedules[0].mode='bad',v=>v.extra=1]){const v=structuredClone(d);mut(v);assert.equal(valid(v),false);assert.throws(()=>calc(v));}
console.log('PASS: default parity; custom time-weighted tariffs; signed losses; zero tariff/carbon; invalid and extra values.');
(async()=>{const {createPumpSavingsPdf}=load(path.resolve('src/lib/pumpSavingsPdf.server.ts'));fs.mkdirSync('../artifacts/pump-savings-detail-qa',{recursive:true});for(const [name,input] of [['default',d],['negative',changed]]){if(name==='negative')input.pump.competitorPower=10;const bytes=await createPumpSavingsPdf(input,calc(input),'Örnek Şirket · Güç ve Su Tahliyesi');fs.writeFileSync(`../artifacts/pump-savings-detail-qa/${name}.pdf`,bytes);console.log('PDF',name,bytes.length);}})().catch(e=>{console.error(e);process.exitCode=1;});
