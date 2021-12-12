// Load required packages
var mongoose = require('mongoose');

// Define our recipe schema
var RecipeSchema = new mongoose.Schema({
    name: String,
    userId: String,
    prepTime: String,
    cookTime: String,
    ingredients: [String],
    instructions: [String],
    tags: [String],
    image: [String],
    forks: Number,
    forkOrigin: String
});

// Export the Mongoose model
module.exports = mongoose.model('Recipe', RecipeSchema);