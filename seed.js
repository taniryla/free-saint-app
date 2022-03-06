require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Alcohol-free', sortOrder: 10},
    {name: 'Balanced', sortOrder: 20},
    {name: 'Higher-Fiber', sortOrder: 30},
    {name: 'High-Protein', sortOrder: 40},
    {name: 'Keto', sortOrder: 50},
    {name: 'Kidney-friendly', sortOrder: 60},
    {name: 'Kosher', sortOrder: 70},
    {name: 'Low-Carb', sortOrder: 80},
    {name: 'Low-Fat', sortOrder: 90},
    {name: 'Low Potassium', sortOrder: 100},
    {name: 'Low-sodium', sortOrder: 110},
    {name: 'No oil added', sortOrder: 120},
    {name: 'No-sugar', sortOrder: 130},
    {name: 'Paleo', sortOrder: 140},
    {name: 'Pescatarian', sortOrder: 150},
    {name: 'Pork-free', sortOrder: 160},
    {name: 'Red meat-free', sortOrder: 170},
    {name: 'Sugar-conscious', sortOrder: 180},
    {name: 'Vegan', sortOrder: 190},
    {name: 'Vegetarian', sortOrder: 200},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
    {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();