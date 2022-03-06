const Food = require('../../models/food');
const Item = require('../../models/item');

module.exports = {
  log,
  addToLog,
  setItemQtyInLog,
  foodLog,
  history
};

// A food log
async function log(req, res) {
  const log = await Food.getFoodLog(req.user._id);
  res.json(log);
}

// Add an item to the food log
async function addToLog(req, res) {
  const log = await Food.getFoodLog(req.user._id);
  await log.addItemToLog(req.params.id);
  res.json(log);
}

// Updates an item's qty in the food log
async function setItemQtyInLog(req, res) {
  const log = await Food.getFoodLog(req.user._id);
  await log.setItemQty(req.body.itemId, req.body.newQty);
  res.json(log);
}

// Update the food log isLogged property to true
async function foodLog(req, res) {
  const log = await Food.getFoodLog(req.user._id);
  log.isLogged = true;
  await log.save();
  res.json(log);
}

// Return the logged in user's food history
async function history(req, res) {
  // Sort most recent food logs first
  const foods = await Food
    .find({ user: req.user._id, isLogged: true })
    .sort('-updatedAt').exec();
  res.json(foods);
}