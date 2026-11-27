export const METRICA_ID = 114723105;

type MetricaCommand = (id: number, method: string, ...args: unknown[]) => void;
type MetricaQueue = MetricaCommand & { a?: unknown[][]; l?: number };
declare global {
  interface Window { ym?: MetricaQueue }
}

let initialized = false;
let loadingScheduled = false;
let lastPage: string | null = null;

export function metricaAllowed() {
  return typeof window !== 'undefined'
    && ['tekinpower.com', 'www.tekinpower.com'].includes(window.location.hostname)
    && !/^\/(admin|api|proje-takip)(\/|$)/.test(window.location.pathname);
}

function cleanUrl(value: string) {
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) ? url.origin + url.pathname : '';
  } catch { return ''; }
}

function initialize() {
  if (!initialized) {
  if (!window.ym) {
    const queue: MetricaQueue = (...args) => { (queue.a ??= []).push(args); };
    queue.l = Date.now();
    window.ym = queue;
  }
  window.ym(METRICA_ID, 'init', {
    defer: true, ssr: true, webvisor: false, clickmap: false,
    trackLinks: false, accurateTrackBounce: true,
  });
  initialized = true;
  }
  if (loadingScheduled || document.getElementById('yandex-metrica-tag')) return;
  loadingScheduled = true;
  // Keep the third-party download out of the initial rendering work.
  const load = () => {
    loadingScheduled = false;
    if (!metricaAllowed() || document.getElementById('yandex-metrica-tag')) return;
    const script = document.createElement('script');
    script.id = 'yandex-metrica-tag';
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${METRICA_ID}`;
    document.head.appendChild(script);
  };
  const schedule = () => window.setTimeout(load, 0);
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
}

export function trackMetricaPage() {
  if (!metricaAllowed()) { lastPage = null; return; }
  initialize();
  const url = window.location.origin + window.location.pathname;
  if (url === lastPage) return;
  const referer = lastPage ?? cleanUrl(document.referrer);
  window.ym?.(METRICA_ID, 'hit', url, { referer, title: document.title });
  lastPage = url;
}

export function trackMetricaContact(name: string, channel: string, method: string) {
  if (!metricaAllowed() || !['phone_click', 'whatsapp_click', 'email_click'].includes(name)) return;
  trackMetricaPage();
  window.ym?.(METRICA_ID, 'reachGoal', name, {
    page_path: window.location.pathname, contact_channel: channel, contact_method: method,
  });
}
