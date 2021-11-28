const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')

const { resolveDistDir } = require('./utils/resolvePath')

const paths = require('../utils/paths')

process.env.NODE_ENV = 'production'

const devConfig = {
  mode: 'production',
  devtool: false,
  entry: paths.entry,
  output: {
    publicPath: resolveDistDir,
    path: resolveDistDir,
  },
}

module.exports = merge(baseConfig, devConfig)
