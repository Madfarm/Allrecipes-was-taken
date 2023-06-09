const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
const ensureLoggedIn = require('../configs/ensureLoggedIn')

router.get('/:userId/myrecipes', ensureLoggedIn, usersCtrl.index)



module.exports = router;
