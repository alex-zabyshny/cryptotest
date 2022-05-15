const express = require('express')
const router = express.Router()
const config = require('config')

const { server: { currenciesList } } = config

router.get('/', (req, res) => res.render('index'))
router.get('/currencies', (req, res) => res.render('currencies'))
router.get('/currencies/:currency/rates', (req, res, next) => {
  const { currency } = req.params
  if (!currenciesList.find(({ alias, availible }) => alias === currency && availible)) {
    return next()
  }
  res.render('rates', { currency })
})

module.exports = router
