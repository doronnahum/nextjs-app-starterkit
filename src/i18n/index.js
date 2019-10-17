const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  preload: ['en'],
  otherLanguages: ['en', 'he'],
  browserLanguageDetection: false,
  fallbackLng: 'en',
  debug: false,
  localePath: 'src/locales',
  // localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
});

const { appWithTranslation, withTranslation } = NextI18NextInstance;

module.exports = {
  NextI18NextInstance,
  appWithTranslation,
  withTranslation,
};

/* Optionally, export class methods as named exports */
