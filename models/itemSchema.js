const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
  timestamps: true
});

module.exports = itemSchema;

