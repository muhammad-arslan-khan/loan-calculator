const express = require('express')
const { calculateLoan } = require('../controllers/appControllers')

const router = express.Router()

router.post('/calculate', calculateLoan)

module.exports = router
