import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument, PDFName, PDFString, rgb, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import type { PumpDetailInput, PumpSavingsResult } from '@/types/pumpSavings';
import { pumpInflation } from '@/data/pumpInflation';

const nf = new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 });
const f = (n: number) => nf.format(n);
const precise = (n: number) => new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 6 }).format(n);
const navy = rgb(.043,.129,.227), cyan = rgb(0,.42,.57), gray = rgb(.31,.37,.44), pale = rgb(.94,.97,.99);

export async function createPumpSavingsPdf(input: PumpDetailInput, result: PumpSavingsResult, company: string) {
  const doc = await PDFDocument.create(); doc.registerFontkit(fontkit);
  const font = await doc.embedFont(await readFile(path.join(process.cwd(), 'assets/fonts/NotoSans-Regular.ttf')), { subset:true });
  const reportAsset = (name: string) => readFile(path.join(process.cwd(), 'assets/reports', name));
  const [cover, product, logo] = await Promise.all([
    reportAsset('pumps-cover.jpg').then(bytes => doc.embedJpg(bytes)),
    reportAsset(`pump-${input.pump.dewjetPower}.jpg`).then(bytes => doc.embedJpg(bytes)),
    reportAsset('tekin-power-logo.png').then(bytes => doc.embedPng(bytes)),
  ]);
  const model = `DWE-APUMP-${input.pump.dewjetPower}`;
  const weight = input.pump.dewjetPower === 20 ? 25 : 55;
  const supported = new Set(font.getCharacterSet());
  const clean = (s: string) => Array.from(s.normalize('NFC')).filter(c => !/[\r\n\t\x00-\x1f]/.test(c)).map(c => supported.has(c.codePointAt(0)!) ? c : '?').join('');
  const date = new Intl.DateTimeFormat('tr-TR', {dateStyle:'long',timeStyle:'short',timeZone:'Europe/Istanbul'}).format(new Date());
  doc.setTitle('Tekin Power - DewJet Enerji Tasarruf Raporu'); doc.setAuthor('Tekin Power'); doc.setSubject('Müşteri değerleriyle pompa enerji maliyeti karşılaştırması');
  function text(page: PDFPage, value: string, x: number, top: number, size=10, color=navy, width=510) {
    const safe = clean(value); const actual = Math.min(size, width / Math.max(font.widthOfTextAtSize(safe,1),1));
    page.drawText(safe,{x,y:842-top-actual,font,size:actual,color});
  }
  function paragraph(page: PDFPage, value: string, top: number, size=10, width=510) {
    let line='', y=top;
    for (const word of clean(value).split(' ')) {
      const next = line?`${line} ${word}`:word;
      if (font.widthOfTextAtSize(next,size)>width && line) { text(page,line,42,y,size,gray,width); y+=17; line=word; } else line=next;
    }
    if (line) text(page,line,42,y,size,gray,width);
    return y+22;
  }
  function page(title: string, number: number) {
    const p=doc.addPage([595,842]); p.drawRectangle({x:0,y:720,width:595,height:122,color:navy});
    const logoSize=logo.scaleToFit(90,44); p.drawImage(logo,{x:42,y:842-17-logoSize.height,...logoSize});
    text(p,'DEWJET / ENERJİ VERİMLİLİĞİ',149,28,9,rgb(.44,.87,.96),225);
    text(p,title,42,70,22,rgb(1,1,1),345); text(p,date+' · Türkiye saati',42,102,8,rgb(.8,.85,.9));
    const productSize=product.scaleToFit(152,56); p.drawImage(product,{x:401,y:842-23-productSize.height,...productSize});
    text(p,model,401,88,9,rgb(.44,.87,.96),152);
    p.drawRectangle({x:0,y:717,width:595,height:3,color:cyan});
    text(p,company.trim()||'Pompa enerji maliyeti karşılaştırması',42,143,13,navy);
    p.drawLine({start:{x:42,y:47},end:{x:553,y:47},color:rgb(.8,.85,.9),thickness:.6});
    text(p,'tekinpower.com · Müşteri girdilerine dayalı hesaplama raporu',42,807,8,gray); text(p,`${number} / 4`,510,807,8,gray,43);
    return p;
  }
  function table(p: PDFPage, headers: string[], rows: string[][], widths: number[], top: number) {
    let y=top;
    [headers,...rows].forEach((row,i) => {
      p.drawRectangle({x:42,y:842-y-35,width:511,height:35,color:i===0?navy:i%2?pale:rgb(1,1,1)});
      let x=50; row.forEach((v,j) => {text(p,v,x,y+11,i===0?8:9,i===0?rgb(1,1,1):navy,widths[j]-15);x+=widths[j];});y+=35;
    }); return y;
  }
  const benefit=result.savedPower>=0;
  const p1=page('Enerji Tasarruf Raporu',1);
  p1.drawImage(cover,{x:42,y:842-175-170,width:511,height:170});
  p1.drawRectangle({x:42,y:842-345-29,width:511,height:29,color:navy});
  text(p1,`SEÇİLEN MODEL  /  ${model}`,54,354,10,rgb(1,1,1),320);
  text(p1,`${input.pump.dewjetPower} kW  ·  ${weight} kg`,431,354,10,rgb(.44,.87,.96),110);
  text(p1,'YÖNETİCİ ÖZETİ',42,391,9,cyan);
  text(p1,`%${f(Math.abs(result.savingsPercent))}`,42,408,36,navy,150);
  text(p1,`DewJet ile ${benefit?'daha az':'daha fazla'}`,207,415,15,navy,345);
  text(p1,'elektrik tüketimi',207,438,15,cyan,345);
  paragraph(p1,`Saatlik ${f(input.pump.water)} m³ su tahliyesi varsayımında DewJet ${f(input.pump.dewjetPower)} kW, karşılaştırılan pompa ${f(input.pump.competitorPower)} kW güç kullanır.`,469,9);
  result.scenarios.forEach((s,i) => {
    const x=42+i*263; p1.drawRectangle({x,y:842-510-216,width:248,height:216,color:pale});
    p1.drawRectangle({x,y:842-510-3,width:248,height:3,color:cyan});
    text(p1,s.label,x+15,524,13,navy,218); text(p1,`${f(s.hoursPerMonth / s.daysPerMonth)} saat × ${f(s.daysPerMonth)} gün = ${f(s.hoursPerMonth)} saat/ay`,x+15,548,9,gray,218);
    text(p1,`Aylık ${benefit?'tasarruf':'ek maliyet'}`,x+15,573,9,cyan,218); text(p1,`${f(Math.abs(s.monthlySavings))} TL`,x+15,588,18,navy,218);
    text(p1,`1 yıllık ${benefit?'tasarruf':'ek maliyet'}`,x+15,622,9,cyan,218); text(p1,`${f(Math.abs(s.years[0].savings))} TL`,x+15,637,18,navy,218);
    text(p1,`5 yıllık ${benefit?'tasarruf':'ek maliyet'}`,x+15,671,9,cyan,218); text(p1,`${f(Math.abs(s.fiveYearSavings))} TL`,x+15,686,18,navy,218);
  });
  let y=740;
  if (!benefit) y=paragraph(p1,'Girilen değerlerde DewJet daha fazla enerji tüketir. Negatif farklar ek maliyeti gösterir.',y,8);
  paragraph(p1,'KDV hariçtir. 1 yıllık tutar, ilk senaryo yılının enflasyon artışını içerir. Girdiler 3., TCMB kaynaklı varsayımlar 4. sayfadadır.',y,8);

  const p2=page('Maliyet ve Karbon Karşılaştırması',2);
  result.scenarios.forEach((s,i) => {
    const top=185+i*287;
    text(p2,`${s.label} · ${f(s.hoursPerMonth / s.daysPerMonth)} saat × ${f(s.daysPerMonth)} gün = ${f(s.hoursPerMonth)} saat/ay`,42,top,14,cyan);
    text(p2,`Aylık gider: Diğer pompa ${f(s.competitorMonthlyCost)} TL  |  DewJet ${f(s.dewjetMonthlyCost)} TL`,42,top+27,10);
    text(p2,`Aylık enerji: Diğer pompa ${f(s.competitorEnergy)} kWh  |  DewJet ${f(s.dewjetEnergy)} kWh`,42,top+45,9);
    table(p2,['Yıl','Diğer pompa (TL)','DewJet (TL)','Yıllık fark (TL)','Birikimli fark (TL)'],s.years.map(y=>[String(y.year),f(y.competitorCost),f(y.dewjetCost),f(y.savings),f(y.cumulativeSavings)]),[45,116,116,117,117],top+65);
  });
  const p3=page('Girdiler ve Hesaplama Varsayımları',3);
  text(p3,`Su: ${f(input.pump.water)} m³/saat  ·  DewJet: ${f(input.pump.dewjetPower)} kW  ·  Diğer pompa: ${f(input.pump.competitorPower)} kW`,42,180,10);
  text(p3,'ELEKTRİK TARİFELERİ · KDV HARİÇ',42,211,10,cyan);
  table(p3,['Tarife','Aktif (TL/kWh)','Dağıtım (TL/kWh)','BTV (%)'],input.tariffs.map((t,i)=>[['Gündüz','Puant','Gece','Tek zamanlı'][i],precise(t.active),precise(t.distribution),precise(t.tax*100)]),[128,128,143,112],234);
  text(p3,'ÇALIŞMA PLANLARI',42,431,10,cyan);
  table(p3,['Plan / tarife','Gündüz sa.','Puant sa.','Gece sa.','Gün/ay'],input.schedules.map((s,i)=>[`${i+1} / ${s.mode==='single'?'Tek zamanlı':'Çok zamanlı'}`,f(s.day),f(s.peak),f(s.night),precise(s.days)]),[171,85,85,85,85],454);
  text(p3,`Karbon katsayısı: ${precise(input.emissionFactor)} ton CO₂e/MWh`,42,581,10,cyan);
  result.scenarios.forEach((s,i)=>text(p3,`Plan ${i+1} · ${benefit?'Önlenen':'Ek'} emisyon: yılda ${f(Math.abs(s.yearlyCarbon))}, 5 yılda ${f(Math.abs(s.fiveYearCarbon))} ton CO₂e`,42,605+i*22,10));
  y=paragraph(p3,'Güçler ve çalışma süreleri sabitken debinin değiştirilmesi aylık maliyeti değiştirmez. Tek zamanlı planda tek zamanlı bedel; çok zamanlı planda girilen zaman dilimleri kullanılır. Karbon farkı her planın çalışma süresini içerir.',664,9);
  paragraph(p3,'Aynı debi ve basma yüksekliği esas alınır; çalışma noktası pompa eğrileriyle doğrulanmalıdır. Satın alma, bakım ve finansman giderleri dahil değildir.',y,8);
  const p4=page('Enflasyon ve Maliyet Projeksiyonu',4);
  text(p4,'2026–2030 · BEŞ YILLIK SENARYO',42,182,11,cyan);
  y=table(p4,['Dönem','Oran','Dayanak'],pumpInflation.periods.map(p=>[String(p.year),`%${f(p.rate*100)}`,p.label]),[70,65,376],212);
  y=paragraph(p4,'Kaynak: '+pumpInflation.source+' · '+pumpInflation.date+'. Başkan Fatih Karahan’ın rapor bilgilendirme konuşması.',y+23,10);
  text(p4,'TCMB resmî açıklamasını aç',42,y,10,cyan);
  const link=doc.context.register(doc.context.obj({ Type:'Annot', Subtype:'Link', Rect:[42,842-y-16,270,842-y+2], Border:[0,0,0], A:{Type:'Action',S:'URI',URI:PDFString.of(pumpInflation.url)} }));
  p4.node.set(PDFName.of('Annots'),doc.context.obj([link]));
  y=paragraph(p4,'2030 için %5, TCMB’nin orta vadeli hedefinin bu senaryo yılına uygulanmasıdır; 2030’a özel açıklanmış kesin bir tahmin olarak sunulmaz.',y+35,10);
  y=paragraph(p4,'Bu enflasyon oranları elektrik tarifesi tahmini değildir. Elektrik maliyetleri, girilen tarife üzerinden enflasyona bağlı bir senaryo olarak hesaplanır.',y+8,10);
  y=paragraph(p4,'Girilen aylık gider baz alınır. 2026 oranı ilk 12 aylık tutara uygulanır; sonraki yılların oranları birikimli olarak iki pompaya eşit uygulanır. Yıllar senaryo dönemleridir; gerçekleşmiş gider değildir.',y+8,10);
  paragraph(p4,'Enflasyon, parasal maliyetleri etkiler. Güç ve çalışma süresi sabitken enerji tüketimi ve karbon farkı enflasyonla artırılmaz.',y+8,10);
  return doc.save();
}
