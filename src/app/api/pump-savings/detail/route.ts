import { calculatePumpDetail, validPumpDetailInput } from '@/lib/pumpSavings.server';
import { createPumpSavingsPdf } from '@/lib/pumpSavingsPdf.server';

export const runtime = 'nodejs';
const headers = { 'Cache-Control':'private, no-store', 'X-Content-Type-Options':'nosniff' };
export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({error:'Geçersiz istek biçimi.'},{status:415,headers});
  if (Number(request.headers.get('content-length'))>8192) return Response.json({error:'İstek çok büyük.'},{status:413,headers});
  let body;
  try { const raw=await request.text(); if(raw.length>8192) return Response.json({error:'İstek çok büyük.'},{status:413,headers}); body=JSON.parse(raw); }
  catch { return Response.json({error:'Değerler okunamadı.'},{status:400,headers}); }
  if (!body || typeof body!=='object' || Object.keys(body).sort().join(',')!=='company,format,input' ||
      !validPumpDetailInput(body.input) || typeof body.company!=='string' || body.company.length>80 || !['json','pdf'].includes(body.format)) {
    return Response.json({error:'Güç ve su değerleri pozitif olmalıdır. Günlük saat sınırları: gündüz 11, puant 5, gece 8; ayda en fazla 31 gün. En az bir çalışma saati girin. Tarifeleri ve firma adını kontrol edin.'},{status:400,headers});
  }
  const result=calculatePumpDetail(body.input);
  if(body.format==='json') return Response.json(result,{headers});
  try {
    const pdf=await createPumpSavingsPdf(body.input,result,body.company);
    return new Response(new Uint8Array(pdf), {headers:{...headers,'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Tekin-Power-Enerji-Tasarruf-Raporu.pdf"'}});
  } catch {
    return Response.json({error:'PDF oluşturulamadı. Lütfen tekrar deneyin.'},{status:500,headers});
  }
}
