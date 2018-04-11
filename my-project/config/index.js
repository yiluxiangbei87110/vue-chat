'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/getNewsList': {
        target: 'https://www.toutiao.com/api/pc/hot_gallery/',
        byPass: function (req, res, proxyOptions) {
          req.headers.referer = "https://www.toutiao.com";
          req.headers.host = "toutiao.com";
        },
        changeOrigin: true,
        pathRewrite: {
          '^/api/getNewsList': ''
        }
      },
      '/api/focus': {
        target: 'https://www.toutiao.com/api/pc/focus/',
        byPass: function (req, res, proxyOptions) {
          req.headers.referer = "https://www.toutiao.com";
          req.headers.host = "toutiao.com";
        },
        changeOrigin: true,
        pathRewrite: {
          '^/api/focus': ''
        }
      },
      '/api/feed': {
        target: 'https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A185AA4CAEF1B2D&cp=5ACE11DB726D5E1&_signature=ogBxyBAf-N0MSzxpi14sHKIAcd',
        byPass: function (req, res, proxyOptions) {
          req.headers.referer = "https://www.toutiao.com";
          req.headers.host = "toutiao.com";
        },
        changeOrigin: true,
        pathRewrite: {
          '^/api/focus': ''
        }
      },






    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
