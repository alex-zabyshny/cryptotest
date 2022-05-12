const { receiveCurrenciesList } = require('../services/cryptoCurrencies.service')

const getAvailibleCurrencies = (req, res) => {
  const currenciesList = receiveCurrenciesList()
  res.json(currenciesList)
}

module.exports = {
  getAvailibleCurrencies,
}
