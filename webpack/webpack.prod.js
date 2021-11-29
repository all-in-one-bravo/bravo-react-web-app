const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base')

const { resolveDistDir } = require('./utils/resolvePath')

const paths = require('./utils/paths')

process.env.NODE_ENV = 'production'

const prodConfig = {
  mode: 'production',
  // Temporary fix for asset size limit warnings.
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: false,
  entry: paths.entry,
  output: {
    path: resolveDistDir,
  },
  plugins: [new MiniCssExtractPlugin()],
}

module.exports = merge(baseConfig, prodConfig)
