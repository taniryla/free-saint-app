const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  item: itemSchema,
  counter: { type: Number, default: 1 },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('totalCalorie').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.counter * this.item.calories;
});

const foodSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isLogged: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

foodSchema.virtual('calorieTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.totalCalorie, 0);
});



foodSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

foodSchema.virtual('foodId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

foodSchema.statics.getFoodLog = function(userId) {
  // 'this' is the Food model
  return this.findOneAndUpdate(
    // query
    { user: userId, isLogged: false },
    // update
    { user: userId },
    // upsert option will create the doc if 
    // it doesn't exist
    { upsert: true, new: true }
  );
};

foodSchema.methods.addItemToLog = async function(itemId) {
  const log = this;
  // Check if item already in food log
  const lineItem = log.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const item = await mongoose.model('Item').findById(itemId);
    log.lineItems.push({ item });
  }
  return log.save();
};

// Instance method to set an item's qty in the food log (will add item if does not exist)
foodSchema.methods.setItemQty = function(itemId, newQty) {
  // this keyword is bound to the log (order doc)
  const log = this;
  // Find the line item in the log for the menu item
  const lineItem = log.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the log.lineItems array
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.counter = newQty;
  }
  // return the save() method's promise
  return log.save();
};

module.exports = mongoose.model('Food', foodSchema);