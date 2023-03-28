const express = require('express')
const recipesCtrl = require('../controllers/recipes')
const router = express.Router()
const ensureLoggedIn = require('../configs/ensureLoggedIn')

router.route('/')
.get(recipesCtrl.index)
.post(recipesCtrl.create)

router.get('/new', ensureLoggedIn, recipesCtrl.new)





module.exports = router