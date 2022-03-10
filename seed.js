require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'alcohol-free', sortOrder: 10},
    {name: 'celery-free', sortOrder: 20},
    {name: 'crustacean-free', sortOrder: 30},
    {name: 'dairy-free', sortOrder: 40},
    {name: 'egg-free', sortOrder: 50},
    {name: 'fish-free', sortOrder: 60},
    {name: 'fodmap-free', sortOrder: 70},
    {name: 'gluten-free', sortOrder: 80},
    {name: 'immuno-supportive', sortOrder: 90},
    {name: 'keto-friendly', sortOrder: 100},
    {name: 'kidney-friendly', sortOrder: 110},
    {name: 'kosher', sortOrder: 120},
    {name: 'low-fat-abs', sortOrder: 130},
    {name: 'low-potassium', sortOrder: 140},
    {name: 'low-sugar', sortOrder: 150},
    {name: 'lupine-free', sortOrder: 160},
    {name: 'mustard-free', sortOrder: 170},
    {name: 'no-oil-added', sortOrder: 180},
    {name: 'paleo', sortOrder: 190},
    {name: 'peanut-free', sortOrder: 200},
    {name: 'pescatarian', sortOrder: 210},
    {name: 'pork-free', sortOrder: 220},
    {name: 'red-meat-free', sortOrder: 230},
    {name: 'sesame-free', sortOrder: 240},
    {name: 'shellfish-free', sortOrder: 250},
    {name: 'soy-free', sortOrder: 260},
    {name: 'sugar-conscious', sortOrder: 270},
    {name: 'tree-nut-free', sortOrder: 280},
    {name: 'vegan', sortOrder: 290},
    {name: 'vegan', sortOrder: 290},
    {name: 'vegan', sortOrder: 290},
    {name: 'vegan', sortOrder: 290},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([   
    {name: 'Green Salad', emoji: '🥗', category: categories[4], cal: 100},
  ]);

  console.log(items)

  process.exit();

})();