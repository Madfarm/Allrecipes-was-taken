const Recipe = require("../models/Recipe")

module.exports = {
    index
}


function index(req, res, next) {
    Recipe.find({ user: req.params.userId })
        .then(function (userRecipes) {
            res.render('users/index', {
                userRecipes,
                title: `${req.user.name}'s Recipes`
            })
        }).catch(function (err) {
            next(err)
        })
    // res.render('users/index', {title, })
}