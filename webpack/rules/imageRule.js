const getImageRule = () => ({
  test: /\.(png|jpe?g|gif|webp|svg)$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
    'image-webpack-loader',
  ],
});

module.exports = { getImageRule };
