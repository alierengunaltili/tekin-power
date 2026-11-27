import { trackMetricaContact } from './yandexMetrica';

type ContactChannel = 'phone' | 'whatsapp' | 'email';
type ContactAction = 'call' | 'chat' | 'compose' | 'open_options' | 'copy_address';

type ContactInteraction = {
  name: 'phone_click' | 'whatsapp_click' | 'email_click' | 'email_options_open' | 'email_address_copy';
  channel: ContactChannel;
  action: ContactAction;
  method: 'tel' | 'whatsapp' | 'mailto' | 'gmail' | 'dialog' | 'clipboard';
};

// Send only a fixed classification, never phone numbers, addresses or message text.
export function classifyContactLink(href: string, baseUrl: string): ContactInteraction | null {
  let url: URL;
  try { url = new URL(href, baseUrl); } catch { return null; }
  if (url.protocol === 'tel:') return { name: 'phone_click', channel: 'phone', action: 'call', method: 'tel' };
  if (url.protocol === 'mailto:') return { name: 'email_click', channel: 'email', action: 'compose', method: 'mailto' };
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
  if (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) {
    return { name: 'whatsapp_click', channel: 'whatsapp', action: 'chat', method: 'whatsapp' };
  }
  if (url.hostname === 'mail.google.com' && url.searchParams.get('view') === 'cm' && url.searchParams.has('to')) {
    return { name: 'email_click', channel: 'email', action: 'compose', method: 'gmail' };
  }
  return null;
}

export function recordContactInteraction(interaction: ContactInteraction) {
  if (typeof window === 'undefined' || /^\/admin(?:\/|$)/.test(window.location.pathname)) return;
  try {
    trackMetricaContact(interaction.name, interaction.channel, interaction.method);
  } catch {
    // A blocked Metrica tag must not affect Google Analytics or contact actions.
  }
  const params = {
    page_path: window.location.pathname,
    contact_channel: interaction.channel,
    contact_action: interaction.action,
    contact_method: interaction.method,
    transport_type: 'beacon',
  };
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', interaction.name, params);
    } else {
      // Preserve clicks made before the deferred Google script is ready.
      window.dataLayer = window.dataLayer || [];
      const queue = function (...args: unknown[]) {
        // gtag consumes Arguments objects (not ordinary dataLayer event objects).
        void args;
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      queue('event', interaction.name, params);
    }
  } catch {
    // Analytics must never prevent opening a contact link.
  }
}

export function recordEmailOptionsOpen() {
  recordContactInteraction({ name: 'email_options_open', channel: 'email', action: 'open_options', method: 'dialog' });
}

export function recordEmailAddressCopy() {
  recordContactInteraction({ name: 'email_address_copy', channel: 'email', action: 'copy_address', method: 'clipboard' });
}

export function installContactTracking() {
  function onContactClick(event: MouseEvent) {
    if (event.type === 'auxclick' ? event.button !== 1 : event.button !== 0) return;
    const target = event.target instanceof Element ? event.target : event.target instanceof Node ? event.target.parentElement : null;
    const link = target?.closest('a[href]');
    if (!(link instanceof HTMLAnchorElement) || link.hasAttribute('download')) return;
    // The footer trigger opens options rather than the mail app on a normal click.
    if (link.hasAttribute('data-email-options') && event.type === 'click' && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) return;
    const interaction = classifyContactLink(link.href, window.location.href);
    if (interaction) recordContactInteraction(interaction);
  }

  document.addEventListener('click', onContactClick, true);
  document.addEventListener('auxclick', onContactClick, true);
  return () => {
    document.removeEventListener('click', onContactClick, true);
    document.removeEventListener('auxclick', onContactClick, true);
  };
}
