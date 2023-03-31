const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
  timestamps: true
}
)

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    directions: {
      type: [String],
      required: true
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    category: {
      type: String,
      enum: ["breakfast", "lunch", "dinner", 'dessert'],
    },
    category2: {
      type: String,
      enum: ['vegetarian', 'vegan', 'pescatarian']
    },
    time: {
      type: Number,
      min: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    reviews: [reviewSchema],
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
