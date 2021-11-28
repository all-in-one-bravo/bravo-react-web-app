const { resolve } = require('path')
const pathsPath = resolve(__dirname, '../../webpack/utils/paths')
const paths = require(pathsPath)
const ALIAS = {
  pages: paths.srcPages,
  assets: paths.srcAssets,
  stories: paths.srcStories,
  components: paths.srcComponents,
}

const babelLoaders = [
  {
    loader: 'babel-loader',
    options: {
      plugins: [
        'react-hot-loader/babel',
        [
          'module-resolver',
          {
            extensions: ['.tsx', '.ts'],
            alias: ALIAS,
          },
        ],
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      env: {
        production: {
          presets: ['minify'],
        },
      },
      ignore: ['node_modules'],
      babelrc: false,
      cacheDirectory: paths.babelCacheDir,
    },
  },
]

const getJavascriptRule = () => ({
  test: [/\.jsx?$/, /\.tsx?$/],
  exclude: /(node_modules)/,
  use: [...babelLoaders],
})

module.exports = { getJavascriptRule }
