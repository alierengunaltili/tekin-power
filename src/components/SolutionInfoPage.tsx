import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GuideBody, GuideIntro } from '@/components/SolutionGuide';
import type { PageContent } from '@/data/pageContent';
import type { ReactNode } from 'react';

export default function SolutionInfoPage({ content, children, featuredContent, headerMedia, afterHeader, sectionMedia, showGuideNavigation = true }: {
  content: PageContent;
  children?: ReactNode;
  featuredContent?: ReactNode;
  headerMedia?: ReactNode;
  afterHeader?: ReactNode;
  sectionMedia?: Record<string, ReactNode>;
  showGuideNavigation?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className={`relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 pb-16 pt-44 text-white sm:px-8 sm:pb-20 ${headerMedia ? 'mobile-video-hero lg:aspect-[7/4] lg:flex lg:items-center' : ''}`}>
          {headerMedia && (
            <div className="pointer-events-none absolute inset-0">
              <div className="mobile-video-stage absolute inset-0">{headerMedia}</div>
              <div className="mobile-video-shade absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
            </div>
          )}
          <div className="mobile-video-content relative z-10 mx-auto w-full max-w-6xl">
            <nav aria-label="Sayfa yolu" className="mb-7 flex flex-wrap gap-2 text-sm text-blue-100">
              <Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
              <Link href="/hizmetlerimiz" className="hover:underline">Çözümlerimiz</Link>
            </nav>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">{content.title}</h1>
            <a href="#bilgi-talebi" className="mt-8 inline-flex rounded-xl border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10">Projeniz için bilgi alın</a>
          </div>
        </header>
        {afterHeader}
        <GuideIntro content={content} showNavigation={showGuideNavigation} />
        {featuredContent}
        <GuideBody content={content} sectionMedia={sectionMedia} />
        {children}
      </main>
      <Footer />
    </div>
  );
}
