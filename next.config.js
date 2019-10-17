/* eslint-disable no-console */
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const env = process.env.CONFIG_ENV || process.env.NODE_ENV || 'development';
const envConfig = require('./env')(env);

console.debug('CONFIG_ENV=', process.env.CONFIG_ENV);
console.debug('NODE_ENV=', process.env.NODE_ENV);
console.debug('envConfig=', envConfig);

const nextConfig = {
  env: envConfig,
  serverRuntimeConfig: envConfig,
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  // offline
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withPlugins([
  [withCSS], [withSass], [withBundleAnalyzer], [withOffline],
], nextConfig);
