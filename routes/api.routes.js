const express = require('express')
const { getAvailibleCurrencies, getCurrencyExchangeRatesHistory } = require('../controllers/currencies.controller')

const router = express.Router()

router.get('/currencies', getAvailibleCurrencies)
router.get('/currencies/:currency/rates', getCurrencyExchangeRatesHistory)

module.exports = router
