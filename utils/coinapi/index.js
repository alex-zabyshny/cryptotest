const axios = require('axios')
const config = require('config')

const { server: { currenciesList, coinApi, ratesCheckInterval } } = config

const requestInstance = axios.create({
  baseURL: coinApi.baseUrl,
  headers: { 'X-CoinAPI-Key': coinApi.apiKey },
})

const getCurrencyExchangeRates = async (currency) => {
  return new Promise((resolve, reject) => {
    requestInstance(`/v1/exchangerate/${currency}/USD`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))
  })
}

const getRatesForAvailibleCurrencies = async () => {
  const availibleCurrencies = currenciesList.filter(({ availible }) => availible)
  const requestPromises = availibleCurrencies.map(({ alias }) => getCurrencyExchangeRates(alias))
  await Promise.all(requestPromises).then(result => {
    console.log(result)
  }).catch(err => console.error(err))
}

const initRatesCheckerTimer = () => {
  return setTimeout(getRatesForAvailibleCurrencies, ratesCheckInterval)
}

module.exports = {
  initRatesCheckerTimer,
}
