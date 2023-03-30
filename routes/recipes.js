const express = require('express')
const recipesCtrl = require('../controllers/recipes')
const router = express.Router()
const ensureLoggedIn = require('../configs/ensureLoggedIn')

router.route('/')
    .get(recipesCtrl.index)
    .post(ensureLoggedIn, recipesCtrl.create)

router.get('/new', ensureLoggedIn, recipesCtrl.new)

router.get('/:id/edit', ensureLoggedIn, recipesCtrl.edit)

router.route('/:id')
    .get(recipesCtrl.show)
    .put(ensureLoggedIn, recipesCtrl.update)
    .delete(ensureLoggedIn, recipesCtrl.delete)





module.exports = router