const CDN_IMAGE_URL = ''

const getImageRule = ({ isEnvProd = false }) => ({
  test: /\.(png|jpe?g|gif|webp|svg)$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        // publicPath: `${isEnvProd ? CDN_IMAGE_URL : ''}/images`,
        // outputPath: './images',
      },
    },
    'image-webpack-loader',
  ],
})

module.exports = { getImageRule }
