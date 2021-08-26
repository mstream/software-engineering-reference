const path = require('path')
const webpack = require('webpack')

function configureWebpack() {
  return {
    plugins: [
      new webpack.ProvidePlugin({
             process: 'process/browser',
      }),
    ],
    resolve: {
      alias: {
        '@local/components': path.resolve(
          __dirname, 
         '..', 
        '..', 
        'src', 
        'components'
        ),
        '@local/diagrams': path.resolve(
          __dirname, 
         '..', 
        '..', 
        'src', 
        'diagrams'
        ),
        '@local/utils': path.resolve(
          __dirname, 
         '..', 
        '..', 
        'src', 
        'utils'
        ),
        process: "process/browser",
      }
    }
  } 
}

module.exports = function() {
  return {
    name: 'plugin-alias',
    configureWebpack,
  }
}
