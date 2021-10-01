const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@root': 'src',
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@screens': 'src/screens'
  })(config)

  return config
}