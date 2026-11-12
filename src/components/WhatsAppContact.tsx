const message = 'Merhaba, Tekin Power ürün ve çözümleri hakkında bilgi almak istiyorum.';
const whatsappUrl = `https://wa.me/905323276293?text=${encodeURIComponent(message)}`;

export default function WhatsAppContact() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin: +90 532 327 62 93 (yeni sekmede açılır)"
      title="WhatsApp ile bize yazın"
      className="fixed z-50 inline-flex min-h-14 items-center gap-2.5 rounded-full border border-white/30 bg-[#087f47] px-4 py-3 font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.24)] transition-colors hover:bg-[#06653a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 sm:gap-3 sm:px-5"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))', right: 'calc(1rem + env(safe-area-inset-right, 0px))' }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true" className="shrink-0">
        <path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.47 0 .11 5.35.11 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.94 11.94 0 005.8 1.48h.01C18.64 23.84 24 18.49 24 11.91c0-3.19-1.24-6.18-3.48-8.43zM12.06 21.83a9.9 9.9 0 01-5.04-1.38l-.36-.22-3.71.97.99-3.62-.24-.37a9.87 9.87 0 01-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92a9.84 9.84 0 017.02 2.91 9.85 9.85 0 012.9 7.02c0 5.47-4.45 9.89-9.97 9.89zm5.45-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
      <span className="text-sm sm:text-base">WhatsApp</span>
    </a>
  );
}
