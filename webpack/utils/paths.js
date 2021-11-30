const { resolve } = require('path');

const srcApp = resolve(__dirname, '../../src');
const distDir = resolve(__dirname, '../../dist');
const distDevDir = resolve(__dirname, '../../dist-dev');
const webpackConfDir = resolve(__dirname, '../../webpack');
const babelCacheDir = resolve(__dirname, '../../babel-cache');
const configurationDir = resolve(__dirname, '../../configuration');

const srcPages = resolve(srcApp, './pages');
const srcAssets = resolve(srcApp, './assets');
const srcStories = resolve(srcApp, './stories');
const srcComponents = resolve(srcApp, './components');

const entry = resolve(srcApp, 'index.tsx');
module.exports = {
  entry,
  srcApp,
  distDir,
  srcPages,
  srcAssets,
  srcStories,
  srcComponents,
  distDevDir,
  babelCacheDir,
  webpackConfDir,
  configurationDir,
};
