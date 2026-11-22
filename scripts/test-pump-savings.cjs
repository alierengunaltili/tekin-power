const ts=require('typescript');const fs=require('fs');const vm=require('vm');const path=require('path');const assert=require('node:assert/strict');
const cache=new Map();
function load(file){if(cache.has(file)) return cache.get(file);const output=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS}}).outputText;const module={exports:{}};cache.set(file,module.exports);vm.runInNewContext(output,{module,exports:module.exports,require:p=>p==='server-only'?{}:load(path.resolve('src',p.replace('@/', ''))+'.ts')},{filename:file});return module.exports;}
const {calculatePumpSavings:calc,validPumpSavingsInput:valid}=load(path.resolve('src/lib/pumpSavings.server.ts'));
const input={water:1200,competitorPower:150,dewjetPower:45};const r=calc(input);const close=(a,b)=>assert.ok(Math.abs(a-b)<0.00001,`${a} != ${b}`);
close(r.savingsPercent,70);close(r.scenarios[0].competitorMonthlyCost,129213.4536);close(r.scenarios[0].dewjetMonthlyCost,38764.03608);close(r.scenarios[0].monthlySavings,90449.41752);close(r.scenarios[0].fiveYearSavings,10223248.229130954);close(r.scenarios[1].monthlySavings,371339.65077161655);close(r.scenarios[0].monthlyCarbon,8.02032);close(r.scenarios[0].yearlyCarbon,96.24384);
for(const s of r.scenarios){for(const y of s.years)close(y.dewjetCost/y.competitorCost,0.3);close(s.years[4].cumulativeSavings,s.fiveYearSavings);}
const changed=calc({...input,water:600});close(changed.dewjetEnergyPer1000,75);close(changed.scenarios[0].monthlySavings,r.scenarios[0].monthlySavings);
const zero=calc({...input,dewjetPower:150});close(zero.savingsPercent,0);close(zero.scenarios[1].fiveYearSavings,0);
const loss=calc({...input,dewjetPower:200});assert.ok(loss.savingsPercent<0);assert.ok(loss.scenarios[0].monthlySavings<0);
for(const bad of [{},null,[],{...input,water:0},{...input,water:-1},{...input,water:'1200'},{...input,water:NaN},{...input,water:Infinity},{...input,dewjetPower:1000001},{...input,tariff:1}])assert.equal(valid(bad),false);
const {pumpComparisons}=load(path.resolve('src/data/pumpComparisons.ts'));
assert.deepEqual(Array.from(pumpComparisons[0].alternatives,x=>parseFloat(x.power)),[250,315,200,355,315]);assert.deepEqual(Array.from(pumpComparisons[1].alternatives,x=>parseFloat(x.power)),[55,45,45,75,92]);
console.log('PASS: workbook monthly references, approved annual correction, carbon hours, water normalization, zero/negative savings, invalid input, all ten presets.');console.log(JSON.stringify(calc({water:1200,competitorPower:250,dewjetPower:45}),null,2));
