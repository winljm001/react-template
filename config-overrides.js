/* config-overrides.js */
// https://github.com/cdharris/react-app-rewire-hot-loader
// https://github.com/gaearon/react-hot-loader#getting-started
const { override, addBabelPlugins } = require('customize-cra')
// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config
// }

module.exports = override(...addBabelPlugins('react-hot-loader/babel'))
