const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../configs/ensureLoggedIn')


router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create)

module.exports = router