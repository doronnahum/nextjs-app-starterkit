module.exports = {
  otherLanguages: ['he'],
  localeSubpaths: {
    en: 'en',
    he: 'he',
  },
  localePath: typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
};
