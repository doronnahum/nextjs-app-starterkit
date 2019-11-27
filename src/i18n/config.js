module.exports = {
  defaultLanguage: 'en',
  // All the languages that are available must be defined here
  available: [
    {
      lang: 'he',
      locale: 'he_IL',
      name: 'עברית',
    },
    {
      lang: 'en',
      locale: 'en_EN',
      name: 'English',
    },
  ],
  // The name of the cookie used to store the user language
  lookupCookie: 'lang',

  // The life of the cookie in minutes
  cookieMinutes: 120,
};
