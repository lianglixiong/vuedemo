/* eslint-disable */

/**
 * 开发服务器的热重载(用于实现页面的自动刷新)
 */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
