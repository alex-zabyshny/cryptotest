const express = require('express')

const pagesRoutes = require('./pages.routes')
const apiRoutes = require('./api.routes')

const router = express.Router()

router.use(pagesRoutes)
router.use('/api', apiRoutes)

module.exports = router
