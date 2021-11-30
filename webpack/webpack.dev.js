const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const { resolveDistDevDir } = require('./utils/resolvePath');

const paths = require('./utils/paths');

process.env.NODE_ENV = 'development';

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: paths.entry,
  output: {
    path: resolveDistDevDir,
  },
  devServer: {
    static: resolveDistDevDir,
    hot: true,
    port: 9000,
  },
};
module.exports = merge(baseConfig, devConfig);
