const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  calories: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
  qty: { type: Number},
  measurementType: { type: String, required: true },
  caloricDensity: {
    type: String,
    required: true,
    enum: ['green', 'yellow', 'red']
  },
  foodType: {
    type: String,
    required: true,
    enum: ['fruit', 'grains', 'beverages', 'vegetables', 'meat protein', 'dairy', 'soups', 'snacks', 'condiments', 'legume and seeds', 'desserts']
  },
}, {
  timestamps: true
});

module.exports = itemSchema;