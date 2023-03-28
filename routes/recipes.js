const express = require('express')
const recipesCtrl = require('../controllers/recipes')
const router = express.Router()

router.route('/')
.get(recipesCtrl.index)
.post(recipesCtrl.create)

router.get('/new', recipesCtrl.new)





module.exports = router