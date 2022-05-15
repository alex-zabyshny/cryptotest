const { receiveCurrenciesList } = require('../services/cryptoCurrencies.service')

const getAvailibleCurrencies = (req, res) => {
  const currenciesList = receiveCurrenciesList()
  res.json(currenciesList)
}

const getCurrencyExchangeRatesHistory = (req, res) => {
  res.json([])
}


module.exports = {
  getAvailibleCurrencies,
  getCurrencyExchangeRatesHistory,
}
