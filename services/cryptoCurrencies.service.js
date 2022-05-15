const config = require('config')

const { server: { currenciesList } } = config
const receiveCurrenciesList = () => currenciesList

module.exports = {
  receiveCurrenciesList,
}
