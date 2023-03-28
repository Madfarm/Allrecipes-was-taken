const Recipe = require("../models/Recipe");



module.exports = {
  index,
  new: newRecipe,
  create
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
    .then(function(recipe){
      console.log(`new doc _id: ${recipe._id}`)
      res.send("Creation working")
    })
    .catch(function(err){
      console.log(err)
    })


}

