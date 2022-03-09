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
    {name: 'Green Salad', emoji: '🥗', category: categories[4], cal: 100},
  ]);

  console.log(items)

  process.exit();

})();