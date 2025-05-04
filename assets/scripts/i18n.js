let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch('./assets/translations.json');
    translations = await response.json();
    setLanguage(localStorage.getItem('lang') || detectBrowserLanguage());
  } catch (error) {
    console.error('Failed translations load:', error);
  }
}

function setLanguage(lang) {
  if (!translations[lang]) {
    return;
  }
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function detectBrowserLanguage() {
  const browserLang = navigator.language.slice(0, 2);
  return translations[browserLang] ? browserLang : 'en';
}

document.addEventListener('DOMContentLoaded', loadTranslations);
