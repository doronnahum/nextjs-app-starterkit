const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const { join } = require('path');
const nextI18next = require('./src/i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' && process.env.CONFIG_ENV !== 'development' });
const handle = app.getRequestHandler();

// eslint-disable-next-line no-shadow
const ServiceWorker = (app) => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js');

  app.serveStatic(req, res, filePath);
};

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));
  server.get('/service-worker.js', ServiceWorker(app));
  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
