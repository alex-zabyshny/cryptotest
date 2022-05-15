const config = require('config')

const receiveCurrenciesList = () => {
  const { server: { currenciesList } } = config
  return currenciesList
}

const getCurrencyHistory = async () => {
  return [{ message: 'ok' }]
}

module.exports = {
  receiveCurrenciesList,
  getCurrencyHistory,
}
