const path = require('path')

const resolveDir = (relativePath) => path.resolve(__dirname, relativePath)

const resolveDistDir = path.resolve(__dirname, '../../dist')

const resolveDistDevDir = path.resolve(__dirname, '../../dist-dev')

module.exports = { resolveDistDir, resolveDir, resolveDistDevDir }
