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
  
}

