const Recipe = require("../models/Recipe");

module.exports = {
    create
}

function create(req, res, next) {
    Recipe.findById(recipeId)
        .then(function (recipe) {
            recipe.reviews.push(req.body)
        })
        .then(function (recipe) {
            res.redirect(`/recipes/${recipe._id}`)
        })
        .catch(function (err) {
            next(err)
        })
}