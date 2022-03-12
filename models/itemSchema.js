const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['keto', 'paleo', 'pescatarian', 'vegetarian', 'other'],   
    ref: 'Category'
  },
  calories: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = itemSchema;