const NextI18Next = require('next-i18next').default;
const config = require('./config');

module.exports = new NextI18Next(config);

/* Optionally, export class methods as named exports */
