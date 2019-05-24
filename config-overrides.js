/* config-overrides.js */
const { override, addBabelPlugins } = require('customize-cra')
// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config
// }

module.exports = override(...addBabelPlugins('react-hot-loader/babel'))
