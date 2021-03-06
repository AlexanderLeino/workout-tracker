const router = require('express').Router()

const apiRoutes = require('./api.js')
const view = require('./view.js')

router.use('/', view)
router.use('/api', apiRoutes)

module.exports = router;