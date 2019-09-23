const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  localeSubpaths: {
    he: 'he',
    en: 'en',
    de: 'german',
  },
  defaultLanguage: 'he',
  otherLanguages: ['de']
})

const { appWithTranslation, withTranslation } = NextI18NextInstance

module.exports = {
  NextI18NextInstance,
  appWithTranslation,
  withTranslation
}

/* Optionally, export class methods as named exports */