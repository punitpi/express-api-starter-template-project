const express = require('express')

const short = require('./short')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'API Router' })
})

router.use('/short', short)

module.exports = router
