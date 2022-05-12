const axios = require('axios')

const requestInstance = axios.create({
  baseURL: 'https://rest.coinapi.io',
  headers: { 'X-CoinAPI-Key': '4F9B6485-EDE0-4DBA-9576-1A77F4CF91DA' },
})

const getCurrencyExchangeRates = async (currency) => {
  return new Promise((resolve, reject) => {
    requestInstance(`/v1/exchangerate/${currency}/USD`)
      .then(response => resolve(response?.data))
      .catch(err => reject(err))
  })
}

module.exports = {
  getCurrencyExchangeRates,
}
