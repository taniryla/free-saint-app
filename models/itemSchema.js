const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = itemSchema;