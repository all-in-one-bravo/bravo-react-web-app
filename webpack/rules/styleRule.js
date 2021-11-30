const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getStyleLoaders = ({ isEnvDev = false, isEnvProd = false, shouldUseSourceMap = false }) =>
  [
    isEnvDev && 'style-loader',
    isEnvProd && {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '/' },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: shouldUseSourceMap,
      },
    },
  ].filter(Boolean);

const getStyleRule = ({ isEnvDev = false, isEnvProd = false, shouldUseSourceMap = false }) => ({
  test: /\.css$/,
  exclude: /node_modules/,
  use: getStyleLoaders({ isEnvDev, isEnvProd, shouldUseSourceMap }),
});

module.exports = { getStyleRule };
