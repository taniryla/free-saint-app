require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'keto', sortOrder: 10},
    {name: 'paleo', sortOrder: 20},
    {name: 'pescatarian', sortOrder: 30},
    {name: 'vegetarian', sortOrder: 40},
    {name: 'other', sortOrder: 50},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([   
  { 
    name: 'banana', 
    calories: '105', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg',
    qty: '1.0',
    measurementType: 'Medium Banana',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'apple', 
    calories: '95', 
    category: categories[3],    
    image: 'https://i.imgur.com/9FA0UAw.jpg',
    qty: '1.0',
    measurementType: 'Apple',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'asparagus', 
    calories: '48', 
    category: categories[3],    
    image: 'https://i.imgur.com/uTmBbn7.jpg',
    qty: '12.0',
    measurementType: 'Large Asparagus',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'broccoli', 
    calories: '105', 
    category: categories[3],    
    image: 'https://i.imgur.com/p2s7tAp.jpg',
    qty: '30.0',
    measurementType: 'Florets',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'grapefruit', 
    calories: '104', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg',
    qty: '1.0',
    measurementType: 'Fruit',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'blueberries', 
    calories: '80', 
    category: categories[3],    
    image: 'https://i.imgur.com/zCgb9xN.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cherries', 
    calories: '134', 
    category: categories[3],    
    image: 'https://i.imgur.com/aL9bKNf.jpg',
    qty: '20.0',
    measurementType: 'Cherries',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cherry tomatoes', 
    calories: '27', 
    category: categories[3],    
    image: 'https://i.imgur.com/AzXfwbU.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cucumber', 
    calories: '18', 
    category: categories[3],    
    image: 'https://i.imgur.com/lzc34x9.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'grapes', 
    calories: '54', 
    category: categories[3],    
    image: 'https://i.imgur.com/hxWYSTQ.jpg',
    qty: '16.0',
    measurementType: 'Grapes',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'mango', 
    calories: '201', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png',
    qty: '1.0',
    measurementType: 'Mango',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    category: categories[3],    
    image: 'https://i.imgur.com/KG1Ip0C.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pear', 
    calories: '84', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg',
    qty: '1.0',
    measurementType: '1 Pear, Small',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pineapple', 
    calories: '82', 
    category: categories[3],    
    image: 'https://i.imgur.com/mdOVxbl.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pomegranate', 
    calories: '144', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg',
    qty: '1.0',
    measurementType: 'Cup Arils(Seed/Juice Sacs)',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'raspberries', 
    calories: '56', 
    category: categories[3],    
    image: 'https://i.imgur.com/Ihxmy0d.jpg',
    qty: '4.0',
    measurementType: 'Serving (oz)',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'strawberries', 
    calories: '58', 
    category: categories[3],    
    image: 'https://i.imgur.com/bnfo6Eu.jpg',
    qty: '10.0',
    measurementType: 'Large Strawberries',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'tomatoes', 
    calories: '22', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Medium',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'watermelon', 
    calories: '46', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/e83/e83c09ce97ecd44e00b8c561ab682202.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'barley', 
    calories: '193', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/9b1/9b1add099acc71e8e7a31be0729b6936.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'bread wheat sprouted', 
    calories: '110', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'brown cooked rice', 
    calories: '327', 
    category: categories[4],    
    image: 'https://i.imgur.com/C4iUEme.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'cooked oatmeal', 
    calories: '166', 
    category: categories[4],    
    image: 'https://i.imgur.com/xMpbqrj.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'corn tortillas', 
    calories: '208', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg',
    qty: '4.0',
    measurementType: 'Tortillas',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'grits', 
    calories: '151', 
    category: categories[4],    
    image: 'https://i.imgur.com/4CaUgiS.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'quinoa', 
    calories: '222', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/e02/e02246c3856098598f4b7e04fd2d4e4e.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'soba noodles', 
    calories: '113', 
    category: categories[4],    
    image: 'https://i.imgur.com/itE7fla.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain english muffin', 
    calories: '134', 
    category: categories[4],    
    image: 'https://i.imgur.com/5A92HjW.jpg',
    qty: '1.0',
    measurementType: 'Muffin',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain pasta', 
    calories: '238', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/738/73846a8750bb3134aada6b711dc2919d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain wheat bread', 
    calories: '100', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Thick Slice',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'almond milk', 
    calories: '56', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'coffee', 
    calories: '2', 
    category: categories[4],    
    image: 'https://i.imgur.com/3HBIilN.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'kombucha', 
    calories: '34', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/2e2/2e2fe81e1b63a61f6e4adec76220a11b.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'smoothie, fruit only', 
    calories: '161', 
    category: categories[3],    
    image: 'https://i.imgur.com/uKEja8w.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'soy latte', 
    calories: '148', 
    category: categories[4],    
    image: 'https://i.imgur.com/QhCgS93.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'tea', 
    calories: '2', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/793/79376cb6e124624e22780db7401601a4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'vegetable juice', 
    calories: '56', 
    category: categories[3],    
    image: 'https://i.imgur.com/Xeh9FpH.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'bell peppers', 
    calories: '32', 
    category: categories[3],    
    image: 'https://i.imgur.com/X7ClNqb.jpg',
    qty: '1.0',
    measurementType: 'Pepper',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'brussel sprouts', 
    calories: '28', 
    category: categories[3],    
    image: 'https://i.imgur.com/G54xFSh.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'cabbage', 
    calories: '22', 
    category: categories[3],    
    image: 'https://i.imgur.com/ZJufHs3.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'carrots', 
    calories: '100', 
    category: categories[3],    
    image: 'https://i.imgur.com/0XqAZ7e.jpg',
    qty: '4.0',
    measurementType: 'Serving (2 oz per Serving)',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'cauliflower', 
    calories: '3', 
    category: categories[3],    
    image: 'https://i.imgur.com/vdmO2Nb.jpg',
    qty: '1.0',
    measurementType: 'Floweret',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'celery', 
    calories: '6', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg',
    qty: '1.0',
    measurementType: 'Stalk',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'green beans', 
    calories: '44', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'green salad', 
    calories: '34', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/b6d/b6d9f3052d27a3c71220cfa55c6f0a42.jpg',
    qty: '3.0',
    measurementType: 'Bowl(s)',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'kale', 
    calories: '18', 
    category: categories[3],    
    image: 'https://i.imgur.com/qevUb9q.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'lettuce', 
    calories: '8', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'mixed greens', 
    calories: '8', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/b6d/b6d9f3052d27a3c71220cfa55c6f0a42.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'mushrooms', 
    calories: '15', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'onion', 
    calories: '28', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg',
    qty: '1.0',
    measurementType: 'Small Onion',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'peas', 
    calories: '134', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'potatoes', 
    calories: '158', 
    category: categories[3],    
    image: 'https://i.imgur.com/mdRwfHb.jpg',
    qty: '1.0',
    measurementType: 'Medium',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'spaghetti squash', 
    calories: '126', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/bc0/bc073855712255d9478fb9baec6f2afc.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'spinach', 
    calories: '82', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'sweet potatoes', 
    calories: '110', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg',
    qty: '1.0',
    measurementType: 'Sweet Potato',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'zucchini', 
    calories: '21', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'boiled or grilled lobster', 
    calories: '286', 
    category: categories[2],    
    image: 'https://i.imgur.com/p1qj3K2.jpg',
    qty: '1.0',
    measurementType: 'Lobster',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'boiled or grilled mahi-mahi', 
    calories: '85', 
    category: categories[2],    
    image: 'https://i.imgur.com/ftoRavM.png',
    qty: '1.0',
    measurementType: 'Fillet',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'cooked shrimp', 
    calories: '105', 
    category: categories[2],    
    image: 'https://i.imgur.com/hVSa3TU.jpg',
    qty: '20.0',
    measurementType: 'Shrimps',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'crab', 
    calories: '98', 
    category: categories[2],    
    image: 'https://i.imgur.com/468i5D5.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'egg whites', 
    calories: '17', 
    category: categories[1],    
    image: 'https://i.imgur.com/8vIBdK6.jpg',
    qty: '1.0',
    measurementType: 'Egg',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'low sodium black beans', 
    calories: '218', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/850/8505bc3d47bbc820b69d532202f61ce1.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'oysters', 
    calories: '11', 
    category: categories[2],    
    image: 'https://i.imgur.com/LC0kzKv.jpg',
    qty: '1.0',
    measurementType: 'Serving (21g)',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'tofu', 
    calories: '177', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg',
    qty: '0.5',
    measurementType: 'Block',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'white fish fillet', 
    calories: '265', 
    category: categories[2],    
    image: 'https://i.imgur.com/xzWCqkN.jpg',
    qty: '1.0',
    measurementType: 'Fillet',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'non-fat skim milk', 
    calories: '90', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/525/525c95190fa7373279ac4c9cbfa436a4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cheese sticks and slices', 
    calories: '298', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/cc3/cc3c4827d251d79eed1ff87c1861aa34.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cottage cheese', 
    calories: '160', 
    category: categories[1],    
    image: 'https://i.imgur.com/WN4KFKg.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cream cheese spread', 
    calories: '302', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/fc7/fc77c17a6b7310e939f328b32dc64e81.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat greek yogurt', 
    calories: '160', 
    category: categories[1],    
    image: 'https://i.imgur.com/PfUS8pX.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat half and half', 
    calories: '10', 
    category: categories[1],    
    image: 'https://i.imgur.com/Q8oEeSR.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat sour cream', 
    calories: '12', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/fc7/fc77c17a6b7310e939f328b32dc64e81.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat yogurt', 
    calories: '173', 
    category: categories[1],    
    image: 'https://i.imgur.com/WN4KFKg.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'chicken bone broth', 
    calories: '41', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'beef bone broth', 
    calories: '35', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable bone broth', 
    calories: '13', 
    category: categories[3],    
    image: 'https://i.imgur.com/E5Ft0QE.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'butternut squash soup', 
    calories: '220', 
    category: categories[3],    
    image: 'https://i.imgur.com/cHMMXMW.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'cabbage soup', 
    calories: '50', 
    category: categories[3],    
    image: 'https://i.imgur.com/5B1qf3J.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'homemade chicken noodle soup', 
    calories: '100', 
    category: categories[1],    
    image: 'https://i.imgur.com/9q8UAPz.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'miso soup', 
    calories: '59', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/352/3525e5a38bb13c74aa34ef6c0273bf33.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'spinach soup', 
    calories: '73', 
    category: categories[3],    
    image: 'https://i.imgur.com/n9AGSGk.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'tomato and lentil soup', 
    calories: '86', 
    category: categories[3],    
    image: 'https://i.imgur.com/3k4Jx8B.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable barley soup', 
    calories: '190', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/32b/32baf9bd687a56afd88f726a6dc69882.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable pho', 
    calories: '352', 
    category: categories[3],    
    image: 'https://i.imgur.com/3dka0Gm.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'pickles', 
    calories: '7', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/80b/80b1e5307815f0d9471d86c2e7c36167.jpg',
    qty: '1.0',
    measurementType: 'Pickle',
    caloricDensity: 'green',
    foodType: 'snacks'
  },
  { 
    name: 'unsweetened applesauce', 
    calories: '204', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/c59/c59e749347516e4aa0aaa3ea25925426.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'snacks'
  },
  { 
    name: 'buffalo sauce', 
    calories: '1', 
    category: categories[4],    
    image: 'https://i.imgur.com/cKMr1z7.jpg',
    qty: '2.0',
    measurementType: 'tsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'hot sauce', 
    calories: '1', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/946/946c38a4c278da4361d2615d653d685a.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'lemon juice', 
    calories: '1', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'lime juice', 
    calories: '16', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg',
    qty: '0.25',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'salsa', 
    calories: '75', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'tomato pasta sauce', 
    calories: '176', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'red wine vinegar', 
    calories: '5', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'apple cider vinegar', 
    calories: '6', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'rice vinegar', 
    calories: '7', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'condiments'
  },
  { 
    name: 'dried apricots', 
    calories: '314', 
    category: categories[3],    
    image: 'https://i.imgur.com/7GnDzBY.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'fruits'
  },
  { 
    name: 'avocado', 
    category: categories[3],    
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Avocado',
    caloricDensity: 'yellow',
    foodType: 'fruit'
  },
  { 
    name: 'basmati rice', 
    calories: '205', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/43e/43e669c6de11504972da1ae1898ac19e.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'fried rice', 
    calories: '238', 
    category: categories[4],    
    image: 'https://i.imgur.com/ebGtCI3.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'couscous', 
    calories: '176', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/0ba/0ba047475ceba632ce566f8997c6f0a5.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'keto bread', 
    calories: '30', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'low carb tortilla', 
    calories: '70', 
    category: categories[4],    
    image: 'https://i.imgur.com/SpIKpit.jpg',
    qty: '1.0',
    measurementType: 'Tortilla',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'lasagna', 
    calories: '401', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/e6b/e6be67be9ab596ac7eeb1f9feb54999c.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'white pasta', 
    calories: '505', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/222/22205c8592e82a675d90e3673d710bb5.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'noodles', 
    calories: '196', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/c52/c523bc0bbc9fb862315198af8749be5d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'whole grain pita bread', 
    calories: '149', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/b8c/b8c2794a59279b7e0553c27e0769fbaf.jpg',
    qty: '1.0',
    measurementType: 'Medium Pita',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'rye bread', 
    calories: '83', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'stuffing', 
    calories: '642', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/617/617068594786702e2ccbe7aee824fa5a.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'grains'
  },
  { 
    name: 'ham', 
    calories: '186', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/004/004c6f6f873dbdcf75b49fc5435bb61b.png',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'salmon fillet', 
    calories: '468', 
    category: categories[2],    
    image: 'https://i.imgur.com/sRdKlXx.jpg',
    qty: '1.0',
    measurementType: 'Fillet',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'smoked salmon', 
    calories: '23', 
    category: categories[2],    
    image: 'https://i.imgur.com/sRdKlXx.jpg',
    qty: '1.0',
    measurementType: 'Piece',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'tuna salad', 
    calories: '383', 
    category: categories[2],    
    image: 'https://i.imgur.com/toXjwcP.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'roast beef', 
    calories: '474', 
    category: categories[0],    
    image: 'https://i.imgur.com/mLmv1Ax.jpg',
    qty: '1.0',
    measurementType: 'Slice (7 oz per Slice)',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'beef steak', 
    calories: '471', 
    category: categories[0],    
    image: 'https://i.imgur.com/W6579r3.jpg',
    qty: '1.0',
    measurementType: 'Serving (6 oz per Serving)',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'rotisserie chicken', 
    calories: '260', 
    category: categories[0],    
    image: 'https://i.imgur.com/A1bvMhP.jpg',
    qty: '1.0',
    measurementType: 'Chicken',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'chicken', 
    calories: '335', 
    category: categories[1],    
    image: 'https://i.imgur.com/zDjCl1H.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'turkey breast', 
    calories: '166', 
    category: categories[1],    
    image: 'https://i.imgur.com/Wzc4uem.jpg',
    qty: '1.0',
    measurementType: 'Serving (4 oz per Serving)',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'ground turkey', 
    calories: '169', 
    category: categories[1],    
    image: 'https://i.imgur.com/Q4byjUW.png',
    qty: '1.0',
    measurementType: 'Patty',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'turkey sausage', 
    calories: '147', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/182/18209b4b31a37a3aaa2b8d5a2fa5fae0.jpg',
    qty: '1.0',
    measurementType: 'Link',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'egg salad', 
    calories: '471', 
    category: categories[0],    
    image: 'https://i.imgur.com/6KKcn9K.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'hard boiled egg', 
    calories: '78', 
    category: categories[1],    
    image: 'https://i.imgur.com/6VS4wUa.jpg',
    qty: '1.0',
    measurementType: 'Egg',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'lean pork loin', 
    calories: '188', 
    category: categories[1],    
    image: 'https://i.imgur.com/3vCF1XN.jpg',
    qty: '1.0',
    measurementType: 'Serving (4 oz per Serving)',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'lean pork chop', 
    calories: '259', 
    category: categories[1],    
    image: 'https://i.imgur.com/t1IgcZA.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'pulled pork', 
    calories: '418', 
    category: categories[0],    
    image: 'https://i.imgur.com/O3dHPTk.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'meat protein'
  },
  { 
    name: 'low fat cottage cheese', 
    calories: '180', 
    category: categories[0],    
    image: 'https://i.imgur.com/g1GPdj0.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'dairy'
  },
  { 
    name: 'low fat yogurt', 
    calories: '216', 
    category: categories[1],    
    image: 'https://i.imgur.com/dftjLYQ.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'dairy'
  },
  { 
    name: 'low fat milk', 
    calories: '102', 
    category: categories[1],    
    image: 'https://www.edamam.com/food-img/f85/f859cce57955d778ccb5d0224e08cf93.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'dairy'
  },
  { 
    name: 'canned corn', 
    calories: '177', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/59c/59c4373175b468d87ac76a43d4349b57.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'fried mushrooms', 
    calories: '150', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/7dd/7ddc18efbecc5bb44fb638b2af17e148.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'grilled onions', 
    calories: '211', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/5f1/5f18e93c02bcf4eab14620febb53b5a2.png',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'roasted potatoes', 
    calories: '180', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/956/9561f54f6ba83ad619e9830487107b29.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'mashed potatoes', 
    calories: '237', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/3ba/3bad90497524770195b335d288d4a7e1.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'plantains', 
    calories: '205', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/a89/a895e325e16d684d8df7786aa7898f73.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'yams', 
    calories: '177', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/530/5301e2fd59307812cbd5276de724d6aa.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'pickled beets', 
    calories: '148', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/2c5/2c513e67af460b7f5ebe53028ceb8a37.jpg',
    qty: '1.0',
    measurementType: 'Cup Slices',
    caloricDensity: 'yellow',
    foodType: 'vegetables'
  },
  { 
    name: 'black-eyed peas', 
    calories: '120', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/7d0/7d0c43eab42a9e30db3bf3b53aa0203d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'black beans', 
    calories: '227', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/9d8/9d803ebe9881e45fad3f70d877780ad5.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'chickpeas', 
    calories: '269', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/59c/59c1e8fa37680d54775d3a8013eb7db6.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'edamame', 
    calories: '188', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/087/0871875e6db6422656a70b250640157a.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'hummus', 
    calories: '333', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/dd4/dd46febae7d039955a22d2e278293f41.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'lentils', 
    calories: '230', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/d5a/d5aa5bc5a3142f3179f31310054a56e6.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'legume and seeds'
  },
  { 
    name: 'broccoli cheddar soup', 
    calories: '433', 
    category: categories[4],    
    image: 'https://i.imgur.com/5iyCwn0.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'chicken tortilla soup', 
    calories: '260', 
    category: categories[4],    
    image: 'https://i.imgur.com/qjYFERB.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'cream of mushroom soup', 
    calories: '410', 
    category: categories[4],    
    image: 'https://i.imgur.com/D5CevIe.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'new england clam chowder', 
    calories: '402', 
    category: categories[4],    
    image: 'https://i.imgur.com/DcNmiot.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'split pea soup', 
    calories: '191', 
    category: categories[3],    
    image: 'https://i.imgur.com/4pxZMWp.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'tomato bisque soup', 
    calories: '285', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/056/0562051b49da4937cb41afeba32edb81.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'chicken noodle soup', 
    calories: '257', 
    category: categories[4],    
    image: 'https://i.imgur.com/rnWrgli.jpg',
    qty: '1.0',
    measurementType: 'Serving (16 oz per Serving)',
    caloricDensity: 'yellow',
    foodType: 'soups'
  },
  { 
    name: 'balsamic vinegar', 
    calories: '14', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'guacamole', 
    calories: '293', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/fc8/fc804ddb3fdf4b07f414b6ca930fb1b2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'ketchup', 
    calories: '17', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'low sodium soy sauce', 
    calories: '10', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'mustard', 
    calories: '3', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg',
    qty: '1.0',
    measurementType: 'tsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'sriracha', 
    calories: '18', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/946/946c38a4c278da4361d2615d653d685a.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'soy sauce, tamari', 
    calories: '15', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'splenda, stevia', 
    calories: '1', 
    category: categories[4],    
    image: 'https://i.imgur.com/McDVbBt.jpg',
    qty: '1.0',
    measurementType: 'Packet',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'sweet pickle relish', 
    calories: '15', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/210/210a09427be497df1915356d63d91d8b.jpeg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'worcestershire sauce', 
    calories: '13', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'yellow',
    foodType: 'condiments'
  },
  { 
    name: 'avocado toast', 
    calories: '189', 
    category: categories[4],    
    image: 'https://i.imgur.com/Qy80gzm.jpg',
    qty: '1.0',
    measurementType: 'Piece',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'bread and butter pickles', 
    calories: '14', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/012/0121cf9d4ee772af299f450bf577a8d3.jpeg',
    qty: '1.0',
    measurementType: 'Pickle',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'caesar salad', 
    calories: '192', 
    category: categories[4],    
    image: 'https://i.imgur.com/HqTOile.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'coleslaw', 
    calories: '348', 
    category: categories[4],    
    image: 'https://i.imgur.com/qqksuTR.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'greek salad', 
    calories: '179', 
    category: categories[0],    
    image: 'https://i.imgur.com/FlHntvu.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'kale salad', 
    calories: '84', 
    category: categories[3],    
    image: 'https://i.imgur.com/qevUb9q.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'pasta salad', 
    calories: '407', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'popcorn', 
    calories: '44', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/dd5/dd51dd3656053985cf1c47ca5c75c4db.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'potato salad', 
    calories: '358', 
    category: categories[4],    
    image: 'https://i.imgur.com/onjfXrD.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'sugar-free chocolate pudding', 
    calories: '70', 
    category: categories[4],    
    image: 'https://i.imgur.com/Fs7p6AM.jpg',
    qty: '1.0',
    measurementType: 'Pudding',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'sushi', 
    calories: '349', 
    category: categories[4],    
    image: 'https://i.imgur.com/1mcNKzB.jpg',
    qty: '1.0',
    measurementType: 'Roll',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'turkey sandwich', 
    calories: '310', 
    category: categories[4],    
    image: 'https://i.imgur.com/rdTk0p5.jpg',
    qty: '1.0',
    measurementType: 'Sandwich',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'veggie pizza', 
    calories: '170', 
    category: categories[4],    
    image: 'https://i.imgur.com/UbwzRyf.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'black coffee with splenda, stevia, equal', 
    calories: '4', 
    category: categories[4],    
    image: 'https://i.imgur.com/zLlnF7Y.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'tea with milk, splenda, stevia', 
    calories: '20', 
    category: categories[4],    
    image: 'https://i.imgur.com/GXMIOeR.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'snacks'
  },
  { 
    name: 'chai tea', 
    calories: '4', 
    category: categories[4],    
    image: 'https://i.imgur.com/icQ4VWd.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'club soda', 
    calories: '150', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/0c7/0c7ea246f0c3b05641539fd1861c1c20.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'soda', 
    calories: '1', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/0c7/0c7ea246f0c3b05641539fd1861c1c20.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'diet soda', 
    calories: '1', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/9b4/9b4a1ab566697c212af64b33b3f6c938.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'IPA beer', 
    calories: '197', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/7f8/7f82e3944cd8fcba3ffad7b6ce741c62.jpg',
    qty: '1.0',
    measurementType: 'Bottle',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'lager beer', 
    calories: '99', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/7f8/7f82e3944cd8fcba3ffad7b6ce741c62.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'lemonade', 
    calories: '99', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/311/3118a3ddad625ac41009a59ff610e6da.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'oat milk latte', 
    calories: '95', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/457/457087c973dd41ba1b08854c355ec183.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'orange juice', 
    calories: '112', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/011/011c0c3b0f3865bde575f57c556439e4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'rum and diet coke', 
    calories: '87', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/eb5/eb51e606b36b62c66ea1a245ab0d4a8b.jpg',
    qty: '1.0',
    measurementType: 'Rock Glass (8 fl oz)',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'soy milk', 
    calories: '100', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/8be/8bef4cf5daa1f41d90aff68c92ca56bc.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'super green smoothie', 
    calories: '112', 
    category: categories[3],    
    image: 'https://i.imgur.com/r6SIBCq.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'tonic water', 
    calories: '114', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/b59/b59c5aed899795bee3f7778433b511e3.jpg',
    qty: '1.0',
    measurementType: 'Bottle',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'unsweetened apple juice', 
    calories: '114', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'vodka soda', 
    calories: '54', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/e1a/e1a4708099e89fdadeb81c2d95deaa34.jpg',
    qty: '1.0',
    measurementType: 'Cocktail Glass',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'wine', 
    calories: '122', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/aeb/aebdd2e72bc13fa8ca762a408b6e58b6.jpg',
    qty: '1.0',
    measurementType: 'Wine Glass',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'ginger ale', 
    calories: '124', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/81d/81d3a248c4ca048ffabc9551cc96217d.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'yellow',
    foodType: 'beverages'
  },
  { 
    name: 'dried cranberries', 
    calories: '410', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/8aa/8aa3935a527394e1568079a489759221.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'fruits'
  },
  { 
    name: 'raisins', 
    calories: '956', 
    category: categories[3],    
    image: 'https://www.edamam.com/food-img/159/159e247350db62e1f87b0636a53687f5.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'red',
    foodType: 'fruits'
  },
  { 
    name: 'french fries', 
    calories: '173', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/559/559b143365bf3dde8d5889ec627e1da7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'vegetables'
  },
  { 
    name: 'french onions', 
    calories: '584', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'vegetables'
  },
  { 
    name: 'french pickles', 
    calories: '50', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/80b/80b1e5307815f0d9471d86c2e7c36167.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'vegetables'
  },
  { 
    name: 'sweet potato fries', 
    calories: '298', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/c44/c44503b726d4379d7813de4ebdc0e76b.jpg',
    qty: '20.0',
    measurementType: 'Fries',
    caloricDensity: 'red',
    foodType: 'vegetables'
  },
  { 
    name: 'butter', 
    calories: '100', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'cottage cheese', 
    calories: '214', 
    category: categories[0],    
    image: 'https://i.imgur.com/WN4KFKg.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'dairy cream', 
    calories: '30', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'cream cheese', 
    calories: '51', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/fc7/fc77c17a6b7310e939f328b32dc64e81.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'cheddar cheese', 
    calories: '110', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/af8/af88890facab925abf729a73714f6ea9.png',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'full fat yogurt', 
    calories: '61', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/9bd/9bd861dbd83731bc03091a30f09f9728.jpg',
    qty: '1.0',
    measurementType: 'Serving (100g)',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'half and half', 
    calories: '18', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/c22/c22242b5b81b78d4cb2996946ee9459c.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'margarine', 
    calories: '102', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/e1d/e1deed85a7d1c9132466ea4513ee3070.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'sour cream', 
    calories: '24', 
    category: categories[0],    
    image: 'https://i.imgur.com/R6Q4D7w.png',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'whole milk', 
    calories: '149', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/e4f/e4f167fbcac1ff50cd68d187de638b35.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'dairy'
  },
  { 
    name: 'all-purpose flour', 
    calories: '455', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'bagel', 
    calories: '277', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/755/7553666b2864e4003538607529dcccde.jpg',
    qty: '1.0',
    measurementType: 'Bagel',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'flour tortilla', 
    calories: '159', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/357/357e415685787e6d6844e8d08c1b1586.jpg',
    qty: '1.0',
    measurementType: 'Tortilla',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'garlic bread', 
    calories: '206', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/cac/cac9a071d5da19d9c8b8af9ddaa9a186.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'granola', 
    calories: '596', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/c1d/c1ddb4084dd26bd5fa47e01bb49ed6a8.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'muffins', 
    calories: '117', 
    category: categories[4],    
    image: 'https://i.imgur.com/Kh1pyHK.jpg',
    qty: '1.0',
    measurementType: 'Muffin',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'banana bread', 
    calories: '247', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/869/869d807713fe1d7daf40ed31b843245a.jpg',
    qty: '1.0',
    measurementType: 'Piece',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'rolls and buns', 
    calories: '76', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/78f/78ffbae0365a1a431061ff397c3b6d38.jpg',
    qty: '1.0',
    measurementType: 'Roll',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'sourdough', 
    calories: '116', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'sweetened oatmeal', 
    calories: '136', 
    category: categories[4],    
    image: 'https://i.imgur.com/xMpbqrj.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'waffle', 
    calories: '218', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/f0b/f0bbafeabcca46f1fcd1cea65794c524.png',
    qty: '1.0',
    measurementType: 'Waffle',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'white breads', 
    calories: '65', 
    category: categories[4],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'red',
    foodType: 'grains'
  },
  { 
    name: 'bacon', 
    calories: '53', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'chicken nuggets', 
    calories: '490', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/853/853b7c281a7108739b5b987fe290e60e.jpg',
    qty: '10.0',
    measurementType: 'Nuggets',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'chicken wings', 
    calories: '610', 
    category: categories[0],    
    image: 'https://i.imgur.com/Yyb4biG.jpg',
    qty: '8.0',
    measurementType: 'Wing(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'salami', 
    calories: '41', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/b1e/b1e1be598ceb08d50d9c1f5d49b49f6a.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'fried chicken', 
    calories: '49', 
    category: categories[0],    
    image: 'https://i.imgur.com/m7X3Xzh.jpg',
    qty: '1.0',
    measurementType: 'Piece(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'fried shrimp', 
    calories: '38', 
    category: categories[2],    
    image: 'https://i.imgur.com/E76gqcA.jpg',
    qty: '1.0',
    measurementType: 'Piece(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'hot dog(s)', 
    calories: '151', 
    category: categories[0],    
    image: 'https://i.imgur.com/VSFUN8V.jpg',
    qty: '1.0',
    measurementType: 'Hot Dog(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'meatballs', 
    calories: '81', 
    category: categories[0],    
    image: 'https://i.imgur.com/EM3l56C.jpg',
    qty: '1.0',
    measurementType: 'Meatball(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'pork belly', 
    calories: '335', 
    category: categories[0],    
    image: 'https://www.edamam.com/food-img/fb4/fb445aa0a648d1cf83eca55a05c7ce77.jpg',
    qty: '1.0',
    measurementType: 'Serving (4 oz per Serving)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'pork ribs', 
    calories: '235', 
    category: categories[0],    
    image: 'https://i.imgur.com/XMgjTN5.jpg',
    qty: '1.0',
    measurementType: 'Rib(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'ground beef', 
    calories: '558', 
    category: categories[0],    
    image: 'https://i.imgur.com/7uCr8EC.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'beef brisket', 
    calories: '327', 
    category: categories[0],    
    image: 'https://i.imgur.com/vcyEIOC.jpg',
    qty: '1.0',
    measurementType: 'Serving (4 oz per Serving)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'beef jerky', 
    calories: '465', 
    category: categories[0],    
    image: 'https://i.imgur.com/QEchPPK.jpg',
    qty: '1.0',
    measurementType: 'Serving (4 oz per Serving)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'sausage', 
    calories: '88', 
    category: categories[0],    
    image: 'https://i.imgur.com/fI3eRHS.jpg',
    qty: '1.0',
    measurementType: 'Patty',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'turkey bacon', 
    calories: '30', 
    category: categories[0],    
    image: 'https://i.imgur.com/t8hG5FI.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'meat protein'
  },
  { 
    name: 'potato soup', 
    calories: '572', 
    category: categories[4],    
    image: 'https://i.imgur.com/8hpPi1E.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'red',
    foodType: 'soups'
  },
  { 
    name: 'ramen', 
    calories: '30', 
    category: categories[4],    
    image: 'https://i.imgur.com/CFOEuiz.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'soups'
  },
  { 
    name: 'chutney', 
    calories: '320', 
    category: categories[4],    
    image: 'https://i.imgur.com/oKxe19Y.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'coconut milk', 
    calories: '445', 
    category: categories[3],    
    image: 'https://i.imgur.com/xyPxFy5.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'ghee', 
    calories: '41', 
    category: categories[0],    
    image: 'https://i.imgur.com/Tbqg9sn.jpg',
    qty: '1.0',
    measurementType: 'tsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'honey', 
    calories: '60', 
    category: categories[3],    
    image: 'https://i.imgur.com/fI0jzBX.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'jam and jellies', 
    calories: '55', 
    category: categories[4],    
    image: 'https://i.imgur.com/59gvs0s.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'maple syrup', 
    calories: '52', 
    category: categories[4],    
    image: 'https://i.imgur.com/n2HmFs5.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'marmite', 
    calories: '11', 
    category: categories[4],    
    image: 'https://i.imgur.com/tCiUVV5.jpg',
    qty: '1.0',
    measurementType: 'tsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'mayo', 
    calories: '100', 
    category: categories[4],    
    image: 'https://i.imgur.com/ZHwgWrJ.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'olive oil', 
    calories: '124', 
    category: categories[0],    
    image: 'https://i.imgur.com/6iCg7BA.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'coconut oil', 
    calories: '104', 
    category: categories[0],    
    image: 'https://i.imgur.com/oV0T5dd.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'avocado oil', 
    calories: '40', 
    category: categories[0],    
    image: 'https://i.imgur.com/YVjWKk5.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'sesame oil', 
    calories: '124', 
    category: categories[0],    
    image: 'https://i.imgur.com/cUtRHbn.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'canola oil', 
    calories: '124', 
    category: categories[0],    
    image: 'https://i.imgur.com/4lOTTke.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'ranch dressing', 
    calories: '64', 
    category: categories[4],    
    image: 'https://i.imgur.com/MTiBUDv.png',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'caesar dressing', 
    calories: '30', 
    category: categories[4],    
    image: 'https://i.imgur.com/83x0I7W.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'balsamic vinegar', 
    calories: '14', 
    category: categories[3],    
    image: 'https://i.imgur.com/b4lBwjD.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'seasoned croutons', 
    calories: '17', 
    category: categories[4],    
    image: 'https://i.imgur.com/8MiuoEQ.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'condiments'
  },
  { 
    name: 'potato chips', 
    calories: '10', 
    category: categories[4],    
    image: 'https://i.imgur.com/S7qVTsV.jpg',
    qty: '1.0',
    measurementType: 'Chip',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'tortilla chips', 
    calories: '148', 
    category: categories[4],    
    image: 'https://i.imgur.com/YtFgVYS.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'nut butter', 
    calories: '95', 
    category: categories[3],    
    image: 'https://i.imgur.com/0beepb7.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'walnuts', 
    calories: '642', 
    category: categories[3],    
    image: 'https://i.imgur.com/8661pj4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'almonds', 
    calories: '51', 
    category: categories[3],    
    image: 'https://i.imgur.com/hL8PeFU.jpg',
    qty: '16.0',
    measurementType: 'Almonds',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'pecans', 
    calories: '726', 
    category: categories[3],    
    image: 'https://i.imgur.com/8MiuoEQ.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'cashews', 
    calories: '160', 
    category: categories[3],    
    image: 'https://i.imgur.com/VrveQF3.jpg',
    qty: '1.0',
    measurementType: 'Serving (1 oz per Serving)',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'pistachios', 
    calories: '689', 
    category: categories[3],    
    image: 'https://i.imgur.com/p5tvp0v.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'pretzels', 
    calories: '11', 
    category: categories[4],    
    image: 'https://i.imgur.com/LTg7Gzu.jpg',
    qty: '1.0',
    measurementType: 'Pretzel',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'protein bars', 
    calories: '211', 
    category: categories[0],    
    image: 'https://i.imgur.com/wREg1zM.jpg',
    qty: '1.0',
    measurementType: 'Bar',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'sunflower seeds', 
    calories: '699', 
    category: categories[3],    
    image: 'https://i.imgur.com/SdwHpfV.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'chia seeds', 
    calories: '58', 
    category: categories[3],    
    image: 'https://i.imgur.com/bVds2ey.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'pumpkin seeds', 
    calories: '285', 
    category: categories[3],    
    image: 'https://i.imgur.com/8MiuoEQ.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'flax seeds', 
    calories: '55', 
    category: categories[3],    
    image: 'https://i.imgur.com/8MiuoEQ.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'trail mix', 
    calories: '706', 
    category: categories[3],    
    image: 'https://i.imgur.com/YGZuBjN.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'snacks'
  },
  { 
    name: 'bourbon', 
    calories: '97', 
    category: categories[4],    
    image: 'https://i.imgur.com/ao8viaw.jpg',
    qty: '1.0',
    measurementType: 'Shot',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'chocolate milk', 
    calories: '211', 
    category: categories[4],    
    image: 'https://i.imgur.com/YnmWNIk.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'cocktails', 
    calories: '110', 
    category: categories[4],    
    image: 'https://i.imgur.com/zHgyKlj.jpg',
    qty: '1.0',
    measurementType: 'Serving (2 fl oz per Serving)',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'coffee creamers', 
    calories: '20', 
    category: categories[0],    
    image: 'https://i.imgur.com/b1YN8iZ.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'energy drink', 
    calories: '111', 
    category: categories[4],    
    image: 'https://i.imgur.com/6XKpV9a.jpg',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'grape juice', 
    calories: '150', 
    category: categories[4],    
    image: 'https://i.imgur.com/cmqvAJL.png',
    qty: '1.0',
    measurementType: 'Can',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'hot chocolate', 
    calories: '151', 
    category: categories[4],    
    image: 'https://i.imgur.com/Yq2Q2aF.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'margarita', 
    calories: '226', 
    category: categories[4],    
    image: 'https://i.imgur.com/KhcVi4h.jpg',
    qty: '1.0',
    measurementType: 'Cocktail',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'oat milk', 
    calories: '95', 
    category: categories[4],    
    image: 'https://i.imgur.com/zAzneYt.jpg',
    qty: '1.0',
    measurementType: 'Cocktail',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'protein shakes', 
    calories: '171', 
    category: categories[0],    
    image: 'https://i.imgur.com/xFrPiYm.jpg',
    qty: '1.0',
    measurementType: 'Bottle',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'red wine', 
    calories: '165', 
    category: categories[4],    
    image: 'https://i.imgur.com/c2tnkZw.jpg',
    qty: '1.0',
    measurementType: 'Wine Glass',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'regular sodas', 
    calories: '150', 
    category: categories[4],    
    image: 'https://i.imgur.com/2pVz8Kg.jpg',
    qty: '1.0',
    measurementType: 'Container',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'specialty coffee drinks', 
    calories: '135', 
    category: categories[4],    
    image: 'https://i.imgur.com/2pVz8Kg.jpg',
    qty: '1.0',
    measurementType: 'Serving (16.3 fl oz per Serving)',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'whiskey', 
    calories: '97', 
    category: categories[4],    
    image: 'https://i.imgur.com/2pVz8Kg.jpg',
    qty: '1.0',
    measurementType: 'Shot Glass',
    caloricDensity: 'red',
    foodType: 'beverages'
  },
  { 
    name: 'cakes', 
    calories: '157', 
    category: categories[4],    
    image: 'https://i.imgur.com/wdZ3Wa3.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'brownies', 
    calories: '97', 
    category: categories[4],    
    image: 'https://i.imgur.com/ISMtWRY.jpg',
    qty: '1.0',
    measurementType: 'Brownie',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'candy', 
    calories: '24', 
    category: categories[4],    
    image: 'https://i.imgur.com/sDkJZxW.jpg',
    qty: '1.0',
    measurementType: 'Candy',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'chocolate', 
    calories: '37', 
    category: categories[4],    
    image: 'https://i.imgur.com/zSrMPKi.jpg',
    qty: '1.0',
    measurementType: 'Piece',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'cookies', 
    calories: '117', 
    category: categories[4],    
    image: 'https://i.imgur.com/kXM9Jtl.jpg',
    qty: '1.0',
    measurementType: 'Cookie',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'doughnuts', 
    calories: '303', 
    category: categories[4],    
    image: 'https://i.imgur.com/qOqyeZu.jpg',
    qty: '1.0',
    measurementType: 'Doughnut(s)',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'ice cream', 
    calories: '340', 
    category: categories[4],    
    image: 'https://i.imgur.com/TSrPB1F.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'pies', 
    calories: '296', 
    category: categories[4],    
    image: 'https://i.imgur.com/oxsUb8N.jpg',
    qty: '1.0',
    measurementType: 'Slice(s)',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  { 
    name: 'sugar', 
    calories: '16', 
    category: categories[4],    
    image: 'https://i.imgur.com/wBjoD5Y.jpg',
    qty: '1.0',
    measurementType: 'tsp',
    caloricDensity: 'red',
    foodType: 'desserts'
  },
  {
    name: 'whipped cream', 
    calories: '7', 
    category: categories[4],    
    image: 'https://i.imgur.com/WRLoSF3.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'red',
    foodType: 'desserts'
  },

  
 
  
  ]);

  console.log(items)

  process.exit();

})();