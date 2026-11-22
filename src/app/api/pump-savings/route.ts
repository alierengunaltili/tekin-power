import { calculatePumpSavings, validPumpSavingsInput } from '@/lib/pumpSavings.server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const headers = { 'Cache-Control': 'no-store' };
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'Geçersiz istek biçimi.' }, { status: 415, headers });
  }
  if (Number(request.headers.get('content-length')) > 1024) {
    return Response.json({ error: 'İstek çok büyük.' }, { status: 413, headers });
  }
  try {
    const body = await request.text();
    if (body.length > 1024) return Response.json({ error: 'İstek çok büyük.' }, { status: 413, headers });
    const input: unknown = JSON.parse(body);
    if (!validPumpSavingsInput(input)) {
      return Response.json({ error: 'Üç alana da 0,01 ile 1.000.000 arasında pozitif bir sayı girin.' }, { status: 400, headers });
    }
    return Response.json(calculatePumpSavings(input), { headers });
  } catch {
    return Response.json({ error: 'Değerler okunamadı. Lütfen tekrar deneyin.' }, { status: 400, headers });
  }
}
