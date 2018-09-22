const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const config = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/server-entry.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: base.plugins || []
})

module.exports = config
