const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  calories: { type: Number, required: true, default: 0 },
}, {
  timestamps: true
});

module.exports = itemSchema;