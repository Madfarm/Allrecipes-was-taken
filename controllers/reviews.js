const Recipe = require("../models/Recipe");

module.exports = {
    create
}

function create(req, res, next) {
    Recipe.findById(req.params.id)
        .then(function (recipe) {
            req.body.user = req.user._id
            req.body.userName = req.user.name
            req.body.userAvatar = req.user.avatar

            recipe.reviews.push(req.body)
            return recipe.save()
        })
        .then(function (recipe) {
            res.redirect(`/recipes/${recipe._id}`)
        })
        .catch(function (err) {
            next(err)
        })
}