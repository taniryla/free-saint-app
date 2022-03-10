require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'gluten-free', sortOrder: 10},
    {name: 'keto-friendly', sortOrder: 20},
    {name: 'paleo', sortOrder: 30},
    {name: 'pescatarian', sortOrder: 40},
    {name: 'vegan', sortOrder: 50},
    {name: 'vegetarian', sortOrder: 60},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([   
  { 
    name: 'banana', 
    calories: '89', 
    edamanId: 'food_bjsfxtcaidvmhaa3afrbna43q3hu', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'apple', 
    calories: '52', 
    edamanId: 'food_a1gb9ubb72c7snbuxr3weagwv0dd', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'asparagus', 
    calories: '15', 
    edamanId: 'food_bpkl8kmahyao17b1pvce5bua1iao', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9ca/9caf90492f148dc3deee587160c3990e.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'broccoli', 
    calories: '34', 
    edamanId: 'food_aahw0jha9f8337ajbopx9aec6z7i', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'grapefruit', 
    calories: '33', 
    edamanId: 'food_a5jyw74bd45tgfazfags0akmsjlv', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  ]);

  console.log(items)

  process.exit();

})();