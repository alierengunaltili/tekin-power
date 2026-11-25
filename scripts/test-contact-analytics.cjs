const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

// Run the real tracking helper with a small DOM/event harness; never send test traffic to GA.
const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib/contactAnalytics.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
}).outputText;

function setup() {
  const calls = [];
  const listeners = new Map();
  class Node { constructor(parentElement = null) { this.parentElement = parentElement; } }
  class Element extends Node { closest() { return this instanceof Anchor ? this : this.parentElement?.closest() ?? null; } }
  class Anchor extends Element {
    constructor(href, attributes = []) { super(); this.href = href; this.attributes = attributes; }
    hasAttribute(name) { return this.attributes.includes(name); }
  }
  const window = { location: { href: 'https://tekinpower.com/', pathname: '/' }, gtag: (...args) => calls.push(args) };
  const document = {
    addEventListener(type, handler, capture) { assert.equal(capture, true); if (!listeners.has(type)) listeners.set(type, new Set()); listeners.get(type).add(handler); },
    removeEventListener(type, handler, capture) { assert.equal(capture, true); listeners.get(type)?.delete(handler); },
  };
  const module = { exports: {} };
  new Function('exports', 'module', 'window', 'document', 'Node', 'Element', 'HTMLAnchorElement', code)(module.exports, module, window, document, Node, Element, Anchor);
  const api = module.exports;
  const emit = (target, overrides = {}) => {
    const event = { target, type: 'click', button: 0, ctrlKey: false, metaKey: false, shiftKey: false, altKey: false, ...overrides };
    for (const listener of listeners.get(event.type) || []) listener(event);
  };
  api.installContactTracking();
  return { api, calls, window, listeners, emit, Anchor, Element, Node };
}

test('phone, email, Gmail and WhatsApp are separate, one event per activation', () => {
  const h = setup();
  const links = [
    ['tel:+905323276293', 'phone_click'],
    ['mailto:info@tekinpower.com?subject=Private', 'email_click'],
    ['https://mail.google.com/mail/?view=cm&to=info@tekinpower.com', 'email_click'],
    ['https://wa.me/905323276293?text=Private', 'whatsapp_click'],
    ['https://api.whatsapp.com/send?phone=905323276293', 'whatsapp_click'],
    ['https://web.whatsapp.com/send?phone=905323276293', 'whatsapp_click'],
  ];
  for (const [url, name] of links) { h.emit(new h.Element(new h.Anchor(url))); assert.equal(h.calls.at(-1)[1], name); }
  assert.equal(h.calls.length, links.length);
  assert.ok(h.calls.every(call => call[0] === 'event'));
});

test('all public page paths use the current page after client navigation', () => {
  const h = setup();
  const paths = ['/', '/hakkimizda', '/hizmetlerimiz', '/lifepo4', '/gunespaneli', '/dewjet-pompa', '/dewjet-pompa/tasarruf-hesaplama', '/dewjet-elektrikli-motor', '/hizmetlerimiz/enerji-depolama', '/hizmetlerimiz/marin', '/tekne-hmi', '/hizmetlerimiz/deniz-gol-dibi-arama-tarama', '/hizmetlerimiz/askeri-sistem-uygulamalari', '/arsimet-burgusu'];
  for (const pathname of paths) {
    h.window.location = { pathname, href: `https://tekinpower.com${pathname}?private=value#contact` };
    for (const url of ['tel:+905323276293', 'mailto:info@tekinpower.com', 'https://wa.me/905323276293']) {
      h.emit(new h.Anchor(url));
      assert.equal(h.calls.at(-1)[2].page_path, pathname);
    }
  }
  assert.equal(h.calls.length, 42);
  assert.doesNotMatch(JSON.stringify(h.calls), /905323276293|info@|private=value/);
});

test('opening email options is separate from selecting a mail provider', () => {
  const h = setup();
  const trigger = new h.Anchor('mailto:info@tekinpower.com', ['data-email-options']);
  h.emit(trigger);
  h.api.recordEmailOptionsOpen();
  assert.deepEqual(h.calls.map(x => x[1]), ['email_options_open']);
  h.emit(new h.Anchor('mailto:info@tekinpower.com'));
  assert.deepEqual(h.calls.map(x => x[1]), ['email_options_open', 'email_click']);
  h.api.recordEmailAddressCopy();
  assert.equal(h.calls.at(-1)[1], 'email_address_copy');
});

test('modified and middle clicks track direct navigation; right click does not', () => {
  const h = setup();
  const trigger = new h.Anchor('mailto:info@tekinpower.com', ['data-email-options']);
  h.emit(trigger, { ctrlKey: true });
  h.emit(trigger, { type: 'auxclick', button: 1 });
  h.emit(trigger, { type: 'auxclick', button: 2 });
  assert.deepEqual(h.calls.map(x => x[1]), ['email_click', 'email_click']);
});

test('keyboard activation and text-node targets are counted', () => {
  const h = setup();
  h.emit(new h.Node(new h.Anchor('tel:+905323276293')), { detail: 0 });
  assert.equal(h.calls.length, 1);
  assert.equal(h.calls[0][1], 'phone_click');
});

test('unrelated links, spoofed hosts, downloads and non-links are ignored', () => {
  const h = setup();
  for (const url of ['/hakkimizda', 'https://wa.me.fake.example/123', 'https://example.com/?to=info@tekinpower.com', 'javascript:alert(1)', 'https://mail.google.com/mail/']) h.emit(new h.Anchor(url));
  h.emit(new h.Anchor('mailto:info@tekinpower.com', ['download']));
  h.emit(new h.Element());
  h.emit(null);
  assert.equal(h.calls.length, 0);
});

test('private admin pages never generate contact analytics', () => {
  const h = setup();
  for (const pathname of ['/admin', '/admin/site-journal']) {
    h.window.location.pathname = pathname;
    h.emit(new h.Anchor('tel:+905323276293'));
    h.api.recordEmailOptionsOpen();
    h.api.recordEmailAddressCopy();
  }
  assert.equal(h.calls.length, 0);
});

test('early interactions use the standard gtag Arguments queue format', () => {
  const h = setup();
  delete h.window.gtag;
  h.emit(new h.Anchor('tel:+905323276293'));
  assert.equal(h.window.dataLayer.length, 1);
  const queued = h.window.dataLayer[0];
  assert.equal(Object.prototype.toString.call(queued), '[object Arguments]');
  assert.deepEqual(Array.from(queued).slice(0, 2), ['event', 'phone_click']);
  assert.equal(queued[2].contact_channel, 'phone');
});

test('analytics failure does not block contact action', () => {
  const h = setup();
  h.window.gtag = () => { throw Error('blocked analytics'); };
  assert.doesNotThrow(() => h.emit(new h.Anchor('tel:+905323276293')));
});

test('effect cleanup/reinstallation does not accumulate listeners', () => {
  const h = setup();
  h.listeners.clear();
  const dispose = h.api.installContactTracking();
  dispose();
  const disposeAgain = h.api.installContactTracking();
  h.emit(new h.Anchor('tel:+905323276293'));
  assert.equal(h.calls.length, 1);
  disposeAgain();
  h.emit(new h.Anchor('tel:+905323276293'));
  assert.equal(h.calls.length, 1);
});
