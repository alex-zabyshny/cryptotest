const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/currencies', (req, res) => res.render('currencies'))


module.exports = router
