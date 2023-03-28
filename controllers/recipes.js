const Recipe = require("../models/Recipe");
module.exports = {
  index,
  new: createRecipe
};

function index(req, res, next) {
  res.render("recipes/index", {
    title: "All Recipes"
  });
}

function createRecipe(req, res, next){
  res.render('recipes/new', {
    title: "Add a Recipe"
  })
}
