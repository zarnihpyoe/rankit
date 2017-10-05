const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  // webpack -p = webpack --optimize-minize --define process.env.NODE_ENV="'production'"
})
