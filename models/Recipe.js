const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    ingredients: {
      type: [String],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    category: {
      type: String,
      enum: ["breakfast", "lunch", "dinner"],
    },
    time: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
