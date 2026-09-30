(() => {
  'use strict';
  const languages = {
    en: { html: 'en', title: 'Terms & Conditions', label: 'Language selector' },
    'pt-br': { html: 'pt-BR', title: 'Termos e Condições', label: 'Seletor de idioma' },
    es: { html: 'es', title: 'Términos y Condiciones', label: 'Selector de idioma' }
  };
  const normalize = value => {
    const lang = (value || '').toLowerCase();
    if (lang === 'pt' || lang === 'pt-br') return 'pt-br';
    if (lang === 'en' || lang === 'en-us') return 'en';
    if (lang === 'es') return 'es';
    return null;
  };
  let activeLanguage = 'en';
  const readHash = () => {
    try { return decodeURIComponent(location.hash.slice(1)); }
    catch (_) { return ''; }
  };
  const contentFor = lang => document.querySelector(`.legal-content-wrap[data-legal-lang-block="${lang}"]`);
  function setLanguage(value, updateUrl = false) {
    const lang = normalize(value) || 'en';
    const previousContent = contentFor(activeLanguage);
    const previousHeadings = previousContent ? Array.from(previousContent.querySelectorAll('[id]')) : [];
    const previousId = readHash();
    const anchorIndex = previousHeadings.findIndex(node => node.id === previousId);
    activeLanguage = lang;
    document.documentElement.lang = languages[lang].html;
    document.title = `ZAIRON — ${languages[lang].title}`;
    document.querySelectorAll('[data-legal-lang-block]').forEach(node => {
      node.hidden = node.dataset.legalLangBlock !== lang;
    });
    document.querySelectorAll('[data-legal-lang-inline]').forEach(node => {
      node.hidden = node.dataset.legalLangInline !== lang;
    });
    document.querySelectorAll('[data-legal-lang-switcher]').forEach(switcher => {
      switcher.setAttribute('aria-label', languages[lang].label);
      switcher.querySelectorAll('[data-lang]').forEach(button => {
        const selected = button.dataset.lang === lang;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
    });
    try {
      localStorage.setItem('zairon-terms-locale', lang);
      if (lang !== 'es') localStorage.setItem('zairon-locale', lang === 'pt-br' ? 'pt-BR' : 'en-US');
    } catch (_) { /* Language switching also works when storage is unavailable. */ }
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      const target = anchorIndex >= 0 ? contentFor(lang).querySelectorAll('[id]')[anchorIndex] : null;
      if (target) url.hash = target.id;
      history.replaceState(null, '', url);
      if (target) target.scrollIntoView();
    }
  }
  const hashLanguage = () => normalize(location.hash.slice(1).split('-')[0]);
  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem('zairon-locale') || localStorage.getItem('zairon-terms-locale');
  } catch (_) {}
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(hashLanguage() || normalize(requestedLanguage) || normalize(savedLanguage) || 'en');
  document.querySelectorAll('[data-legal-lang-switcher] [data-lang]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang, true));
  });
  const followHash = () => {
    const lang = hashLanguage();
    if (lang && lang !== activeLanguage) setLanguage(lang);
    const anchor = document.getElementById(readHash());
    if (anchor) requestAnimationFrame(() => anchor.scrollIntoView());
  };
  window.addEventListener('hashchange', followHash);
  if (location.hash) followHash();
})();
