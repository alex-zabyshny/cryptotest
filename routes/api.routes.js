const express = require('express')
const { getAvailibleCurrencies } = require('../controllers/currencies.controller')

const router = express.Router()

router.get('/currencies', getAvailibleCurrencies)

module.exports = router
