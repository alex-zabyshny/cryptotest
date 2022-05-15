const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/currencies', (req, res) => res.render('currencies'))
router.get('/currencies/:currency/rates', (req, res) => res.render('rates', { currency: req.params.currency }))


module.exports = router
