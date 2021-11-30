const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolveDir } = require('./utils/resolvePath');

const { getImageRule } = require('./rules/imageRule');
const { getJavascriptRule } = require('./rules/scriptRule');
const { getStyleRule } = require('./rules/styleRule');

const isEnvProd = process.env.NODE_ENV === 'production';
const isEnvDev = process.env.NODE_ENV === 'development';
const filename = `[name].${isEnvDev ? '' : '[hash]'}.js`;
module.exports = {
  context: resolveDir('../../'),
  output: {
    filename,
  },
  module: {
    rules: [getJavascriptRule(), getStyleRule({ isEnvDev, isEnvProd }), getImageRule({ isEnvProd })],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({
      publicPath: '/',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
