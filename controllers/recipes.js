const Recipe = require("../models/Recipe");
module.exports = {
  index,
};

function index(req, res, next) {
  console.log("We're hitting the index page");
  res.render("/");
}
