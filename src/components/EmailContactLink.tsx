'use client';

import { useId, useRef, useState } from 'react';
import { Mail, X } from 'lucide-react';
import { recordEmailAddressCopy, recordEmailOptionsOpen } from '@/lib/contactAnalytics';

const address = 'info@tekinpower.com';
const subject = 'Tekin Power İletişim';
const mailto = `mailto:${address}?subject=${encodeURIComponent(subject)}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${encodeURIComponent(subject)}`;

export default function EmailContactLink() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [copyStatus, setCopyStatus] = useState('');
  const actionClass = 'block w-full rounded-xl border border-slate-300 px-4 py-3 text-center font-medium text-slate-900 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      recordEmailAddressCopy();
      setCopyStatus('E-posta adresi kopyalandı.');
    } catch {
      setCopyStatus('Kopyalanamadı. Yukarıdaki e-posta adresini seçerek kopyalayabilirsiniz.');
    }
  }

  return (
    <>
      <a
        ref={triggerRef}
        href={mailto}
        data-email-options
        aria-haspopup="dialog"
        className="text-blue-200 underline decoration-blue-300/50 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={(event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          setCopyStatus('');
          dialogRef.current?.showModal();
          recordEmailOptionsOpen();
        }}
      >
        {address}
      </a>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl backdrop:bg-slate-950/60"
        onClose={() => triggerRef.current?.focus({ preventScroll: true })}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault(); last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first?.focus();
          }
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id={titleId} className="flex items-center gap-2 text-xl font-bold"><Mail aria-hidden="true" className="h-5 w-5 text-blue-600" />E-posta gönderin</h2>
          <button type="button" aria-label="E-posta penceresini kapat" onClick={() => dialogRef.current?.close()} className="rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600"><X aria-hidden="true" className="h-5 w-5" /></button>
        </div>
        <p className="mb-2 select-all font-semibold text-blue-700">{address}</p>
        <p id={descriptionId} className="mb-5 text-sm leading-relaxed text-slate-600">Mesajınızı yazmak için kullandığınız e-posta hizmetini seçin. Alıcı adresi hazır olarak açılır.</p>
        <div className="space-y-3">
          <a href={gmail} target="_blank" rel="noopener noreferrer" className={actionClass}>Gmail’de yaz <span className="text-xs font-normal">(yeni sekme)</span></a>
          <a href={mailto} className={actionClass}>E-posta uygulamasında aç</a>
          <button type="button" onClick={copyAddress} className={actionClass}>Adresi kopyala</button>
        </div>
        <p role="status" className="mt-3 text-sm text-slate-600">{copyStatus}</p>
      </dialog>
    </>
  );
}
