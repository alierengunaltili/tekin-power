import Link from 'next/link';
import TrackedContactActions from '@/components/TrackedContactActions';
import type { PageContent } from '@/data/pageContent';
import type { ReactNode } from 'react';

export function GuideIntro({ content, showNavigation = true }: { content: PageContent; showNavigation?: boolean }) {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-4xl text-lg leading-8 text-slate-700">{content.intro}</p>
        {showNavigation && <nav aria-label="Bu sayfada" className="mt-8 flex flex-wrap gap-3">
          {content.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900 transition-colors hover:bg-blue-100">
              {section.title}
            </a>
          ))}
          <a href="#sik-sorulan-sorular" className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100">Sık sorulan sorular</a>
        </nav>}
      </div>
    </section>
  );
}

export function GuideBody({ content, sectionMedia = {} }: { content: PageContent; sectionMedia?: Record<string, ReactNode> }) {
  const contactClass = 'mt-8 flex flex-wrap gap-3';
  const contactLinks = (
    <>
      <a href="tel:+905323276293" className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">Bizi arayın</a>
    </>
  );
  return (
    <div className="bg-slate-50 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className={`scroll-mt-40 border-b border-slate-200 pb-12 last:border-0 ${sectionMedia[section.id] ? 'grid items-start gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]' : ''}`}>
              <div className="min-w-0">
              <h2 className="max-w-4xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">{section.title}</h2>
              <div className="mt-5 max-w-4xl space-y-4 text-base leading-8 text-slate-700 sm:text-lg">
                {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
              </div>
              {section.points && <ul className="mt-6 flex flex-wrap gap-3">
                {section.points.map((point) => <li key={point} className="rounded-xl bg-blue-900 px-6 py-4 text-xl font-semibold text-white">{point}</li>)}
              </ul>}
              </div>
              {sectionMedia[section.id]}
            </section>
          ))}
        </div>
        <section id="sik-sorulan-sorular" className="scroll-mt-40 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">Sık sorulan sorular</h2>
          <div className="space-y-3">
            {content.questions.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-5 sm:px-7">
                <summary className="cursor-pointer text-base font-semibold leading-7 text-slate-900 sm:text-lg">{item.question}</summary>
                <p className="mt-4 max-w-4xl leading-8 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="bilgi-talebi" className="mt-12 scroll-mt-40 rounded-3xl bg-blue-950 p-6 text-white sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">{content.requestTitle}</h2>
          <p className="mt-4 text-blue-100">Görüşme öncesinde aşağıdaki bilgileri hazırlayabilirsiniz:</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-blue-100">
            {content.requestItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {content.path === '/dewjet-elektrikli-motor' || content.path === '/hizmetlerimiz/marin'
            ? <TrackedContactActions page={content.path} className={contactClass}>{contactLinks}</TrackedContactActions>
            : <div className={contactClass}>{contactLinks}</div>}
        </section>
        <nav aria-label="İlgili çözümler" className="mt-12">
          <h2 className="mb-5 text-xl font-bold text-slate-900">İlgili çözümler</h2>
          <div className="flex flex-wrap gap-3">
            {content.related.map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-medium text-blue-800 hover:bg-blue-50">{item.label}</Link>)}
          </div>
        </nav>
      </div>
    </div>
  );
}
