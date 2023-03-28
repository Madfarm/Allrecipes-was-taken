const Recipe = require("../models/Recipe");



module.exports = {
  index,
  new: newRecipe,
  create,
  show
};

function index(req, res, next) {
  res.render("recipes/index", {
    title: "All Recipes"
  });
}

function newRecipe(req, res, next){
  res.render('recipes/new', {
    title: "Add a Recipe"
  })
}

function create(req, res){
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.userAvatar

    req.body.ingredients = req.body.ingredients.trim()
    req.body.ingredients = req.body.ingredients.split(',').map(function (ingredient) { return ingredient.trim() })

    req.body.directions = req.body.directions.trim()
    req.body.directions = req.body.directions.split(',').map(function (direction) { return direction.trim() })

    Recipe.create(req.body)
    .then(function(newRecipe){
      res.redirect(`/recipes/${newRecipe._id}`)
    })
    .catch(function(err){
      next(err)
    })


}

function show(req, res, next){
  Recipe.findById(req.params.id)
  .then(function(recipe){

  })
  .catch(function(err){
    next(err)
  })
}

