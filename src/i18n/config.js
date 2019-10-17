module.exports = {
  otherLanguages: ['en', 'he'],
  defaultLanguage: 'en',
  preload: ['en', 'he'],
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  fallbackLng: 'en',
  debug: false,
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  lng: 'en',
  defaultNS: 'common',
  ignoreRoutes: ['/_next/', '/static/', '/public/'],
};
