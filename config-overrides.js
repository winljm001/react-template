/* config-overrides.js */

const path = require('path')
const { override, addBabelPlugins, addWebpackResolve } = require('customize-cra')

module.exports = override(
  // https://github.com/cdharris/react-app-rewire-hot-loader
  // https://github.com/gaearon/react-hot-loader#getting-started
  ...addBabelPlugins('react-hot-loader/babel'),
  // https://github.com/facebook/create-react-app/issues/5118#issuecomment-464368371
  addWebpackResolve({
    alias: { '@': path.resolve(__dirname, 'src') },
  })
)
