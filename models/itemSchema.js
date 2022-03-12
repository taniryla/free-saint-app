const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo', 'other'],   
    ref: 'Category'
  },
  calories: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = itemSchema;