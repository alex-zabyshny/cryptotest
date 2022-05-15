const config = require('config')

const { Rates } = require('../models/rates')

const { server: { currenciesList } } = config

const receiveCurrenciesList = () => {
  return currenciesList
}

const getCurrencyHistory = async (cryptoCurrencyKey) => {
  return Rates.find({ cryptoCurrencyKey }).sort({ time: 1 })
}

module.exports = {
  receiveCurrenciesList,
  getCurrencyHistory,
}
