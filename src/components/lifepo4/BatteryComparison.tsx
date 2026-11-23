import { batteryComparison, unisunBatterySource, unisunRackReference } from '@/data/batteryComparison';

const number = (value: number) => value.toLocaleString('tr-TR', { maximumFractionDigits: 2 });

export default function BatteryComparison() {
  return (
    <section id="teknik-karsilastirma" aria-labelledby="battery-comparison-title" className="scroll-mt-32 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold tracking-widest text-emerald-700">KAPASİTELERİ KARŞILAŞTIRIN</p>
        <h2 id="battery-comparison-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">LiFePO4 Batarya Teknik Karşılaştırması</h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700">
          Mevcut batarya seçeneklerini gerilim, kapasite ve enerji bakımından birlikte inceleyin.
          Aynı Ah değerindeki iki batarya, gerilimleri farklıysa farklı miktarda enerji depolar.
        </p>
        <p id="battery-comparison-scope" className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          Gerilim ve kapasite seçenekleri mevcut ürünlerimize aittir. Ekran ve Bluetooth sütunları,
          aynı gerilim ve kapasitedeki Unisun ekranlı seri ürünlerinin resmî bilgilerini gösterir.
          Marin sürümün kasa, bağlantı ve koruma özellikleri ayrıca değerlendirilir.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <p className="border-b border-slate-200 bg-emerald-50 px-5 py-3 text-sm text-emerald-900 lg:hidden">Tüm sütunları görmek için tabloyu yana kaydırabilirsiniz.</p>
          <div role="region" aria-label="Batarya karşılaştırma tablosu, yatay kaydırılabilir" tabIndex={0} className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
            <table aria-describedby="battery-comparison-scope battery-energy-note" className="w-full min-w-[880px] border-collapse text-left text-sm">
              <caption className="sr-only">Dokuz LiFePO4 gerilim ve kapasite seçeneği; Unisun ekranlı seri karşılıkları</caption>
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Gerilim', 'Kapasite', 'Hesaplanan enerji', 'Ekran', 'Bluetooth', 'Ürün kaynağı'].map(label => <th key={label} scope="col" className="px-5 py-5 font-semibold">{label}</th>)}
                </tr>
              </thead>
              <tbody>
                {batteryComparison.map(product => (
                  <tr key={product.slug} className="border-b border-slate-100 last:border-0 even:bg-slate-50/70 hover:bg-emerald-50/60">
                    <th scope="row" className="whitespace-nowrap px-5 py-5 font-semibold text-slate-900">{number(product.voltage)} V</th>
                    <td className="whitespace-nowrap px-5 py-5 text-slate-700">{product.capacity} Ah</td>
                    <td className="whitespace-nowrap px-5 py-5 text-lg font-bold tabular-nums text-emerald-800">{number(product.voltage * product.capacity / 1000)} kWh</td>
                    <td className="px-5 py-5 text-slate-700">Var</td>
                    <td className="px-5 py-5 text-slate-700">{product.bluetooth ? 'Var' : 'Belirtilmemiş'}</td>
                    <td className="px-5 py-5"><a className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700" href={`${unisunBatterySource}${product.slug}/`} target="_blank" rel="noopener noreferrer" aria-label={`${number(product.voltage)} V ${product.capacity} Ah Unisun ürün bilgisi (yeni sekme)`}>Unisun ürün bilgisi</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p id="battery-energy-note" className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">
          Enerji = listelenen gerilim × kapasite / 1.000. Bu hesap kullanılabilir enerji veya çalışma süresi garantisi değildir;
          kullanılabilir enerji, BMS sınırlarına ve çalışma koşullarına bağlıdır. 36 V değeri ürünün ilan edilen gerilimidir.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">51,2 V 100 Ah — Unisun Rack Tipi</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Aşağıdaki değerler Unisun kataloğundaki rack tipi ürüne aittir; yukarıdaki farklı kasa ve marin görsellerinin teknik özellikleri olarak kullanılmaz.</p>
            <dl className="mt-5 divide-y divide-slate-100 text-base">
              {[
                ['Ağırlık', `${number(unisunRackReference.weightKg)} kg`],
                ['Şarj gerilimi', `${number(unisunRackReference.chargeVoltage)} V`],
                ['Yüzer gerilim', `${number(unisunRackReference.floatVoltage)} V`],
              ].map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-3"><dt className="text-slate-600">{label}</dt><dd className="font-semibold text-slate-900">{value}</dd></div>)}
            </dl>
            <a href={unisunRackReference.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4">Rack modeli teknik bilgileri (yeni sekme)</a>
          </div>
          <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
            <h3 className="text-xl font-bold">Sisteminize uygun bataryayı birlikte seçelim</h3>
            <p className="mt-4 text-base leading-7 text-slate-200">Ağırlık, kasa ölçüsü, sürekli şarj/deşarj akımı, BMS ve marin koruma sınıfını seçilecek ürünün teknik belgesi üzerinden birlikte netleştirelim.</p>
            <p className="mt-3 text-base leading-7 text-slate-200">Mevcut inverter veya şarj cihazınızı, kullanım alanınızı ve hedef çalışma sürenizi paylaşmanız yeterli.</p>
            <a href="#bilgi-talebi" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-50">Batarya seçimi için bilgi alın</a>
          </div>
        </div>
      </div>
    </section>
  );
}
