const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');

// GET /api/foods/log
router.get('/log', foodsCtrl.log);
// GET /api/foods/history
router.get('/history', foodsCtrl.history);
// POST /api/foods/log/items/:id
router.post('/log/items/:id', foodsCtrl.addToLog);
// POST /api/foods/log/foodLog
router.post('/log/foodLog', foodsCtrl.foodLog);
// POST /api/foods/log/qty
router.put('/log/qty', foodsCtrl.setItemQtyInLog);

module.exports = router;
