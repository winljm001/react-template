/* config-overrides.js */

const rewireReactHotLoader = require('react-app-rewire-hot-loader')
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireReactHotLoader(config, env)
  return config
}
