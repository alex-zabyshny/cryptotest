const axios = require('axios')
const config = require('config')
const { Rates } = require('../../models/rates')
const { sendRealTimeRates } = require('../socketio')

const { server: { currenciesList, coinApi, ratesCheckInterval } } = config

const requestInstance = axios.create({
  baseURL: coinApi.baseUrl,
  headers: { 'X-CoinAPI-Key': coinApi.key },
})

const getCurrencyExchangeRates = async (currency) => {
  return new Promise((resolve, reject) => {
    requestInstance(`/v1/exchangerate/${currency}/USD`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))
  })
}

const processAvailibleCurrencies = async () => {
  const availibleCurrencies = currenciesList.filter(({ availible }) => availible)
  const requestPromises = availibleCurrencies.map(({ alias }) => getCurrencyExchangeRates(alias))

  const rates = await Promise.all(requestPromises).catch(err => console.error(err))

  if (!rates) return

  for (const el of rates) {
    const rate = new Rates({
      cryptoCurrencyKey: el.asset_id_base,
      currencyKey: el.asset_id_quote,
      time: el.time,
      rate: el.rate,
    })

    rate.save().then(data => {
      const { cryptoCurrencyKey: room } = data
      sendRealTimeRates(room, [data])
    }).catch(err => console.error(err))
  }
}

const initRatesCheckerTimer = () => {
  return setInterval(processAvailibleCurrencies, ratesCheckInterval * 1000)
}

module.exports = {
  initRatesCheckerTimer,
}
