const express = require('express')
const recipesController = require('../controllers/recipes')
const router = express.Router()

router.get('/',recipesController.index)





module.exports = router