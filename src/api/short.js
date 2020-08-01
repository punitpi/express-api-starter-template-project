const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ what: 'shortner api' })
})

module.exports = router
