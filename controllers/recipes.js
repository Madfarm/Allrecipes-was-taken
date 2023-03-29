const Recipe = require("../models/Recipe");



module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  edit,
  update,
  delete: destroyRecipe
};

function index(req, res, next) {
  Recipe.find({})
    .then(function (recipes) {
      res.render("recipes/index", {
        title: "All Recipes",
        recipes
      });
    })
    .catch(function (err) {
      next(err)
    })


}

function newRecipe(req, res, next) {
  res.render('recipes/new', {
    title: "Add a Recipe"
  })
}

function create(req, res) {
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.userAvatar

  req.body.ingredients = req.body.ingredients.trim()
  req.body.ingredients = req.body.ingredients.split(',').map(function (ingredient) { return ingredient.trim() })

  req.body.directions = req.body.directions.trim()
  req.body.directions = req.body.directions.split(',').map(function (direction) { return direction.trim() })

  Recipe.create(req.body)
    .then(function (newRecipe) {
      res.redirect(`/recipes/${newRecipe._id}`)
    })
    .catch(function (err) {
      next(err)
    })


}

function show(req, res, next) {
  Recipe.findById(req.params.id)
    .then(function (recipe) {
      res.render('recipes/show', {
        title: recipe.title,
        recipe
      })
    })
    .catch(function (err) {
      next(err)
    })
}

function edit(req, res, next) {
  Recipe.findById(req.params.id)
    .then(function (recipe) {
      res.render('recipes/edit', {
        title: recipe.title,
        recipe
      })
    })
    .catch(function (err) {
      next(err)
    })
}

function update(req, res, next){
    const filter = {
        _id: req.params.id, 
        user: req.user._id
    }
    const update = {
        title: req.body.title,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        difficulty: req.body.difficulty,
        category: req.body.category,
        category2: req.body.category2,
        time: req.body.time
    }
    Recipe.findOneAndUpdate(filter,update)
    .then(function(recipe){
        res.redirect(`/recipes/${recipe._id}`)
    })
    .catch(function (err) {
        res.redirect(`/recipes/${req.params.id}`)
      })

}

function destroyRecipe(req,res, next){
  Recipe.deleteOne({_id: req.params.id})
  .then(function(){
    res.redirect(`/users/${req.user._id}/myrecipes`)
  })
  .catch(function(err){
    next(err)
  })
}

 

