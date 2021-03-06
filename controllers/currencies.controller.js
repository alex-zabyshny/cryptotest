const { receiveCurrenciesList, getCurrencyHistory } = require('../services/cryptoCurrencies.service')

const getAvailibleCurrencies = (req, res, next) => {
  try {
    const currenciesList = receiveCurrenciesList()
    res.json(currenciesList)
  } catch (err) {
    next(err)
  }
}

const getCurrencyExchangeRatesHistory = (req, res, next) => {
  const { currency } = req.params
  getCurrencyHistory(currency).then(history => res.json(history)).catch(err => next(err))
}

module.exports = {
  getAvailibleCurrencies,
  getCurrencyExchangeRatesHistory,
}
