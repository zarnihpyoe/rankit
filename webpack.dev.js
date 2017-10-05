const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map', // source map for easier debug (don't do this for production)
  devServer: {
    // telling webpack-dev-server
    contentBase: './dist', // - to serve files from ./dist on localhost:8080
  },
})
