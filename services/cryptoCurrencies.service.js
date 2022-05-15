const config = require('config')

const { server: { currenciesList } } = config

const receiveCurrenciesList = () => {
  return currenciesList
}

const getCurrencyHistory = async () => {
  return [{ message: 'ok' }]
}

module.exports = {
  receiveCurrenciesList,
  getCurrencyHistory,
}
