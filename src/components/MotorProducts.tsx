'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { motorModels } from '@/data/motorModels';

export default function MotorProducts() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % motorModels.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + motorModels.length) % motorModels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = motorModels.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="motor-modelleri" aria-labelledby="motor-modelleri-baslik" className="scroll-mt-36 bg-white px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-sky-700">DEWJET · ELEKTRİKLİ TAHRİK</p>
        <h2 id="motor-modelleri-baslik" className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Motorunuzu seçin</h2>
        <p className="mt-3 leading-7 text-slate-600">Görselleri ve teknik özellikleri görmek için bir model seçin.</p>
        <div role="tablist" aria-label="Motor modelleri" className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {motorModels.map((model, index) => (
            <button key={model.id} ref={el => { tabs.current[index] = el; }} type="button" role="tab"
              id={`tab-${model.id}`} aria-controls={`panel-${model.id}`} aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => navigate(event, index)}
              className={`min-w-0 rounded-2xl border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 sm:p-5 ${selected === index ? 'border-blue-950 bg-blue-950 text-white shadow-md' : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-sky-300 hover:bg-sky-50'}`}>
              <span className="block text-base font-bold sm:text-lg">{model.name}</span>
              <span className={`mt-1 block text-sm font-semibold ${selected === index ? 'text-cyan-200' : 'text-sky-700'}`}>{model.power}</span>
              <span className={`mt-2 block text-xs leading-5 ${selected === index ? 'text-blue-100' : 'text-slate-600'}`}>{model.type}</span>
            </button>
          ))}
        </div>
        {motorModels.map((model, index) => (
          <div key={model.id} id={`panel-${model.id}`} role="tabpanel" aria-labelledby={`tab-${model.id}`} hidden={selected !== index} tabIndex={0}
            className="mt-6 overflow-hidden rounded-3xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600">
            <article id={model.id} className="grid scroll-mt-36 lg:grid-cols-[1.05fr_1fr]">
              <figure className="flex min-w-0 flex-col bg-white p-5 sm:p-8">
                <span className="w-fit rounded-full bg-sky-50 px-4 py-2 text-xs font-bold tracking-wide text-sky-900">{model.type}</span>
                <div className="relative my-5 h-72 w-full sm:h-[400px]">
                  <Image src={model.image} alt={`${model.name} — ${model.type} elektrikli tekne motoru`} fill sizes="(min-width: 1024px) 550px, 90vw" className="object-contain" />
                </div>
                <figcaption className="mt-auto text-center text-sm text-slate-500">{model.name}</figcaption>
              </figure>
              <div className="flex flex-col bg-blue-950 p-6 text-white sm:p-9">
                <p className="text-sm font-semibold text-cyan-200">{model.type}</p>
                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{model.name}</h3>
                <p className="mt-3 text-xl font-semibold text-cyan-200">{model.power}</p>
                <p className="mt-5 leading-7 text-blue-50">{model.description}</p>
                <dl className="my-7 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/20 pt-6">
                  {model.specs.map(spec => <div key={spec.label}><dt className="text-xs leading-5 text-blue-100">{spec.label}</dt><dd className="mt-1 text-lg font-bold">{spec.value}</dd></div>)}
                </dl>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a href={`https://wa.me/905323276293?text=${encodeURIComponent(`Merhaba, ${model.name} (${model.power}) elektrikli tekne motoru için bilgi ve teklif almak istiyorum.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${model.name} için WhatsApp üzerinden bilgi alın (yeni sekmede açılır)`} className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200">Bu motor için bilgi alın <ArrowUpRight size={17} aria-hidden="true" /></a>
                  {model.brochure && <a href={model.brochure} download className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"><Download size={17} aria-hidden="true" />Broşürü indir (PDF)</a>}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
